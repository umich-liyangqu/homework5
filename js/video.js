// Add js here.

const video = document.querySelector('#videoplayer');
const playButton = document.querySelector('#play');
const pauseButton = document.querySelector('#pause');
const muteButton = document.querySelector('#mute');
const skipButton = document.querySelector('#skip');
const slowerButton = document.querySelector('#slower');
const fasterButton = document.querySelector('#faster');
const slider = document.querySelector('#slider');



video.loop = false;
video.load();


function playvideo() {
    video.play();
}

function pausevideo() {
    video.pause();
}

function mutevideo() {
    video.muted = true;
}

function skipvideo() {
    if (video.duration >= video.currentTime + 15) {
        video.currentTime = video.currentTime + 15;
    } else{
        video.currentTime=0;
    }   
}

function fastervideo() {
    if (video.playbackRate == 2){
        console.log(video.playbackRate);
        alert('Video is at fastest speed!');
    } else if(video.playbackRate == 1){
        console.log(video.playbackRate);
        video.playbackRate = 2;
    } else{
        console.log(video.playbackRate);
        video.playbackRate = 1;
    }
}

function slowervideo() {
    if (video.playbackRate == 0.5){
        console.log(video.playbackRate);
        alert('Video is at slowest speed!');
    } else if(video.playbackRate == 1){
        console.log(video.playbackRate);
        video.playbackRate = 0.5;
    } else{
        console.log(video.playbackRate);
        video.playbackRate = 1;
    }
}

function volumeslide() {
    video.volume = slider.value/100;

}



playButton.addEventListener("click", playvideo);
pauseButton.addEventListener("click", pausevideo);
muteButton.addEventListener("click", mutevideo);
skipButton.addEventListener("click", skipvideo);
fasterButton.addEventListener("click", fastervideo);
slowerButton.addEventListener("click", slowervideo);
slider.addEventListener("change", volumeslide);
