

$(document).ready(function(){



    // map logic start
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

// var queryURL = "https://api.cognitive.microsofttranslator.com/languages?api-version=3.0"
// $.ajax({
//   url: queryURL,
//   method: "GET"
  
// }).then(function (response) {
    

// }
// );



// $(window).load(function () {
//     $('#search-btn').click(function (evt) {
//         // get the text the user wants to translate
//         var inputText = $('#transText').val();
//         // get the current auth token (comes from server side code)
//         var authToken = $('#txtAuthToken').val();
//         // translate from english to german
//         var data = {
//             appId: 'Bearer ' + authToken,
//             from: 'en',
//             to: 'de',
//             contentType: 'text/plain',
//             text: inputText
//         };
        
//         // note the dataType and jsonp properties
//         $.ajax({
//             url: "http://api.microsofttranslator.com/V2/Ajax.svc/Translate",
//             dataType: 'jsonp',
//             data: data,
//             jsonp: 'oncomplete'
//         })
//         .done(function (jqXHR, textStatus, errorThrown) {
//             console.log('done', this, jqXHR, textStatus, errorThrown);
//             // show the translation result to the user
//             $('#translatedText').text(jqXHR);
//         })
//         .fail(function (jqXHR, textStatus, errorThrown) {
//             console.log('fail', this, jqXHR, textStatus, errorThrown);
//         });
//     });
// });
//   microsoft Key
//   387cc06492424d2ca16673f824b30e64
//use the text input from the search bar 
//then
//make a variable for response lat and lon
//use that variable to set the lat lon ("center") of the map view
