var see_more_button = document.getElementById("see_more");
var section = document.getElementsByTagName("section");
var letter = document.getElementById("letter");
var time = 0;

function print() {
  time += 1;
  window.alert(`have been cliked ${time} time(s)`);
}
