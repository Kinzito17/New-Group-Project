
var queryURL = "https://api.cognitive.microsofttranslator.com/languages?api-version=3.0"
$.ajax({
  url: queryURL,
  method: "GET"
  
  console.log(queryURL)

}).then(function (response) {
    

}
);








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

