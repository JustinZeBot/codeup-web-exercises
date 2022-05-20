"use strict";
$.get("http://api.openweathermap.org/data/2.5/onecall", {
    APPID: OPEN_WEATHER_APPID,
    lat:    33.150661,
    lon:   -96.825081,
    units: "imperial"
}).done(function(data) {

    console.log('Diving in - here is current information: ', data.current);
    console.log('A step further - information for tomorrow: ', data.daily[1]);
    $("#current").append(
        '<article>' +
        '<p>' + 'The current Forecast!' + '</p><hr>' +
        '<p>' + 'Current real temp' +'<br>' + data.current.temp + 'F' +  '</p><hr>' +
        '<p>'+ 'Feels Like' +'<br>'+ data.current.feels_like + 'F' + '</p><hr>' +
        '<p>' + 'Average Humidity' +'<br>'+ '%' + data.current.humidity  + '</p>' +
        '</article>'
    )
    $("#future1").append(
        '<article>' +
        '<p>' + 'Forecast For xxxxxx' + '</p><hr>' +
        '<p>' + 'Day Temp' +'<br>' + data.daily[1].temp.day + 'F' +  '</p><hr>' +
        '<p>'+ 'Eve Temp' +'<br>'+ data.daily[1].temp.eve + 'F' + '</p><hr>' +
        '<p>' + 'Average Humidity' +'<br>'+ '%' + data.daily[1].humidity  + '</p>' +
        '</article>'
    )
    $("#future2").append(
        '<article>' +
        '<p>' + 'Forecast For xxxxxx' + '</p><hr>' +
        '<p>' + 'Day Temp' +'<br>' + data.daily[2].temp.day + 'F' +  '</p><hr>' +
        '<p>'+ 'Eve Temp' +'<br>'+ data.daily[2].temp.eve + 'F' + '</p><hr>' +
        '<p>' + 'Average Humidity' +'<br>'+ '%' + data.daily[2].humidity  + '</p>' +
        '</article>'
    )
    $("#future3").append(
        '<article>' +
        '<p>' + 'Forecast For xxxxxx' + '</p><hr>' +
        '<p>' + 'Day Temp' +'<br>' + data.daily[3].temp.day + 'F' +  '</p><hr>' +
        '<p>'+ 'Eve Temp' +'<br>'+ data.daily[3].temp.eve + 'F' + '</p><hr>' +
        '<p>' + 'Average Humidity' +'<br>'+ '%' + data.daily[3].humidity  + '</p>' +
        '</article>'
    )

});
