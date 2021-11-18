var video = document.querySelector(".video");;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play()
});

document.querySelector("#pause").addEventListener("click", function() {
	video.pause()
	console.log("Pause Video");
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= 0.95;
	console.log("current playback rate is ", video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate *= 1.05;
	console.log("current playback rate is ", video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	if ((video.currentTime + 15) > video.duration){
		video.currentTime = 0;
	}
	else{
		video.currentTime += 15;
	}
	console.log("current location is ", video.currentTime, " s");
});

document.querySelector("#mute").addEventListener("click", function() {
	var text = document.querySelector("#mute").innerHTML;
	if (video.muted){
		video.muted = false;
		text = "Mute"
	}
	else{
		video.muted = true;
		text = "Unmute"
	}
	console.log("current mute state is ", video.playbackRate);
});


