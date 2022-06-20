var weight = prompt("what is your weight");
var height = prompt("what is your height");

function bmiCalculator (weight, height) {
    var bmi = Math.round(weight/(height*height),1);
    var interpretation="";

    if (bmi < 18.5) {
      interpretation = "Your BMI is " + bmi + ", so you are underweight.";
    }

    if (bmi > 24.9) {
      interpretation = "Your BMI is " + bmi + ", so you are overweight.";
    }

    if (bmi < 25 && bmi > 18.4) {
      interpretation = "Your BMI is " + bmi + ", so you have a normal weight.";
    }

    return interpretation;
}

var bmi = bmiCalculator(weight, height);

alert(bmi);
