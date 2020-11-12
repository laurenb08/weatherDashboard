
$("#search").on("click", daySearch)

function daySearch() {
    // request(singleDayURL);
    var city = $("#citiesSearch").val();
    var apiKey = "d30adb1683f1aae50c1159cab23299c7";
    var singleDayURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey;
    var fiveDayURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + apiKey;
    console.log(city);
    $.ajax({
        url: singleDayURL,
        method: "GET"
    }).then(function (response) {
        // $("#citiesSearch").text(JSON.stringify(response));
        console.log(response);
    });

    forecastSearch();

    function forecastSearch() {
        $.ajax({
            url: fiveDayURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);
        });
    }
};