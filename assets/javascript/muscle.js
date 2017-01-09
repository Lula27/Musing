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

	})	

});