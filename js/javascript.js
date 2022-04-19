// $("button").on("click", function() {
// 	var audio = document.getElementById("bell");
// 	audio.play();
// });

function ringBell(){
var audio = new Audio("img/door.mp3");

document.onclick = function() {
  audio.play();
	}	
	setInterval(function () {
	document.getElementById("loginForm").style.visibility="visible"}, 1000);
}

