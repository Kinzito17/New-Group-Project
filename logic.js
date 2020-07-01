
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




$(document).ready(function(){



    //create even listener for Enter on search bar
    $("#search-input").on("keyup", function(event){
        if (event.keyCode === 13) {
            console.log("Enter");
            mapCall();
        }
    });



    function mapCall() { 
    
    var userSearch = $("#search-input").val();
    console.log(userSearch);
    
    var queryURL = `http://www.mapquestapi.com/search/v2/search?key=lYrP4vF3Uk5zgTiGGuEzQGwGIVDGuy24&location=${userSearch}`;
    // http://www.mapquestapi.com/search/v2/search?key=lYrP4vF3Uk5zgTiGGuEzQGwGIVDGuy24&location=Beaumont


    $.ajax({
        url: queryURL,
        method: "GET"
        
    })
    
    .then(function (response) {
        console.log(response);
        var lat = response.origin.displayLatLng.lat;
        console.log(lat);
        var lng = response.origin.displayLatLng.lng;
        console.log(lng);

        let latlng = parseFloat(lat) + "," + parseFloat(lng);
        console.log(latlng);

    })


  };


    placeSearch({
        key: 'lYrP4vF3Uk5zgTiGGuEzQGwGIVDGuy24',
        container: document.querySelector('#search-input'),
        useDeviceLocation: false,
        collection: [
          'poi',
          'airport',
          'address',
          'adminArea',
        ]
      });
    
    L.mapquest.key = 'lYrP4vF3Uk5zgTiGGuEzQGwGIVDGuy24';

    var map = L.mapquest.map('map', {
      center: [41.881832, -87.623177],
      layers: L.mapquest.tileLayer('map'),
      zoom: 12
    });

    map.addControl(L.mapquest.control());


  

  }); //closing document ready







