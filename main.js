window.onload = () => {
    const button = document.querySelector('#btn');
    button.addEventListener('click', calculateBmi)
}


function calculateBmi() {
    const height = document.querySelector('#height').value;
    const weight = document.querySelector('#weight').value;
    const result = document.querySelector('#result');

    if (!height || isNaN(height) || height < 0) {
        result.innerHTML = "Please provide a valid height";
        return;
    } else if (!weight || isNaN(weight) || weight < 0) {
        result.innerHTML = "Please provide a valid weight";
        return;
    }

    const bmi = (weight / (height * height) / 10000).toFixed(2);

    if (bmi < 18.5) {
        result.innerHTML = `Underweight: ${bmi}`;
    } else if (bmi >= 18.5 && bmi < 24.9) {
        result.innerHTML = `Normal weight: ${bmi}`;
    } else if ((bmi >= 25 && bmi < 29.9)) {
        result.innerHTML = `Over weight: ${bmi}`;
    } else if ((bmi >= 30 && bmi < 34.9)) {
        result.innerHTML = `Obesity (Class 1): ${bmi}`;
    } else if ((bmi >= 35.5 && bmi < 39.9)) {
        result.innerHTML = `Obesity (Class 2): ${bmi}`;
    } else {
        result.innerHTML = `Extreme Obesity : ${bmi}`;
    }
}