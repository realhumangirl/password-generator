let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~`! @#$%^&*()_-+={[}]|\:;'<,>.?/"
const characters = text.split("")
let randomCharacter = ""
let randomString = ""
let passwords = []
let passwordSection = document.getElementById("password-options")
let passwordOption = passwordSection.getElementsByClassName("password")

function getRandomCharacter() {
    let i = Math.floor(Math.random() * characters.length)
    randomCharacter += characters[i]
}

function getRandomString() {
    for (let i = 0; i < 15; i++) {
        getRandomCharacter()
    }
    randomString += randomCharacter
    passwords.push(randomString.slice(-15))
}

function generatePassword() {
    passwords = []
    for (let i = 0; i < passwordOption.length; i++) {
        getRandomString()
        let e = passwordOption[i]
        e.textContent = passwords[i]
    }
}

