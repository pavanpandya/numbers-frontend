const display = document.getElementById("display");
const apiUrl = "https://arithmetic-service.onrender.com"; 

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(operation){
    fetch(`${apiUrl}/${operation}/${display.value}`)
        .then(response => response.json())
        .then(data => {
            display.value = data.result;
        })
        .catch(error => {
            display.value = "Error";
            console.error('Error:', error);
        });
}
