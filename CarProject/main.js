canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

nasa_mars_images_array = ["nasa_image_1.jpg","nasa_image_2.jpeg", "nasa_image_3.jpg","nasa_image_4.jpg"];

random_number = Math.floor(Math.random() * 4);
console.log(random_number);
rover_width = 120;
rover_height = 70;

background_image = "https://i.postimg.cc/bv5d35nK/racing.jpg"
console.log("background_image = " + background_image);
rover_image = "https://i.postimg.cc/9rqYz9HM/car1.png";

rover_x = 10;
rover_y = 10;

car2_width = 120;
car2_height = 70;
car2_image = "https://i.postimg.cc/tnnW1Kff/car2.png";
car2_x = 10;
car2_y = 100;

function add() {
	background_imgTag = new Image(); //defining a variable with a new image
	background_imgTag.onload = uploadBackground; // setting a function, onloading this variable
	background_imgTag.src = background_image;   // load image

	rover_imgTag = new Image(); //defining a variable with a new image
	rover_imgTag.onload = uploadrover; // setting a function, onloading this variable
	rover_imgTag.src = rover_image;   // load image

	car2_imgTag = new Image();
	car2_imgTag.onload = uploadcar2; 
	car2_imgTag.src = car2_image;
}

function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover() {
	ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}

function uploadcar2() {
	ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
} 

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		if(keyPressed == '87')
		{
			car2_up();
			console.log("right");
		}
		if(keyPressed == '83')
		{
			car2_down();
			console.log("right");
		}
		if(keyPressed == '65')
		{
			car2_left();
			console.log("right");
		}
		if(keyPressed == '68')
		{
			car2_right();
			console.log("right");
		}
}

function up() 
{
	if(rover_y >=0)
	{
		rover_y -= 10;
		uploadBackground();
		uploadrover();
	}
}

function down() 
{
    if(rover_y <=500)
	{
		rover_y += 10;
		uploadBackground();
		uploadrover();
	}

}

function left() 
{
	if(rover_y >= 0)
	{
		rover_x -= 10;
		uploadBackground();
		uploadrover();
	}
}

function right() 
{
    if(rover_x <= 700)
	{
		rover_x += 10;
		uploadBackground();
		uploadrover();
    }
}

function car2_up() 
{
	if(car2_y >=0)
	{
		car2_y -= 10;
		uploadBackground();
		uploadcar2();
	}
}

function car2_down() 
{
    if(car2_y <=500)
	{
		car2_y += 10;
		uploadBackground();
		uploadcar2();
	}

}

function car2_left() 
{
	if(car2_y >= 0)
	{
		car2_x -= 10;
		uploadBackground();
		uploadcar2();
	}
}

function car2_right() 
{
    if(car2_x <= 700)
	{
		car2r_x += 10;
		uploadBackground();
		uploadcar2();
    }
}