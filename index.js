let m, bmi;




document.getElementById("submit").onclick= function() {
    num = document.getElementById("num").value;
    feet = document.getElementById("feet").value;
    inch = document.getElementById("inch").value;
    num= Number(num);
    feet=Number(feet);
    inch=Number(inch);

    m = ((feet*12)+inch)*2.54/100;

    bmi = num/(m*m);
    bmi = bmi.toFixed(2); // returns a string like "23.45"

    document.getElementById("h3").textContent = `Your BMI is ${bmi}`;



}


