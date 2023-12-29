let video = document.querySelector("video");
let playButton = document.querySelector(".play-button");
let slider = document.querySelector(".slider input");
playButton.addEventListener("click", toggleVideo);
let forward = document.querySelector(".forward");
let backward = document.querySelector(".backward");
let expandButton = document.querySelector(".fullscreen");
let soundSlider = document.querySelector(".sound input");
let controls = document.querySelector(".controls");
let isChanging = false;

video.onload = () => {
    setTotalTime();
    slider.onchange = setVideoTime;
    setInterval(() => {
        if (!isChanging) {
            setSlider();
            setCurrentTime();
        }
    }, 1000);
    video.onclick = toggleVideo;
    forward.onclick = forwardStep;
    backward.onclick = backwardStep;
    soundSlider.value = video.volume * 100;
    soundSlider.onchange = (event) => {
        video.volume = event.target.value / 100;
    }
    controls.onclick = (event) => {
        if (event.target.classList.contains("controls")) {
            console.log(controls.style.opacity);
            // if(controls.style.opacity == 0){
            //     controls.style.display="block";
            //     controls.style.opacity=1;
                
            // }else{
                controls.style.opacity=0;
                setTimeout(()=>{
                    controls.style.display="none";
                },100);
            // }
        }
    }

    video.onclick=()=>{
        controls.style.display="block";
        controls.style.opacity=1;
    }

    video.onfullscreenchange=()=>{
        if (!video.paused) {
            playButton.innerHTML = `<i class="fa-solid fa-circle-pause"></i>`
        } else {
            playButton.innerHTML = `<i class="fa-solid fa-circle-play"></i>`
        }

        soundSlider.value=video.volume*100;
    }

    slider.onfocus = () => {
        isChanging = true;
    }

    slider.onblur = () => {
        isChanging = false;
    }
}

function toggleVideo() {
    if (video.paused) {
        video.play();
        playButton.innerHTML = `<i class="fa-solid fa-circle-pause"></i>`
    } else {
        video.pause();
        playButton.innerHTML = `<i class="fa-solid fa-circle-play"></i>`
    }

}

function setPlayButton() {
    if (video.paused) {
        playButton.innerHTML = `<i class="fa-solid fa-circle-play"></i>`;
    } else {
        playButton.innerHTML = `<i class="fa-solid fa-circle-pause"></i>`;

    }
}

function setSlider() {
    let percentage = (video.currentTime / video.duration) * 100;
    slider.value = percentage;
    if (percentage == 100) {
        toggleVideo();
    }
}

function setVideoTime(event) {
    let input = event.target.value;
    let currentTime = (input * video.duration) / 100;
    video.currentTime = currentTime;
    slider.value = input;
}

function setTotalTime() {
    let totalTime = Math.floor(video.duration);
    let hours = Math.floor(totalTime / 3600);
    let minutes = Math.floor(totalTime % 3600 / 60);
    let seconds = Math.floor((totalTime % 3600) % 60);
    document.querySelector(".total-time").innerHTML = `${hours < 10 ? "0" + hours : hours}:${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
    console.log(`${hours < 10 ? "0" + hours : hours}:${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds}`);
}

function setCurrentTime() {
    let currentTime = Math.floor(video.currentTime);
    let hours = Math.floor(currentTime / 3600);
    let minutes = Math.floor(currentTime % 3600 / 60);
    let seconds = Math.floor((currentTime % 3600) % 60);
    document.querySelector(".current-time").innerHTML = `${hours < 10 ? "0" + hours : hours}:${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
}

function openFullscreen() {
    if (video.requestFullscreen) {
        video.requestFullscreen();
    } else if (video.webkitRequestFullscreen) { /* Safari */
        video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) { /* IE11 */
        video.msRequestFullscreen();
    }
}

function forwardStep() {
    video.currentTime = video.currentTime + 5;
}

function backwardStep() {
    video.currentTime = video.currentTime - 5;
}

