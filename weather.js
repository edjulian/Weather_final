$(document).ready(function () {

    $("#submitCity").click(function () {

        return getWeather();

    })
});
$("#image").hide();

$("#submitCity").click(function () {
    $("#refresh").show();
    $("#image").show();
});

$("#refresh").click(function () {
    $("button").show();
    $("input").show();
    $("#refresh").hide();
    $("#showWeather").hide();
    $("#image").show();
});

function getWeather() {

    var city = $("#city").val();

    if (city != "") {

        $.ajax({
            url: "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial" + "&appid=503cc1cfcb2c76fa08718e7d3db0c509",
            type: "GET",
            dataType: "jsonp",
            success: function (data) {

                var widget = showResults(data)

                $("#showWeather").html(widget);

                $("#city").val("");
            }
        });

    } else {
        $("#error").html("<div class='alert alert-danger' id='errorCity'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a>City field cannot be empty.</div>")
    }

}

function showResults(data) {
//    return '<h3>Current Weather for ' + data.name + ', ' + data.sys.country + '</h3>' +
//        '<p>Weather: ' + data.weather[0].main + '</p>' +
//        '<p>Weather Description: ' + data.weather[0].description + '</p>' +
//        "<h1>" + data.main.temp + "&deg;F</h1>" +
//        "<p>Pressure: " + data.main.pressure +" hpa</p>" + "<p>Humidity: " + data.main.humidity +"%</p>" + "<p>Min Temperature: " + data.main.temp_min + "&deg;F</p>" + "<p>Max Temperature: " + data.main.temp_max + "&deg;F</p>" + "<p>Wind Speed: " + data.wind.speed + "m/s</p>" +
//    "<p>Wind Direction: " + data.wind.deg + "&deg;</p>";
    
    return '<h3>' + data.name + ', ' + data.sys.country + '</h3>' + "<h1>" + data.main.temp + "&deg;F</h1>" + 
    '<p>' + data.weather[0].main +', ' + data.weather[0].description + '</p>';





}
