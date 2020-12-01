var apiKey = "d30adb1683f1aae50c1159cab23299c7";

$("#search").on("click", function () {

    var city = $("#citiesSearch").val();
    var cityBtn = $(`<button class = "list-group-item myBtn" data-city="${city}">${city}</button>`);
    // localStorage.setItem('city', city);
    $(".list-group").prepend(cityBtn);
    console.log(city);
    daySearch(city);
});

function daySearch() {
    // request(singleDayURL);
    var city = $("#citiesSearch").val();
    var singleDayURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey;
    var fiveDayURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + apiKey;

    // var cityBtn = $(`<button class = "list-group-item myBtn" id = "cityButton">${city}</button>`);
    // localStorage.setItem('city', city);
    // $(".list-group").prepend(cityBtn);

    // console.log(city);
    $.ajax({
        url: singleDayURL,
        method: "GET"
    }).then(function (response) {
        // $("#citiesSearch").text(JSON.stringify(response));
        console.log(response);

        //convert temp to farenheit
        var tempF = (response.main.temp - 273.15) * 1.80 + 32;
        var todayDate = moment().format("MM/DD/YYYY");
        var iconcode = response.weather[0].icon;
        var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";

        //transfer content to HTML
        $(".city").html("<h2>" + response.name + " " + todayDate + "</h2>");
        $("#wicon").attr("src", iconurl);
        $(".temp").text("Temperature: " + tempF.toFixed(2) + " °F");
        $(".humidity").text("Humidity: " + response.main.humidity + "%");
        $(".wind").text("Wind Speed: " + response.wind.speed + " MPH");

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
                var dateDay1 = moment().add(1, "days").startOf("day").format("MM/DD/YYYY");
                var iconcode = response.list[1].weather[0].icon;
                var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";

                //transfer content to HTML for day 1
                $(".day1Date").text(dateDay1);
                $("#wicon1").attr("src", iconurl);
                $(".day1Temp").text("Temp: " + tempDay1.toFixed(2) + " °F");
                $(".day1Humidity").text("Humidity: : " + response.list[1].main.humidity + "%");

                //convert temp to farenheit for day 2
                var tempDay2 = (response.list[9].main.temp - 273.15) * 1.80 + 32;
                var dateDay2 = moment().add(2, "days").startOf("day").format("MM/DD/YYYY");
                var iconcode = response.list[9].weather[0].icon;
                var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";

                //transfer content to HTML for day 2
                $(".day2Date").text(dateDay2);
                $("#wicon2").attr("src", iconurl);
                $(".day2Temp").text("Temp: " + tempDay2.toFixed(2) + " °F");
                $(".day2Humidity").text("Humidity: : " + response.list[9].main.humidity + "%");

                //convert temp to farenheit for day 3
                var tempDay3 = (response.list[17].main.temp - 273.15) * 1.80 + 32;
                var dateDay3 = moment().add(3, "days").startOf("day").format("MM/DD/YYYY");
                var iconcode = response.list[17].weather[0].icon;
                var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";

                //transfer content to HTML for day 3
                $(".day3Date").text(dateDay3);
                $("#wicon3").attr("src", iconurl);
                $(".day3Temp").text("Temp: " + tempDay3.toFixed(2) + " °F");
                $(".day3Humidity").text("Humidity: : " + response.list[17].main.humidity + "%");

                //convert temp to farenheit for day 4
                var tempDay4 = (response.list[25].main.temp - 273.15) * 1.80 + 32;
                var dateDay4 = moment().add(4, "days").startOf("day").format("MM/DD/YYYY");
                var iconcode = response.list[25].weather[0].icon;
                var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";

                //transfer content to HTML for day 4
                $(".day4Date").text(dateDay4);
                $("#wicon4").attr("src", iconurl);
                $(".day4Temp").text("Temp: " + tempDay4.toFixed(2) + " °F");
                $(".day4Humidity").text("Humidity: : " + response.list[25].main.humidity + "%");

                //convert temp to farenheit for day 5
                var tempDay5 = (response.list[33].main.temp - 273.15) * 1.80 + 32;
                var dateDay5 = moment().add(5, "days").startOf("day").format("MM/DD/YYYY");
                var iconcode = response.list[33].weather[0].icon;
                var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";

                //transfer content to HTML for day 5
                $(".day5Date").text(dateDay5);
                $("#wicon5").attr("src", iconurl);
                $(".day5Temp").text("Temp: " + tempDay5.toFixed(2) + " °F");
                $(".day5Humidity").text("Humidity: : " + response.list[33].main.humidity + "%");
            });
        }
    });
}



