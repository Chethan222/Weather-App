//Getting data from the backend using fetchRequest

let fetchData = async(address) => {
    let response = await fetch(
        "http://localhost:3000/weather?address=" + address
    );
    let data = await response.json();

    if (data.data) {
        return data.data;
    } else {
        return data.error;
    }
};

const weatherForm = document.getElementById("weather-form");
const inputBox = document.getElementById("address-input-box");
const result = document.getElementById("result");
weatherForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const address = inputBox.value;
    if (address) {
        fetchData(address).then((data) => {
            result.innerHTML = data;
        });
    } else {
        result.innerHTML = "Field can not be empty!";
    }
    inputBox.value = "";
});