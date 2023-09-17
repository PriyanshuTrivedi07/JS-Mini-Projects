const passwordField = document.getElementById('password');
const eyeIcon = document.querySelector('.input-box i');
const message = document.getElementById('msg');
const strength = document.getElementById('strength');


eyeIcon.addEventListener('click', showHide);
passwordField.addEventListener('input', showPasswordStrength);

function showHide() {
    // eyeIcon.classList.toggle('bi-eye-slash-fill');
    // eyeIcon.classList.toggle('bi-eye-fill');

    if (passwordField.type == 'password') {
        passwordField.type = 'text';
        eyeIcon.classList.remove('bi-eye-slash-fill');
        eyeIcon.classList.add('bi-eye-fill');
    }
    else if (passwordField.type == 'text') {
        passwordField.type = 'password';
        eyeIcon.classList.add('bi-eye-slash-fill');
        eyeIcon.classList.remove('bi-eye-fill');
    }
}

function showPasswordStrength(){
    if(passwordField.value.length > 0){
        message.style.display = "block";
    }else{
        message.style.display = "none";
        document.documentElement.style.setProperty('--warning-text-color', 'transparent');
    }

    if(passwordField.value.length < 4 && passwordField.value.length > 0){
        strength.innerHTML = "weak";
        document.documentElement.style.setProperty('--warning-text-color', 'red');
    }
    else if(passwordField.value.length >= 4 && passwordField.value.length < 8){
        strength.innerHTML = "medium";
        document.documentElement.style.setProperty('--warning-text-color', 'yellow');
    }
    else if(passwordField.value.length >= 4){
        strength.innerHTML = "strong";
        document.documentElement.style.setProperty('--warning-text-color', 'green');
    }
}