let sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

sounds.forEach((sound) => {
  let button = document.createElement("button");
  button.classList.add("btn");
  button.textContent = sound;
  button.addEventListener("click", () => {
    stopAudio();
    document.getElementById(sound).play();
  });
  document.getElementById("container").appendChild(button);
});

function stopAudio() {
  sounds.forEach((sound) => {
    let audio = document.getElementById(sound);
    audio.pause();
    audio.currentTime = 0;
  });
}
