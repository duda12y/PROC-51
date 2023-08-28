var spaceImg;
var naveImg;
var balaImg;
var pedraImg;

var gameState = PLAY
var PLAY = 1
var END = 0















function preload(){

    spaceImg = loadImage('space.png');
    balaImg = loadImage('bala.png');
    naveImg = loadImage('nave.png');
    pedraImg = loadImage('pedra.png')
    

}
function setup() {
    createCanvas(windowWidth, windowHeight);
    space = createSprite(600,600)
    space.addImage(spaceImg)
    nave = createSprite(50,50,50,50)
    pedra = createSprite(50,50,)

    nave.addImage(naveImg)
    pedra.addImage(pedraImg)

    pedra.scale = 0.30
    

}

function draw() {
    background("black");
    //códigos que serão executados ao longo de todo o jogo


    drawSprites();
}

