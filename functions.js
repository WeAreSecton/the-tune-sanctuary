const audioElement = document.getElementById("player");
const playButton = document.getElementById("play");
const playSpinner = document.getElementById("play-spinner");
const installButton = document.getElementById("install");
let prevScrollPos = window.pageYOffset;

playSpinner.style.display = "none";

playButton.addEventListener("click", () => {

    if (audioElement.paused) {
        audioElement.play();
        playSpinner.style.display = "inline-block";
        setTimeout(function () {
            playSpinner.style.display = "none";
            playButton.textContent = "Pause";
        }, 200);

    } else {
        audioElement.pause();
        playButton.textContent = "Play";
    }
    audioElement.currentTime = audioElement.duration;
});

window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
        document.querySelector("footer").style.transform = "translateY(0)";
    } else {
        document.querySelector("footer").style.transform = "translateY(100%)";
    }

    prevScrollPos = currentScrollPos;
}

if (window.matchMedia('(display-mode: standalone)').matches) {
    installButton.style.display = "none";
} else {

}

function betaMagic() {

}

let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  
  // Stash the event so it can be triggered later
  deferredPrompt = e;
  
  // Show the prompt when the user clicks the button
  installButton.addEventListener('click', () => {
    deferredPrompt.prompt();
  });
});
