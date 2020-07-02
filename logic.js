var APIKey = "AIzaSyA6dPYvFRmtr6QqLt7KrqQlqXOab3FMGh0";

$(document).ready(function () {

    //clicking the translate button starts the translate query
    $("#trans-btn").on("click", function (event) {
        event.preventDefault();
        var transText = $("#trans-text").val();
        startTranslation(transText);
    });

    //allows enter button to be used to "click" the translate button
    $('#trans-btn').keypress(function (e) {
        if (e.which == 13) {
            $('#trans-btn').click();
        }
    });

    //clicking on previous searches will prompt the search again
    $(".list-group").on("click", "li", function () {
        startTranslation($(this).text());
    });

    //API call that translates the text input
    function startTranslation(transText) {
        var queryURL = "https://translation.googleapis.com/language/translate/v2?q=" + transText + "&target=es&key=" + APIKey;

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



