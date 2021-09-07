const video = document.getElementById('background-video');

const playButton = document.getElementById('play');
const muteButton = document.getElementById('mute');

mute();

setTimeout(() => {
    if(video.paused) {
        play();
    }
}, 2000);

function toggleVideo() {
    if(video.paused) {
        play();
    } else {
        pause();
    }
}

function toggleMute() {
    if(video.muted) {
        unmute();
    } else {
        mute();
    }
}

function play() {
    video.play();
    playButton.innerHTML = '<i class="fas fa-pause"></i>Pausar';
}

function pause() {
    video.pause();
    playButton.innerHTML = '<i class="fas fa-play"></i>Play';
}

function mute() {
    video.muted = true;
    muteButton.innerHTML = '<i class="fas fa-volume-mute"></i>';
    muteButton.style.width = '42.35px';
}

function unmute() {
    video.muted = false;
    muteButton.innerHTML = '<i class="fas fa-volume-up"></i>';
    muteButton.style.width = '42.35px';
}