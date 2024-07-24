const keys = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
const elements = keys.map((key) => document.querySelector(`.${key}`));

document.body.addEventListener("keydown", (e) => {
  const index = keys.indexOf(e.key.toLowerCase());
  if (index !== -1) {
    elements[index].classList.add("playing");
    window[keys[index]]();
    setTimeout(() => {
      elements[index].classList.remove("playing");
    }, 200);
  }
});

document.body.addEventListener("click", (e) => {
  const clickedElement = e.target.closest(`.${keys.join(", .")}`);
  if (clickedElement) {
    const className = clickedElement.className;
    window[className]();
  }
});

function a() {
  const audio = new Audio("sounds/clap.wav");
  audio.play();
}

function s() {
  const audio = new Audio("sounds/hihat.wav");
  audio.play();
}

function d() {
  const audio = new Audio("sounds/kick.wav");
  audio.play();
}

function f() {
  const audio = new Audio("sounds/openhat.wav");
  audio.play();
}

function g() {
  const audio = new Audio("sounds/boom.wav");
  audio.play();
}

function h() {
  const audio = new Audio("sounds/ride.wav");
  audio.play();
}

function j() {
  const audio = new Audio("sounds/snare.wav");
  audio.play();
}

function k() {
  const audio = new Audio("sounds/tom.wav");
  audio.play();
}

function l() {
  const audio = new Audio("sounds/tink.wav");
  audio.play();
}

// find the class name of each buttons and use that as a function
// and make each buttons work

// thus step one is to make a function for all
