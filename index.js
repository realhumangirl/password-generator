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

function getRandomString(length) {
    for (let i = 0; i < length; i++) {
        getRandomCharacter()
    }
    randomString += randomCharacter
    passwords.push(randomString.slice(-length))
}

function generatePassword() {
    passwords = []
    let length = parseInt(document.getElementById("digits").value)
    for (let i = 0; i < passwordOption.length; i++) {
        getRandomString(length)
        let e = passwordOption[i]
        e.textContent = passwords[i]
    }
}
