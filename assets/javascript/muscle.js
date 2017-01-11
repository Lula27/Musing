// Get document ready for take off: 
$(document).ready(function() {

	

	$('#nowfeels').on('click', function(event) {

		var nFeels = $('#iFeel').val().trim();

		event.preventDefault(); 

		console.log(nFeels); 

	})	



	$('#laterfeels').on('click', function(event) {

		var lFeels = $('#iwFeel').val().trim();

		event.preventDefault(); 

		console.log(lFeels); 



		function callSpotify(url, data) {
    return $.ajax(url, {
        dataType: 'json',
        data: data,
        headers: {
            'Authorization': 'Bearer ' + credentials.token
        }
    });
}



var url = 'https://embed.spotify.com/?uri='; 
var uri = 'https://spotify-mood-playlist.herokuapp.com/'; 

console.log(url);

$('<iframe>', {
   src: url + uri,
   frameborder: 0,
   width: '300',
   height: '380',
   allowtransparency: 'true'
   }).appendTo('#output');



	})	




});