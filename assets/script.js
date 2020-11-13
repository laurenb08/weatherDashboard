
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

                //convert temp to farenheit for day 1
                var tempDay1 = (response.list[1].main.temp - 273.15) * 1.80 + 32;

                //transfer content to HTML for day 1
                $(".day1Temp").text("Temp: " + tempDay1.toFixed(2));
                $(".day1Humidity").text("Humidity: : " + response.list[1].main.humidity);

                //convert temp to farenheit for day 2
                var tempDay2 = (response.list[9].main.temp - 273.15) * 1.80 + 32;

                //transfer content to HTML for day 2
                $(".day2Temp").text("Temp: " + tempDay2.toFixed(2));
                $(".day2Humidity").text("Humidity: : " + response.list[9].main.humidity);

                //convert temp to farenheit for day 3
                var tempDay3 = (response.list[17].main.temp - 273.15) * 1.80 + 32;

                //transfer content to HTML for day 3
                $(".day3Temp").text("Temp: " + tempDay3.toFixed(2));
                $(".day3Humidity").text("Humidity: : " + response.list[17].main.humidity);

                //convert temp to farenheit for day 4
                var tempDay4 = (response.list[25].main.temp - 273.15) * 1.80 + 32;

                //transfer content to HTML for day 4
                $(".day4Temp").text("Temp: " + tempDay4.toFixed(2));
                $(".day4Humidity").text("Humidity: : " + response.list[25].main.humidity);

                //convert temp to farenheit for day 5
                var tempDay5 = (response.list[33].main.temp - 273.15) * 1.80 + 32;

                //transfer content to HTML for day 5
                $(".day5Temp").text("Temp: " + tempDay2.toFixed(2));
                $(".day5Humidity").text("Humidity: : " + response.list[33].main.humidity);
            });
        }
    });
}