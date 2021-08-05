var win = true;
$(function () {
  $("#maze .boundary").mouseover(red);
  $("#end").mouseover(end);
  $("#start").click(reset);
  $("#maze").mouseleave(leaveMouse);
});
function red() {
  win = false;
  $(".boundary").addClass("youlose");
  $("#status").text("You lose! :]").css("color", "red");
}

function reset() {
  win = true;
  $("#status").text("Game Started!").css("color", "green");
  $(".boundary").each(function () {
    $(this).removeClass("youlose");
  });
}

function end() {
  let endGame = win == true ? "You win! :]" : "you lost again! :";
  $("#status").text(endGame);
}
function leaveMouse() {
  red();
}
