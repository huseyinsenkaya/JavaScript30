window.addEventListener("keydown", playSound);

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
}

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (!audio) {
    return;
  }
  audio.currentTime = 0; //rewind to start
  audio.play();
  key.classList.add("playing");
}

function playSoundTouch(e) {
  let charCode = this.getAttribute("data-key");
  const audio = document.querySelector(`audio[data-key="${charCode}"]`);
  const key = document.querySelector(`div[data-key="${charCode}"]`);
  if (!audio) {
    return;
  }
  audio.currentTime = 0; //rewind to start
  audio.play();
  key.classList.add("playing");
}

const keys = document.querySelectorAll(".key");

keys.forEach((key) => {
  key.addEventListener("click", playSoundTouch);
  key.addEventListener("transitionend", removeTransition);
});
