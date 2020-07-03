var APIKey = "AIzaSyA6dPYvFRmtr6QqLt7KrqQlqXOab3FMGh0";
var langSelected = $("#lang-btn").text();

$(document).ready(function () {

    //clicking the translate button starts the translate query
    $("#trans-btn").on("click", function (event) {
        event.preventDefault();
        var transText = $("#trans-text").val();
        startTranslation(transText);
    });

    //allows enter button to be used to "click" the translate button
    $('#trans-btn').keypress(function (event) {
        if (event.which == 13) {
            $('#trans-btn').click();
        }
    });

    //clicking on language will update
    $("#lang-opt").on("click", "li", function (event) {
        event.preventDefault();
        console.log("hello");
        $("#lang-btn").text($(this).text());
        
        if ($("#lang-btn").text() === "Spanish") {
            langSelected = "es";
        } else if ($("#lang-btn").text() === "French") {
            langSelected = "fr";
        } else if ($("#lang-btn").text() === "German") {
            langSelected = "de";
        } else if ($("#lang-btn").text() === "Japanese") {
            langSelected = "ja";
        } else if ($("#lang-btn").text() === "Russian") {
            langSelected = "ru";
        } else {
            langSelected = "en";
        }
        console.log(langSelected);

    });

    //clear text written for translation
    $("#clear-btn").on("click", function (event) {
        event.preventDefault();
        $("#trans-text").empty();
      });

    //API call that translates the text input
    function startTranslation(transText,) {
        var queryURL = "https://translation.googleapis.com/language/translate/v2?q=" + transText + "&target=" + langSelected + "&key=" + APIKey;

        $.ajax({
            url: queryURL,
            method: "POST"

        }).then(function (response) {
            console.log(queryURL);
            console.log(response);
            var translation = response.data.translations[0].translatedText;
            console.log(translation);

            placeTranslation(translation);

        });
    };

    function placeTranslation(translation) {

        $("#translatedText").text(translation);

    }

    mapboxgl.accessToken = 'pk.eyJ1IjoiY291cnRuZXlqIiwiYSI6ImNrYzN0OW12ZDAxOGwycW1ydjc0bW9mMG0ifQ.VWF3V-tNFAcHm2RpqpbBTg';
    var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-97.7431, 30.2672],
    zoom: 13
    });
     
    map.addControl(
    new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    mapboxgl: mapboxgl
    })
    );
    // map logic end

});



