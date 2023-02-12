const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let genBtn = document.getElementById("gen-btn")
let passOneEl = document.getElementById("password-one")
let passTwoEl = document.getElementById("password-two")


function defaultSetting() {
    document.querySelector("#nb-length").value = 15
    document.querySelector("#ad-numbers").checked = true
    document.querySelector("#ad-caracs").checked = true
}

defaultSetting()

function genThePasswords() {
    
    // passOneEl.textContent = ""
    // passTwoEl.textContent = ""
    passOneEl.className = "notempty"
    passTwoEl.className = "notempty"
    
    
    let myCharacters = characters

    function genPassword() {
        let passLength = document.querySelector("#nb-length").value
       
        let passWord = ""
    
        for (let i=0; i<passLength ; i++) {
        let rNum = Math.floor(Math.random()*myCharacters.length)
        passWord += myCharacters[rNum]
        
    }
    
    return passWord
}
passOneEl.textContent = genPassword()
passTwoEl.textContent = genPassword()
}


function genTheCharacters () {
     let copyCharacters = characters.slice(0,characters.length)
     let myCharacters = []
     let chiffres = []
     let symbols = []
     
     let wNumber = document.querySelector("#ad-numbers").checked
     let wSymbol = document.querySelector("#ad-caracs").checked
     
     if (wNumber === true) {
         chiffres = copyCharacters.slice(52,62)          
        } 
        
        if (wSymbol === true) {
            symbols = copyCharacters.slice(62,characters.length)             
        } 
        
        let alphabet = copyCharacters.splice(52, characters.length - 52)
        
        myCharacters = (alphabet.concat(chiffres)).concat(symbols)
        console.log(myCharacters)
     return myCharacters
    
}


genBtn.addEventListener("click", genThePasswords)

// genBtn.addEventListener("click", function myTest(){
//     console.log(genPassword())
// })

