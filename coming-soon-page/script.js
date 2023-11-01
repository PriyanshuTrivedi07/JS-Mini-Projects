const scriptURL = 'https://script.google.com/macros/s/AKfycbw2HsKfRzFikr0osF4hx2bCvXiYpT9W78PBgKOjMYG5J1lUywAx1kZ1vmi4otBJTnM36g/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            console.log(response);
            showToast(successMsg, "success");
            form.reset();
        })
        .catch(error => console.error('Error!', error.message))
})


let toastBox = document.getElementById('toastBox');
let successMsg = '<i class="bi bi-check-circle-fill"></i> Thankyou for Subscribing :)<br> We will notify you.';
let errorMsg = '<i class="bi bi-exclamation-triangle-fill"></i> Please fix the error!';
let invalidMsg = '<i class="bi bi-exclamation-circle-fill"></i> Invalid Input. Check again!';

function showToast(msg, status) {
    let toast = document.createElement('div');

    toast.classList.add('alert');
    toast.classList.add("alert-" + status);
    toast.classList.add('mytoast');


    toast.innerHTML = msg;
    toastBox.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 4000);
}