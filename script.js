/* Edit this file */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');


//progress filled
progressBar.addEventListener('timeupdate', updateProgress);
function updateProgress() {
    const progress = (video.currentTime / video.duration) * 100;
    video.style.width = `${progress}%`;
}

//play pause buttons
toggle.addEventListener('click', playPauseVideo);
function playPauseVideo() {
    if(video.paused) {
        video.play();
    }else video.pause();
}

video.addEventListener('play', changeButton);
video.addEventListener('pause', changeButton);
function changeButton() {
    toggle.textContent = video.paused ? "►" : "❚ ❚";   
}

//volume change
ranges[0].addEventListener('input', updateVolume);
function updateVolume() {
    video.volume = ranges[0].value;
}


//playback speed
ranges[1].addEventListener('click', updateSpeed);
function updateSpeed() {
    video.playbackRate = ranges[1].value;
}


//skip buttons
skipButtons.forEach(skipButton => {
    skipButton.addEventListener('click', skipVideo);
});

function skipVideo() {
    let timeSkip = parseFloat(this.dataset.skip);
    video.currentTime += timeSkip;
}


// skipButtons.forEach(button => button.addEventListener('click', skipTime));
// function skipTime() {
//   const skipTime = parseFloat(this.dataset.skip);
//   video.currentTime += skipTime;
// }