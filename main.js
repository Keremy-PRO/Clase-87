var canvas= new fabric.Canvas("myCanvas");

block_image_width=30;//Ancho del bloque
block_image_height=30;//Alto del bloque
steve_w=100;
steve_h=100;
player_x=10;
player_y=10;

var block_image_object="";// Maneja el objeto del bloque
var steve_image_object="";

function new_image(get_image){ // función que inserta imagen
    fabric.Image.fromURL(get_image, function(Img){
        block_image_object=Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        canvas.add(block_image_object);//Agrego el objeto bloque al canvas
    });
}

function player_update(){
	fabric.Image.fromURL("img/cerdo3.png", function(Img){
        steve_image_object=Img;
        steve_image_object.scaleToWidth(steve_w);
        steve_image_object.scaleToHeight(steve_h);
        canvas.add(steve_image_object);//Agrego el objeto bloque al canvas
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keyPressed= e.keyCode;//La tecla que me enviaste y saca el código
    if(keyPressed == '87')
	{
		new_image('img/wall.jpg'); 
		console.log("w");
	}
	if(keyPressed == '71')
	{
		new_image('img/ground.png'); 
		console.log("g");
	}
	if(keyPressed == '76')
	{
		new_image('img/light_green.png'); 
		console.log("l");
	}
	if(keyPressed == '84')
	{
		new_image('img/trunk.jpg'); 
		console.log("t");
	}
	if(keyPressed == '82')
	{
		new_image('img/roof.jpg'); 
		console.log("r");
	}
	if(keyPressed == '89')
	{
		new_image('img/yellow_wall.png'); 
		console.log("y");
	}
	if(keyPressed == '68')
	{
		new_image('img/dark_green.png'); 
		console.log("d");
	}
	if(keyPressed == '85')
	{
		new_image('img/unique.png'); 
		console.log("u");
	}
	if(keyPressed == '67')
	{
		new_image('img/cloud.jpg'); 
		console.log("c");
	}
	if(keyPressed == '38'){
		up();
		console.log("presionaste up");
	}
}

function up(){
	if(player_y>=0){
		player_y=player_y - block_image_height;
		canvas.remove(player_image_object);
		player_update();
	}
}