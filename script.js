const display = document.getElementById("display");
const apiUrl = "https://arithmetic-service-2vg8.onrender.com"; 
// const apiUrl = "http://localhost:3000"; 

function appendToDisplay(input){
    // console.log(input);
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate() {
    // console.log(display.value);
    fetch(`${apiUrl}/calculate/${display.value}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        if (data == null) {
            display.value = "Error: Invalid!";
        }else{
            display.value = data;
        }
})
    .catch(error => console.error(error));
}

async function isPrime() {
    const numeberToTest = document.getElementById("numberToTest");
    let n = numeberToTest.value;
    const response = await fetch("???" + n);
    const sum = await response.json();
    document.getElementById("primeCheckResult").innerText = sum;
}