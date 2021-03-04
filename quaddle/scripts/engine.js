var c; 
var ctx; 

function fDown()
{
//	alert("click");
	c = document.getElementById("myCanvas");
	ctx = c.getContext("2d");
	if(Gdone)
	{fNewGame();}
}

function fUp()
{
	alert("double");
}

function fNewGame()
{
	// draw the floor
	var vMe= {x:15,y:380,w:20, h:20, sw:30, sh:10};
	var vObs= {x:40, y:10, h:25, w:25};

	ctx.fillStyle="white";
	ctx.fillRect(0, 400, 500, 100);
	
	// draw the character
	ctx.fillStyle="black";
	ctx.fillRect(vMe.x, vMe.y, vMe.w, vMe.h);
	
	// draw the obsticles
	ctx.fillStyle="white";
	ctx.fillRect(vObs.x, vObs.y, vObs.w, vObs.h);
	
	// start the game loop
	
	
}
