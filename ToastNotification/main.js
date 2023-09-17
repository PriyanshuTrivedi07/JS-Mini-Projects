let toastBox = document.getElementById('toastBox');
let successMsg = '<i class="bi bi-check-circle-fill"></i> Successfully Submitted :)';
let errorMsg = '<i class="bi bi-exclamation-triangle-fill"></i> Please fix the error!';
let invalidMsg = '<i class="bi bi-exclamation-circle-fill"></i> Invalid Input. Check again!';

function showToast(msg, status) {
    let toast = document.createElement('div');

    toast.classList.add('alert');
    toast.classList.add("alert-"+status);
    toast.classList.add('mytoast'); 
    

    toast.innerHTML = msg;
    toastBox.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 4000);
}