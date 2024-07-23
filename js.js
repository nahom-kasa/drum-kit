document.body.addEventListener("keydown", (e) => {
  let keyPressValue = e.key;
  let check =
    e.key === "a" ||
    e.key === "s" ||
    e.key === "d" ||
    e.key === "f" ||
    e.key === "g" ||
    e.key === "h" ||
    e.key === "j" ||
    e.key === "k" ||
    e.key === "l";
  if (check) {
    window[keyPressValue]();
  }
});
document.body.addEventListener("click", (e) => {
  let className = e.target.className;
  window[className];
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
