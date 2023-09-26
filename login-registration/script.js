const loginBtn = document.getElementById('login-btn');
const registerBtn = document.getElementById('register-btn');
const swipeBtn = document.getElementById('swipe-btn');
const loginTab = document.getElementById('login');
const registerTab = document.getElementById('register');


registerBtn.addEventListener('click',()=>{
  swipeBtn.style.left = "50%";
  loginTab.style.left = "-300px";
  registerTab.style.left = "48px";

})
loginBtn.addEventListener('click',()=>{
  swipeBtn.style.left = "0";
  loginTab.style.left = "48px";
  registerTab.style.left = "400px";
})