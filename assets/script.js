
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

        //convert temp to farenheit
        var tempF = (response.main.temp - 273.15) * 1.80 + 32;

        //transfer content to HTML
        $(".city").html("<h1>" + response.name + " Weather</h1>");
        $(".temp").text("Temperature: " + tempF.toFixed(2));
        $(".humidity").text("Humidity: " + response.main.humidity);
        $(".wind").text("Wind Speed: " + response.wind.speed);

        // get UV Index
        var searchLat = response.coord.lat;
        var searchLong = response.coord.lon;
        console.log(searchLat);
        console.log(searchLong);

        // findUV();

        function findUV() {
            var uvURL = "http://api.openweathermap.org/data/2.5/uvi?lat=" + searchLat + "&lon=" + searchLong + "&appid=" + apiKey;
            console.log(uvURL);
            $.ajax({
                url: uvURL,
                method: "GET"
            }).then(function (response) {
                console.log(response);
                $(".uvIndex").text("UV Index: " + response.value);
            })
        };

        findUV();
        forecastSearch();

        function forecastSearch() {
            $.ajax({
                url: fiveDayURL,
                method: "GET"
            }).then(function (response) {
                console.log(response);

                //convert temp to farenheit
                var tempF = (response.main.temp - 273.15) * 1.80 + 32;

                //transfer content to HTML
            });
        }
    });
}