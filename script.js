function calculateBMI() {
    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value);
    var resultElement = document.getElementById('result');

    if (weight <= 0 || height <= 0) {
        resultElement.textContent = "Please enter valid weight and height.";
    } else{

    var bmi = weight / (height * height);
    var roundedBmi = bmi.toFixed(2);
    var category = "";
    
    if (bmi < 18.5) { 
        category = "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
        category = "Normal weight";
    } else if (bmi >= 25 && bmi < 30) {
        category = "Overweight";
    } else {
        category = "Obese";
    }

    resultElement.textContent = `Your BMI is: ${roundedBmi} and category: ${category}`;
    }
}