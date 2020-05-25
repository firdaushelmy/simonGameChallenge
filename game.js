
// $('.btn').click(function () {
//   $(this).fadeOut(100).fadeIn(100)
//   playSound("." + [event.key])
// });

// function playSound(key) {
//   switch (key) {
//     case "greenSound":
//       var audio = new Audio("sounds/" + randomChosenColour +".mp3")
//       audio.play();
//       break;

//     default: console.log(innerHTML)
//       break;
//   }
// }
var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

function nextSequence() {

  var randomNumber = Math.round(Math.random() * 3);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

  var audio = new Audio("sounds/" + randomChosenColour + ".mp3")
  audio.play();
}




