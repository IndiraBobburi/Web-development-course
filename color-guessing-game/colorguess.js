var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var output = document.getElementById("output");
var h1 = document.querySelector("h1");

colorDisplay.textContent = pickedColor;

for(var i=0; i < squares.length; i++)
{
	squares[i].style.backgroundColor = colors[i];

	squares[i].addEventListener("click", function(){
		if(this.style.backgroundColor === pickedColor)
		{
			changeColor(pickedColor);
			h1.style.backgroundColor = pickedColor;
			output.textContent = "Correct!";
		}
		else
		{
			this.style.backgroundColor = "#232323";
			output.textContent = "Try again";
		}
	})
}

function changeColor(color)
{
	for(var i=0; i < squares.length; i++)
	{
		squares[i].style.backgroundColor = pickedColor;
	}
}

function pickColor()
{
	return colors[Math.floor(Math.random()*colors.length)];
}

function generateRandomColors(number)
{
	var randomColors = [];
	for(var i=0; i< number; i++)
	{
		randomColors.push(generateColor());
	}
	return randomColors;
}

function generateColor()
{
	var val1 = Math.floor(Math.random()*255 + 1);
	var val2 = Math.floor(Math.random()*255 + 1);
	var val3 = Math.floor(Math.random()*255 + 1);

	 return "rgb(" + String(val1) + ", " + String(val2) + ", " + String(val3) + ")";
}