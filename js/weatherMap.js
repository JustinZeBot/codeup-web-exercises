"use strict";
$.get("http://api.openweathermap.org/data/2.5/onecall", {
    APPID: OPEN_WEATHER_APPID,
    // container: 'weatherMapBox',
    // style: 'mapbox://styles/mapbox/streets-v9',
    // zoom: 10,
    lat:    33.150661,
    lon:   -96.825081,
    units: "imperial"
}).done(function(data) {

    console.log('Diving in - here is current information: ', data.current);
    console.log('A step further - information for tomorrow: ', data.daily[1]);

    //====
    const months = ["JAN", "FEB", "MAR","APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    function formatTime(timeStamp){
        let dateTime = new Date(timeStamp * 1000);
        let year = dateTime.getFullYear();
        let month = months[dateTime.getMonth()];
        let day = dateTime.getDate();
        // let hour = appendLeadingZeroes(dateTime.getHours());
        // let minutes = appendLeadingZeroes(dateTime.getMinutes());
        // let seconds = appendLeadingZeroes(dateTime.getSeconds());
        let formattedDateTime = month + " " + day + " " + year;
        return formattedDateTime;
    }
    console.log(formatTime(data.dt))
    //====
    $("#foreCast").append(
        '<article>' +
        '<p>' + 'forecast for today' + '</p><hr>' +
        '<p>' + 'Current real temp' +'<br>' + data.current.temp +'\&#176 F' +  '</p><hr>' +
        '<p>'+ 'Feels Like' +'<br>'+ data.current.feels_like + '\&#176 F' + '</p><hr>' +
        '<p>' + 'Average Humidity' +'<br>'+ '%' + data.current.humidity  + '</p>' +
        '</article>'
    )
    $("#future1").append(
        '<article>' +
        '<p>' + 'Forecast in 2 days' + '</p><hr>' +
        '<p>' + 'Day Temp' +'<br>' + data.daily[1].temp.day + '\&#176 F' +  '</p><hr>' +
        '<p>'+ 'Eve Temp' +'<br>'+ data.daily[1].temp.eve + '\&#176 F' + '</p><hr>' +
        '<p>' + 'Average Humidity' +'<br>'+ '%' + data.daily[1].humidity  + '</p>' +
        '</article>'
    )
    $("#future2").append(
        '<article>' +
        '<p>' + 'Forecast in 3 days' + '</p><hr>' +
        '<p>' + 'Day Temp' +'<br>' + data.daily[2].temp.day + '\&#176 F' +  '</p><hr>' +
        '<p>'+ 'Eve Temp' +'<br>'+ data.daily[2].temp.eve + '\&#176 F' + '</p><hr>' +
        '<p>' + 'Average Humidity' +'<br>'+ '%' + data.daily[2].humidity  + '</p>' +
        '</article>'
    )
    $("#future3").append(
        '<article>' +
        '<p>' + 'Forecast in 4 days' + '</p><hr>' +
        '<p>' + 'Day Temp' +'<br>' + data.daily[3].temp.day + '\&#176 F' +  '</p><hr>' +
        '<p>'+ 'Eve Temp' +'<br>'+ data.daily[3].temp.eve + '\&#176 F' + '</p><hr>' +
        '<p>' + 'Average Humidity' +'<br>'+ '%' + data.daily[3].humidity  + '</p>' +
        '</article>'
    )
    $("#future4").append(
        '<article>' +
        '<p>' + 'Forecast in 5 days' + '</p><hr>' +
        '<p>' + 'Day Temp' +'<br>' + data.daily[4].temp.day + '\&#176 F' +  '</p><hr>' +
        '<p>'+ 'Eve Temp' +'<br>'+ data.daily[4].temp.eve + '\&#176 F' + '</p><hr>' +
        '<p>' + 'Average Humidity' +'<br>'+ '%' + data.daily[4].humidity  + '</p>' +
        '</article>'
    )

});

