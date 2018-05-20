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
	  height: '100%',
	  width: '100%',
	  videoId: '0PZGt-MFbps',
	  playerVars: { 'autoplay': 0, 'controls': 0, 'disablekb':0, 'iv_load_policy':3, 'modestbranding':1, 'showinfo':0, 'border':0},
	  events: {
	    'onStateChange': onPlayerStateChange
	  }
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
	if (event.data == YT.PlayerState.ENDED && !done) {
	  jQuery('.box-video').fadeOut('400', function() {});
	}
	}
	function stopVideo() {
	player.stopVideo();
	}
jQuery(document).ready(function(){
	$(document).on('click', '.btn-play-video', function() {
		$('.box-video').fadeIn('400', function() {});
		player.playVideo();
	});
	if ($(window).width()<992) {
		$('.countries-items').slick({
			centerMode: true,
			slidesToShow: 1,
			variableWidth: true,
			dots: true,
			arrows: false,
			infinite: true
		});		
	}
});