// Assignment code here
// Get references to the #generate element
document.getElementById("generate").addEventListener("click", passwordGenerate)
function passwordGenerate () {
    // After click 'Submit' button, let customer input, Get value from customer input */
    while (true) {
        passwordLength = Number(prompt('Please Enter Your Password Length (the number must be between 8 to 128):'))
        if (passwordLength < 8) {
            alert('The number must be greater than 8!')
        } else if (passwordLength > 128) {
            alert('The number must be less than 128!')
        } else if (isNaN(passwordLength)) {
            alert(`Please only enter a NUMBER between 8 to 128!`)
        } else {     
            alert(`Your Password Length is: ${passwordLength}`)
            break
        }
    }

    /* This is the array of our characters */   
    while (true) {
        includeNumbers = prompt('Including Numbers? Please ONLY enter "yes" or "no"!')
        if (includeNumbers !== 'yes' && includeNumbers !== 'no') {
            alert (`Please ONLY enter "yes" or "no"!`)
        } else if (includeNumbers === 'yes' || includeNumbers === 'no') {
            alert (`Is your password including numbers? Your answer is '${includeNumbers}'.`)
            break
        }        
    }
    
    while (true) {
        includeUppercase = prompt('Including Uppercase? Please ONLY enter "yes" or "no"!')
        if (includeUppercase !== 'yes' && includeUppercase !== 'no') {
            alert (`Please ONLY enter "yes" or "no"!`)
        } else if (includeUppercase === 'yes' || includeUppercase === 'no') {
            alert (`Is your password including uppercase? Your answer is '${includeUppercase}'.`)
            break
        }        
    }
    
    while (true) {
        includeSymbols = prompt('Including Symbols? Please ONLY enter "yes" or "no"!')
        if (includeSymbols !== 'yes' && includeSymbols !== 'no') {
            alert (`Please ONLY enter "yes" or "no"!`)
        } else if (includeSymbols === 'yes' || includeSymbols === 'no') {
            alert (`Is your password including symbols? Your answer is '${includeSymbols}'.`)
            break
        }        
    }

    while (true) {
        includeLowercase = prompt('Including Lowercase? Please ONLY enter "yes" or "no"!')
        if (includeLowercase !== 'yes' && includeLowercase !== 'no') {
            alert (`Please ONLY enter "yes" or "no"!`)
        } else if (includeLowercase === 'yes' || includeLowercase === 'no') {
            alert (`Is your password including symbols? Your answer is '${includeLowercase}'.`)
            break
        }        
    }
    let UPPERCASE_CHAR_CODES = arrayFromCharCodeLowToHigh(65, 90)
    let LOWERCASE_CHAR_CODES = arrayFromCharCodeLowToHigh(97, 122)
    let NUMBER_CHAR_CODES = arrayFromCharCodeLowToHigh(48, 57)
    let SYMBOL_CHAR_CODES = arrayFromCharCodeLowToHigh(33, 47).concat(
        arrayFromCharCodeLowToHigh(58, 64)
    ).concat(
        arrayFromCharCodeLowToHigh(91, 96)
    ).concat(
        arrayFromCharCodeLowToHigh(123, 126)
    )

    function arrayFromCharCodeLowToHigh(low, high) {
        let array = []
        for (let i = low; i <= high; i++) {
            array.push(i)
        }
        return array
    }

    /* This is Generate Password Function */ 
    let charCodes = []

    if (includeLowercase === 'yes') {
        charCodes = charCodes.concat(LOWERCASE_CHAR_CODES)
    }
   
    if (includeUppercase === 'yes') {
        charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
    }

    if (includeNumbers === 'yes') {
        charCodes = charCodes.concat(NUMBER_CHAR_CODES)
    } 

    if (includeSymbols === 'yes') {
        charCodes = charCodes.concat(SYMBOL_CHAR_CODES)
    } 

    let passwordCharacters = []
    for (let i = 0; i < passwordLength; i++) {
        let characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
        passwordCharacters.push(String.fromCharCode(characterCode))
    }

    // Write password to the #password input
    let passwordText = document.querySelector("#password");    
    passwordText.value = passwordCharacters.join('');
}


