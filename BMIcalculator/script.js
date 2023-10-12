const form = document.querySelector('form');
const resultDiv = document.getElementById('results');


form.addEventListener('submit', (e) => {
    e.preventDefault();

    const height = parseInt(document.getElementById('height').value);
    const weight = parseInt(document.getElementById('weight').value);

    let bmi = calculateBMI(height, weight);

    displayBMI(bmi);
})


// function to calculate BMI
function calculateBMI(h, w) {
    if (h === "" || h < 0 || isNaN(h)) {
        document.getElementById('height').style.animationName = "error";
        setTimeout(() => {
            document.getElementById('height').style.animationName = "";
        }, 1000);
        return "Please give a valid height";
    }
    else if (w === "" || w < 0 || isNaN(w)) {
        document.getElementById('weight').style.animationName = "error";
        setTimeout(() => {
            document.getElementById('weight').style.animationName = "";
        }, 1000);
        return "Please give a valid weight";
    }
    else {
        h = h / 100; //converting height in 'm' from 'cm'
        return (w / (h * h)).toFixed(2);
    }
}


// function to display BMI in result
function displayBMI(bmi) {
    resultDiv.innerHTML = `<span>${bmi}</span>`;
    let p = document.createElement('p');
    let msg = "";
    if (bmi < 18.6 && bmi > 0) {
        msg = "You are Under Weight.<br>Increase your Weight";
        p.classList.add('text-danger');
    } else if (bmi >= 18.6 && bmi <= 24.9) {
        msg = "Great !!! Your BMI is Normal"
        p.classList.add('text-success');
    } else if (bmi > 24.9) {
        msg = "You are Over Weight.<br> Hit the Gym."
        p.classList.add('text-danger');
    }
    p.innerHTML = msg;
    resultDiv.appendChild(p);

}