$(".myBtn").on("click", buttonSearch)

function buttonSearch() {
    var cityButton = $(this).text();
    console.log(cityButton);

    // var apiKey = "d30adb1683f1aae50c1159cab23299c7";
    // var singleDayURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityButton + "&appid=" + apiKey;
    var fiveDayURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityButton + "&appid=" + apiKey;


    $.ajax({
        url: singleDayURL,
        method: "GET"
    }).then(function (response) {
        // $("#citiesSearch").text(JSON.stringify(response));
        console.log(response);

        //convert temp to farenheit
        var tempF = (response.main.temp - 273.15) * 1.80 + 32;
        var todayDate = moment().format("MM/DD/YYYY");
        var iconcode = response.weather[0].icon;
        var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";

        //transfer content to HTML
        $(".city").html("<h2>" + response.name + " " + todayDate + "</h2>");
        $("#wicon").attr("src", iconurl);
        $(".temp").text("Temperature: " + tempF.toFixed(2) + " °F");
        $(".humidity").text("Humidity: " + response.main.humidity + "%");
        $(".wind").text("Wind Speed: " + response.wind.speed + " MPH");

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
                var dateDay1 = moment().add(1, "days").startOf("day").format("MM/DD/YYYY");
                var iconcode = response.list[1].weather[0].icon;
                var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";

                //transfer content to HTML for day 1
                $(".day1Date").text(dateDay1);
                $("#wicon1").attr("src", iconurl);
                $(".day1Temp").text("Temp: " + tempDay1.toFixed(2) + " °F");
                $(".day1Humidity").text("Humidity: : " + response.list[1].main.humidity + "%");

                //convert temp to farenheit for day 2
                var tempDay2 = (response.list[9].main.temp - 273.15) * 1.80 + 32;
                var dateDay2 = moment().add(2, "days").startOf("day").format("MM/DD/YYYY");
                var iconcode = response.list[9].weather[0].icon;
                var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";

                //transfer content to HTML for day 2
                $(".day2Date").text(dateDay2);
                $("#wicon2").attr("src", iconurl);
                $(".day2Temp").text("Temp: " + tempDay2.toFixed(2) + " °F");
                $(".day2Humidity").text("Humidity: : " + response.list[9].main.humidity + "%");

                //convert temp to farenheit for day 3
                var tempDay3 = (response.list[17].main.temp - 273.15) * 1.80 + 32;
                var dateDay3 = moment().add(3, "days").startOf("day").format("MM/DD/YYYY");
                var iconcode = response.list[17].weather[0].icon;
                var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";

                //transfer content to HTML for day 3
                $(".day3Date").text(dateDay3);
                $("#wicon3").attr("src", iconurl);
                $(".day3Temp").text("Temp: " + tempDay3.toFixed(2) + " °F");
                $(".day3Humidity").text("Humidity: : " + response.list[17].main.humidity + "%");

                //convert temp to farenheit for day 4
                var tempDay4 = (response.list[25].main.temp - 273.15) * 1.80 + 32;
                var dateDay4 = moment().add(4, "days").startOf("day").format("MM/DD/YYYY");
                var iconcode = response.list[25].weather[0].icon;
                var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";

                //transfer content to HTML for day 4
                $(".day4Date").text(dateDay4);
                $("#wicon4").attr("src", iconurl);
                $(".day4Temp").text("Temp: " + tempDay4.toFixed(2) + " °F");
                $(".day4Humidity").text("Humidity: : " + response.list[25].main.humidity + "%");

                //convert temp to farenheit for day 5
                var tempDay5 = (response.list[33].main.temp - 273.15) * 1.80 + 32;
                var dateDay5 = moment().add(5, "days").startOf("day").format("MM/DD/YYYY");
                var iconcode = response.list[33].weather[0].icon;
                var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";

                //transfer content to HTML for day 5
                $(".day5Date").text(dateDay5);
                $("#wicon5").attr("src", iconurl);
                $(".day5Temp").text("Temp: " + tempDay5.toFixed(2) + " °F");
                $(".day5Humidity").text("Humidity: : " + response.list[33].main.humidity + "%");
            });
        }
    });

}