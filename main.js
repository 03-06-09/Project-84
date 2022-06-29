// Create a reference for the canvas
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add() {
	typeimg_imgTag = new Image(); //defining a variable with a new image
	typeimg_imgTag.onload = uploadimg; // setting a function, onloading this variable
	typeimg_imgTag.src = typeimgTag_image;   // load image
}

function uploadimg() {

	ctx.drawImage(typeimg_imgTag, img_x, img_y, img_width, img_height);
}

//Write a code to grab the key-pressed event
window.addEventListener("keydown",my_keydown)
function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		
	if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90))
	{
		aplhabetkey();
		document.getElementById("d1").innerHTML="You pressed alphabet key";
	    console.log("aplhabetkey");
	}
	else if((keyPressed >=48 && keyPressed<=57))
	{
		numberkey();
		document.getElementById("d1").innerHTML="You pressed number key";
	    console.log("numberkey");
	}
	else if((keyPressed >=37 && keyPressed<=40))
	{
		arrowkey();
		document.getElementById("d1").innerHTML="You pressed arrow key";
	    console.log("arrowkey");
	}
	else if((keyPressed =17) || (keyPressed =18) || (keyPressed =27))
	{
		specialkey();
		document.getElementById("d1").innerHTML="You pressed special key";
	    console.log("specialkey");
	}
	else if((keyPressed =13) || (keyPressed =16) || (keyPressed =46))
	{
		otherkey();
		document.getElementById("d1").innerHTML="You pressed symbol or other key";
		console.log("otherkey");
	}
   
}

function aplhabetkey()
{
	//upload respective image with the message. 
    typeimgTag_image = "Alpkey.png"
	add();
}
function numberkey()
{
	typeimgTag_image = "numkey.png"
	add();
}
function arrowkey()
{
	typeimgTag_image = "Arrkey.png"
	add();
}
function specialkey()
{
	typeimgTag_image = "spkey.png"
	add();
}
function otherkey()
{
	typeimgTag_image = "otherkey.png";
	add();
}
	
