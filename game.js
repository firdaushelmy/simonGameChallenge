// user side code

var userClickedPattern = []

$('.btn').click(function () {
  var userChosenColour = $(this).attr("id");
  $("#" + userChosenColour).fadeOut(100).fadeIn(100);
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour)
  animatePress(userChosenColour)
});

// server side code
var buttonColours = ["red", "blue", "green", "yellow"];
var level = 0
var gamePattern = [];

function nextSequence() {

  var randomNumber = Math.round(Math.random() * 3);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour)
  animatePress(randomChosenColour)
  level++
  $("h1").html("Level " + level)
}

// code before game started. only run once.
var started = false
$(document).keydown(function () {

  if (!started) {
    nextSequence()
    started = true
  }
})

// QOL code
function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3")
  audio.play();
}

function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");

  setTimeout(function () {
    $("#" + currentColour).removeClass("pressed")
  }, 100)
}
