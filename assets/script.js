var city = $("#cities").val();
var singleDayURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=d30adb1683f1aae50c1159cab23299c7";
var fiveDayURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=d30adb1683f1aae50c1159cab23299c7";

$("#button-addon2").on("click", search)

function search() {
    // request(singleDayURL);

    $.ajax({
        url: singleDayURL,
        method: "GET"
    }).then(function (response) {
        $("#cities").text(JSON.stringify(response));
    });
};

console.log(city);
console.log(singleDayURL);
console.log(response);