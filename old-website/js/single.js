/* JS Document */

/******************************

[Table of Contents]

1. Vars and Inits
2. Set Header
3. Init Menu
4. Init Single Player
5. Init Fitvids


******************************/

$(document).ready(function()
{
	"use strict";

	/* 

	1. Vars and Inits

	*/

	var header = $('.header');
	var ctrl = new ScrollMagic.Controller();

	initMenu();
	initSinglePlayer();
	initFitVids();

	setHeader();

	$(window).on('resize', function()
	{
		setHeader();
	});

	$(document).on('scroll', function()
	{
		setHeader();
	});

	/* 

	2. Set Header

	*/

	function setHeader()
	{
		if($(window).scrollTop() > 91)
		{
			header.addClass('scrolled');
		}
		else
		{
			header.removeClass('scrolled');
		}
	}

	/* 

	3. Init Menu

	*/

	function initMenu()
	{
		if($('.menu').length)
		{
			var hamb = $('.hamburger');
			var menu = $('.menu');
			var menuOverlay = $('.menu_overlay');

			hamb.on('click', function()
			{
				menu.addClass('active');
			});

			menuOverlay.on('click', function()
			{
				menu.removeClass('active');
			});
		}
	}
	
	/*
	
	3.5 Video 
	
	*/
	
/* 	// Find all YouTube videos
	var $allVideos = $("iframe[src^='//www.youtube.com']")
	
	console.log($allVideos)

	// The element that is fluid width
	var $fluidEl = $('.col-lg-7')//document.getElementsByTagName("BODY")[0];
	
	console.log('hi')

	// Figure out and save aspect ratio for each video
	$allVideos.each(function() {

	  $(this)
		.data('aspectRatio', this.height / this.width)

		// and remove the hard coded width/height
		.removeAttr('height')
		.removeAttr('width');

	});

	// When the window is resized
	$(window).resize(function() {

	  var newWidth = $fluidEl.width();

	  // Resize all videos according to their own aspect ratio
	  $allVideos.each(function() {

		var $el = $(this);
		$el
		  .width(newWidth)
		  .height(newWidth * $el.data('aspectRatio'));

	  });

	// Kick off one resize to fix all videos on page load
	}).resize(); */

	/* 

	4. Init Single Player

	*/

	function initSinglePlayer()
	{
		if($("#jplayer_1").length)
		{
			$("#jplayer_1").jPlayer({
				ready: function () {
					$(this).jPlayer("setMedia", {
						title:"Better Days",
							artist:"Bensound",
							mp3:"files/bensound-betterdays.mp3"
					});
				},
				play: function() { // To avoid multiple jPlayers playing together.
					$(this).jPlayer("pauseOthers");
				},
				swfPath: "plugins/jPlayer",
				supplied: "mp3",
				cssSelectorAncestor: "#jp_container_1",
				wmode: "window",
				globalVolume: true,
				useStateClassSkin: true,
				autoBlur: false,
				smoothPlayBar: true,
				keyEnabled: true,
				solution: 'html',
				preload: 'metadata',
				volume: 0.2,
				muted: false,
				backgroundColor: '#000000',
				errorAlerts: false,
				warningAlerts: false
			});
		}

		if($("#jplayer_2").length)
		{
			$("#jplayer_2").jPlayer({
				ready: function () {
					$(this).jPlayer("setMedia", {
						title:"Dubstep",
						artist:"Bensound",
						mp3:"files/bensound-dubstep.mp3",
					});
				},
				play: function() { // To avoid multiple jPlayers playing together.
					$(this).jPlayer("pauseOthers");
				},
				swfPath: "plugins/jPlayer",
				supplied: "mp3",
				cssSelectorAncestor: "#jp_container_2",
				wmode: "window",
				globalVolume: true,
				useStateClassSkin: true,
				autoBlur: false,
				smoothPlayBar: true,
				keyEnabled: true,
				solution: 'html',
				preload: 'metadata',
				volume: 0.2,
				muted: false,
				backgroundColor: '#000000',
				errorAlerts: false,
				warningAlerts: false
			});
		}

		if($("#jplayer_3").length)
		{
			$("#jplayer_3").jPlayer({
				ready: function () {
					$(this).jPlayer("setMedia", {
						title:"Sunny",
						artist:"Bensound",
						mp3:"files/bensound-sunny.mp3",
					});
				},
				play: function() { // To avoid multiple jPlayers playing together.
					$(this).jPlayer("pauseOthers");
				},
				swfPath: "plugins/jPlayer",
				supplied: "mp3",
				cssSelectorAncestor: "#jp_container_3",
				wmode: "window",
				globalVolume: true,
				useStateClassSkin: true,
				autoBlur: false,
				smoothPlayBar: true,
				keyEnabled: true,
				solution: 'html',
				preload: 'metadata',
				volume: 0.2,
				muted: false,
				backgroundColor: '#000000',
				errorAlerts: false,
				warningAlerts: false
			});
		}	
	}

	/* 

	5. Init Fitvids
	
	*/

	function initFitVids()
	{
		if($('.video_container').length)
		{
			$('.video_container').fitVids();
		}
	}

});