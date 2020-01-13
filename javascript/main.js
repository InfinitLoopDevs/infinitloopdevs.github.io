// var see_more_button = document.getElementById("see_more");
// var section = document.getElementsByTagName("section");
// let letter = document.getElementById("letter");
// var paragraph = document.getElementsByTagName("h1");
// var time = 0;

// function print() {
//   //   section.style.color = "red";
//   //   letter.style.maxHeight = "auto";
//   //   letter.style.color = "red";
//   //   paragraph.style.color = "red";
//   time += 1;
//   window.alert(`have been cliked ${time} time(s)`);
// }

// see_more_button.addEventListener("click", function() {
//   let letter = document.getElementById("letter");
//   let section = document.getElementsByTagName("section");
//   window.alert("have been cliked guys");
//   letter.style.height = "inherit";
//   letter.style.overflow = "inherit";
//   section.style.height = "inherit";
// });

$(document).ready(function() {
  $("loading_banner").hide();
  $(".read-more-show").click(function(e) {
    e.preventDefault();
    $(".read-more-content").slideDown();
    $("#see_more").hide();
    $("#see_less").show();
  });

  $(".read-more-hide").click(function(e) {
    $("#see_less").hide();
    $("#see_more").show();
    e.preventDefault();
    $(".read-more-content").slideUp();
  });
});
