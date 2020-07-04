var APIKey = "AIzaSyA6dPYvFRmtr6QqLt7KrqQlqXOab3FMGh0";
var langSelected = $("#lang-btn").text();
var translateText = $(".common").text();

$(document).ready(function () {

    //clicking the translate button starts the translate query
    $("#translate-btn").on("click", function (event) {
        event.preventDefault();
        var translateText = $("#translation-text").val();
        startTranslation(translateText);
    });

    //allows enter button to be used to "click" the translate button
    $('#translate-btn').keypress(function (event) {
        if (event.which == 13) {
            $('#translate-btn').click();
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
 
    //quick translation buttons
    $(".common").on("click", function (event) {
        event.preventDefault();
        var translateText = $(".common").text();
        if ($("#restroom").text() === "Restroom?") {
            translateText = "Where is the nearest bathroom?";
        } else if ($("#atm").text() === "ATM?") {
            translateText = "Where is the nearest bank or ATM?";
        } else if ($("#train").text() === "Train?") {
            translateText = "Where is the nearest train?";
        } else if ($("#coffee").text() === "Coffee?") {
            translateText = "Where can I get a good cup of coffee?";
        } else if ($("#restaurant").text() === "Restaurant?") {
            translateText = "What is the best restaurant in town?";
        } else if ($("#market").text() === "Market?") {
            translateText = "Where is the nearest market?";
        };  

        startTranslation(translateText);

    });

    //API call that translates the text input
    function startTranslation(translateText) {
        var queryURL = "https://translation.googleapis.com/language/translate/v2?q=" + translateText + "&target=" + langSelected + "&key=" + APIKey;

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



