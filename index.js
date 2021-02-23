
var numOfDrums = document.querySelectorAll(".drum").length;

// Mouse Clicks on Drum
for (var i = 0; i < numOfDrums; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);
    makeAnimation(buttonInnerHTML);
  });
}

// Keyboard Clicks
document.addEventListener("keydown", function(event) {
  makeSound(event.key);
  makeAnimation(event.key);
});

// Audioplayer
function playSound(soundFile) {
  var sound = new Audio(soundFile);
  sound.play();
}

// Animation for pressing (darker when pressed, after 200ms back to normal)
function makeAnimation(drum) {
  var drumPressed = document.querySelector("." + drum);
  drumPressed.classList.add("pressed");

  setTimeout(function(){drumPressed.classList.remove("pressed");}, 200);
}

// Function to make sound
function makeSound(key) {
  switch (key) {
    case "w":
      playSound('sounds/crash.mp3');
      break;

    case "a":
      playSound('sounds/kick-bass.mp3');
      break;

    case "s":
      playSound('sounds/snare.mp3');
      break;

    case "d":
      playSound('sounds/tom-1.mp3');
      break;

    case "j":
      playSound('sounds/tom-2.mp3');
      break;

    case "k":
      playSound('sounds/tom-3.mp3');
      break;

    case "l":
      playSound('sounds/tom-4.mp3');
      break;

    default:
      console.log("buttonInnerHTML");

  }
}
