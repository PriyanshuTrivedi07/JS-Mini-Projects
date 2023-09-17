const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


const passwordBox = document.getElementById('password');
const generateBtn = document.getElementById('generate-btn');
const copyBtn = document.querySelector('.display-pass i');

const length = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "012346789";
const symbols = "@#$%^&*_+~|<>/=";
const allChars = upperCase + lowerCase + numbers + symbols;

function generatePassword(){
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    while(password.length < length){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    return password;
}



generateBtn.addEventListener('click',()=>{
    
    passwordBox.value = generatePassword();
    copyBtn.classList.remove('bi-clipboard-check-fill');
});

copyBtn.addEventListener('click',()=>{
    // copyBtn.classList.remove('bi-lightning-fill');
    copyBtn.classList.add('bi-clipboard-check-fill');
    navigator.clipboard.writeText(passwordBox.value);
})


