var userSearch;

function getUserSearch() {
    var userInput = $("#form-control").value;
    userSearch = userInput;
}
console.log(userSearch);

document.getElementById("button-addon2").addEventListener("click", getUserSearch);

// var queryURL = "api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}