var stopButton;
var startButton;
var fontSelection;
var selectedAnimation;
var animationTextArea;
var speedSelection;
var currentAnim;

var animation = null;
var delay = 250;
var timer = null;
var position = 0;
window.onload = function () {
  animationTextArea = document.getElementById("text-area");
  startButton = document.getElementById("start");
  stopButton = document.getElementById("stop");
  selectedAnimation = document.getElementById("animation");
  fontSelection = document.getElementById("fontsize");
  speedSelection = document.getElementById("turbo");

  startButton.onclick = startAnimation;  
  stopButton.onclick = stopAnimation;  
  selectedAnimation.onchange = setAnimation;
  fontSelection.onchange = setFontSize;
  speedSelection.onchange = setDelay;

  selectedAnimation.selectedIndex = 0;  
  fontSelection.selectedIndex = 0;  
  
};

function startAnimation() {
  startButton.disabled = true;
    stopButton.disabled = false;
    selectedAnimation.disabled = true;
  if (timer === null) {
    timer = setInterval(switchFrame, delay);
    currentAnim = animationTextArea.value;
  }
}

function stopAnimation() {
  startButton.disabled = false;
    stopButton.disabled = true;
    selectedAnimation.disabled = false;

  if (timer !== null) {
    clearInterval(timer);
    timer = null;
  }
  position = 0;
  resetAnim();
}

function setAnimation() {
  var selected = selectedAnimation.options[selectedAnimation.selectedIndex].value;
  animationTextArea.value = ANIMATIONS[selected];
}

function setFontSize() {
  animationTextArea.style.fontSize = fontSelection.value;
}

function setDelay() {
  if (speedSelection.checked) {
    clearInterval(timer);
    delay = 50;
    timer = setInterval(switchFrame, delay);
  } else {
    clearInterval(timer);
    delay = 250;
    timer = setInterval(switchFrame, delay);
  }
}

function switchFrame() {
  var frames = ANIMATIONS[selectedAnimation.value].split("=====\n");
  animationTextArea.value = frames[position];
  position++;
  if (position === frames.length) position = 0;
}

function resetAnim() {
  animationTextArea.value = currentAnim;
}