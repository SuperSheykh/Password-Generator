const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let buttonEl = document.getElementById("gen-button")
let passOneEl = document.getElementById("password-one")
let passTwoEl = document.getElementById("password-two")

function genThePasswords() {
    
    passOneEl.textContent = ""
    passTwoEl.textContent = ""
    passOneEl.className = "notempty"
    passTwoEl.className = "notempty"
    
    passOneEl.textContent = genPassword()
    passTwoEl.textContent = genPassword()
}

function genPassword() {
    let passWord = ""
    for (let i=0; i<16 ; i++) {
    let rNum = Math.floor(Math.random()*characters.length)
        passWord += characters[rNum]
    }
    return passWord
}

buttonEl.addEventListener("click",genThePasswords)

