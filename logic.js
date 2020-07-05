var APIKey = "AIzaSyA6dPYvFRmtr6QqLt7KrqQlqXOab3FMGh0";
var langSelected = $("#lang-btn").text();

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

    //selecting language from dropdown will choose translated language
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
        var question = $(this).text();
        var translateText;
        if (question === "Restroom?") {
            translateText = "Where is the nearest bathroom?";
        } else if (question === "ATM?") {
            translateText = "Where is the nearest bank or ATM?";
        } else if (question === "Train?") {
            translateText = "Where is the nearest train?";
        } else if (question === "Coffee?") {
            translateText = "Where can I get a good cup of coffee?";
        } else if (question === "Restaurant?") {
            translateText = "What is the best restaurant in town?";
        } else if (question === "Market?") {
            translateText = "Where is the nearest market?";
        }

        startTranslation(translateText);
    });

    //butoon for random fact modal
    $("#randFact").on("click", function (event) {
        event.preventDefault();

        randomFact();
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

    //writes translated text to textarea
    function placeTranslation(translation) {

        $("#translatedText").text(translation);

    }

    function randomFact() {
        var randomURL = "https://uselessfacts.jsph.pl/random.json?language=en"

        $.ajax({
            url: randomURL,
            method: "GET"

        }).then(function (response) {

            $(".modal-body").empty();

            console.log(response);
            console.log(randomURL);
            var fact = response.text;

            $(".modal-body").append("<p class='modal-body'>" + fact + "</p>");


        });

        };

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



