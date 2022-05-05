const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWQYZ1234567890!#$"
var password = ""
const generateButton = document.getElementById("generate-button")
const password1 = document.getElementById("password1")
const password2 = document.getElementById("password2")
const password3 = document.getElementById("password3")
const password4 = document.getElementById("password4")


function generatePassword() {
    //Setting the passwords length from the input in the input field
    var passwordLength = document.getElementById("password-length").value

    for (let i = 0; i < passwordLength; i++) {
        let randomPassword = characters[Math.floor(Math.random() * characters.length)]
        password += randomPassword
    } 
}

function displayPasswords() {
    //Creating multiple password functions is done so that we wont just get the same password four times.
    function firstPassword() {
        generatePassword()
        password1.textContent = password
        //Setting password to an empty string here makes sure that the password variable is empty for the next funxtion, else it would display the first password again.
        password = ""
    }
    function secondPassword() {
        generatePassword()
        password2.textContent = password
        password = ""
    }
    function thirdPassword() {
        generatePassword()
        password3.textContent = password
        password = ""
    }
    function fourthPassword() {
        generatePassword()
        password4.textContent = password
        password = ""
    }

    firstPassword()
    secondPassword()
    thirdPassword()
    fourthPassword()
}