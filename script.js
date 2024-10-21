var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomButton = document.getElementById("random");

function setGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

	css.textContent = body.style.background + ";";
}

function getRandomColors() {
	var letter = "0123456789ABCDEF";
	var color = "#"
	for(var i = 0; i < 6; i++) {
		color += letter[Math.floor(Math.random() * 16)];
	}
	return color;
}

function setRandomColors() {
	color1.value = getRandomColors();
	color2.value = getRandomColors();
	setGradient();

}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
randomButton.addEventListener("click", setRandomColors);

window.onload = function() {
	setGradient;
}