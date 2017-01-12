// Get document ready for take off: 
$(document).ready(function() {
 

	$('#nowfeels').on('click', function(event) {

		var nFeels = $('#iFeel').val().trim();

		event.preventDefault(); 

		console.log(nFeels); 


      // Call YouTube API and append iframe player


      // 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '390',
          width: '640',
          videoId: 'M7lc1UVf-VE',
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }.appendTo("#player") 
        });
      }

      // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) {
        event.target.playVideo();
      }

      // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
      var done = false;
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
          setTimeout(stopVideo, 6000);
          done = true;
        }
      }
      function stopVideo() {
        player.stopVideo();
      }

      // Can't seem to get player to append onto page 

      $('#player').append(player); 

	})	



	$('#laterfeels').on('click', function(event) {

		var lFeels = $('#iwFeel').val().trim();

		event.preventDefault(); 

		console.log(lFeels); 

// Call Spotify API and append iframe player 

"use strict";

var maxPlaylists = 1000;
var maxPlaylistsToDisplay = 1000;
var credentials = null;
var totalTracks = 0;
var totalPlaylistCount = 0;
var abortFetching = false;
var popNormalize = false;
var allPlaylists = [];
var topTracks = null;
var allTracks = {};
var playlistId = '3rgsDhGHZxZ9sB9DQWQfuf';

var url = 'https://embed.spotify.com/?uri='

// console.log(url);

function info(s) {
    $("#info").text(s);
}

function callSpotify(url, data) {
    return $.ajax(url, {
        dataType: 'json',
        data: data,
        headers: {
            'Authorization': 'Bearer ' + credentials.token
        }
    });
}

/* Call the Web API category list endpoint */
function getCategoryList() {

    var url = 'https://api.spotify.com/v1/browse/categories?limit=50'; 

    return $.ajax({
        url: url,
        headers: {
           'Authorization': 'Bearer ' +  credentials.token
        }
    });
}

/* Call the Web API category list endpoint */
function displayPlaylist() {

    var url = 'https://api.spotify.com/v1/users/spotify/playlists/';

    var playlistId =  ($(this).data("playlistid"));
console.log(($(this).data("playlistid")));

    url = url + playlistId 

    return $.ajax({
        url: url,
        headers: {
           'Authorization': 'Bearer ' +  credentials.token
        }

    });
}

function getCategoryPlaylists() {

    var url = 'https://api.spotify.com/v1/browse/categories/mood/playlists?offset=0&limit=50'; 

    return $.ajax({
        url: url,
        headers: {
           'Authorization': 'Bearer ' +  credentials.token
        }
    });
}



		function callSpotify(url, data) {
    return $.ajax(url, {
        dataType: 'json',
        data: data,
        headers: {
            'Authorization': 'Bearer ' + credentials.token
        }
    });
}



    function loginWithSpotify() {
    var client_id = '0b30ba6a3ced43f5bc06c0902f79e47c';
    var redirect_uri = 'https://spotify-mood-playlist.herokuapp.com/';
    // var scopes = 'playlist-modify-public';
    if (document.location.hostname == 'localhost') {
        redirect_uri = 'http://localhost:8000/index.html';
    }
    var url = 'https://accounts.spotify.com/authorize?client_id=' + client_id +
        '&response_type=token' +
        // '&scope=' + encodeURIComponent(scopes) +
        '&redirect_uri=' + encodeURIComponent(redirect_uri);
    document.location = url;
}


        var uriPlaylist = $(this).data('uri');

        $(".myFrame").empty();

        $('<iframe>', {
           src: url + uriPlaylist,
           frameborder: 0,
           width: 300,
           height: 380,
           allowtransparency: true
           }).appendTo('#output');
        function error(s) {
            info(s);
        }

	})	




});