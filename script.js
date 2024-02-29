const display = document.getElementById("display");
const apiUrl = "https://arithmetic-service-2vg8.onrender.com"; 
const primeServiceUrl = "https://prime-service-latest-ma30.onrender.com";
const cipherServiceUrl = "https://ciphers-service-u87h.onrender.com";
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
    const numberToTest = document.getElementById("primeNumber");            
    let n = numberToTest.value;            
    const response = await fetch(`${primeServiceUrl}/primes/` + n);
    const result = await response.json();
    const resultElement = document.getElementById("primeCheckResult");
    if (result) {
        resultElement.innerText = n + " is a prime number.";
        resultElement.className = "prime";
    } else {
        resultElement.innerText = n + " is not a prime number.";
        resultElement.className = "not-prime";
   }
}

async function cipher() {
    const textToEncode = document.getElementById("textToCipher");
    let plainText = textToEncode.value;
    const response = await fetch(`${cipherServiceUrl}/ciphers/caesar/${plainText}/3`);
    const result = await response.json();
    document.getElementById("cipher").innerText = result.cipher;
}
