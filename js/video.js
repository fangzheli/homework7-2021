var video = document.querySelector(".video");;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	var volume = document.querySelector("#volume")
	volume.innerHTML = video.volume * 100 + "%"
	video.play()
	console.log("Play Video");
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
	video.playbackRate /= 0.95;
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
	var text = document.querySelector("#mute");
	if (video.muted){
		video.muted = false;
		text.innerHTML = "Mute"
	}
	else{
		video.muted = true;
		text.innerHTML = "Unmute"
	}
	console.log("current mute state is ", video.playbackRate);
});

document.querySelector("#slider").addEventListener("change", function() {
	video.volume = this.value / 100;
	var volume = document.querySelector("#volume")
	volume.innerHTML = this.value + "%"
});

// var volumeControl = document.getElementById('slider');

// var setVolume = function(){
//     video.volume = this.value / 100;
// 	var volume = document.querySelector("#volume")
// 	volume.innerHTML = this.value
// };

// volumeControl.addEventListener('change',setVolume);

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
});


