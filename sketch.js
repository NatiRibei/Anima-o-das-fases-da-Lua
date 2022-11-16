var button, buttonImg;
var moon, moonImg;
var FM, FMImg;
var WNG,WNGImg; 
var LQM,LQMImg;
var WNC,WNCImg;
var NM,NMImg;
var WXC,WXCImg;
var FQM,FQMImg;
var WXG,WXGImg; 

function preload(){

  //subindo as imagens
  buttonImg = loadImage("./assets/play0.png","./assets/play1.png","./assets/play2.png");
  moonImg = loadAnimation("./assets/sprite_00.png","./assets/sprite_01.png","./assets/sprite_02.png","./assets/sprite_03.png","./assets/sprite_04.png",
  "./assets/sprite_05.png","./assets/sprite_06.png","./assets/sprite_07.png","./assets/sprite_08.png","./assets/sprite_09.png",
  "./assets/sprite_10.png","./assets/sprite_11.png","./assets/sprite_12.png","./assets/sprite_13.png",
  "./assets/sprite_14.png","./assets/sprite_15.png","./assets/sprite_16.png","./assets/sprite_17.png",
  "./assets/sprite_18.png","./assets/sprite_19.png","./assets/sprite_20.png","./assets/sprite_21.png","./assets/sprite_22.png",
  "./assets/sprite_23.png","./assets/sprite_24.png","./assets/sprite_25.png","./assets/sprite_26.png",
  "./assets/sprite_27.png","./assets/sprite_28.png","./assets/sprite_29.png","./assets/sprite_30.png",
  "./assets/sprite_31.png","./assets/sprite_32.png","./assets/sprite_33.png");
  FMImg = loadImage("./assets/FM.png");
  WNGImg = loadImage("./assets/WNG.png");
  LQMImg = loadImage("./assets/LQM.png");
  WNCImg = loadImage("./assets/WNC.png");
  NMImg = loadImage("./assets/NM.png");
  WXCImg = loadImage("./assets/WXC.png");
  FQMImg = loadImage("./assets/FQM.png");
  WXGImg = loadImage("./assets/WXG.png");
}


function setup(){
  createCanvas(1200,600);
  //Criando as sprites
  button = createSprite(959, 30);
  moon = createSprite(600, 300);
  FM = createSprite(950, 300);//ok
  WNG = createSprite(825, 184);
  LQM = createSprite(600, 125);//ok
  WNC = createSprite(450, 130);
  NM = createSprite(300, 300);//ok
  WXC = createSprite(412, 443);
  FQM = createSprite(600, 480);//ok
  WXG = createSprite(810, 510);
  button.addImage(buttonImg);

  //Adicionando as animações e imagens
  moon.addAnimation("moon",moonImg);
  FM.addImage(FMImg);
  WNG.addImage(WNGImg);
  LQM.addImage(LQMImg);
  WNC.addImage(WNCImg);
  NM.addImage(NMImg);
  WXC.addImage(WXCImg);
  FQM.addImage(FQMImg);
  WXG.addImage(WXGImg);

  //Dimensione as animações
  button.scale = 0.5;
  FM.scale = 0.5;
  WNG.scale = 0.5;
  LQM.scale = 0.5;
  WNC.scale = 0.5;
  NM.scale = 0.5;
  WXC.scale = 0.5;
  FQM.scale = 0.5;
  WXG.scale = 0.5;
  moon.scale = 2;

  //Defina a visibilidade
  button.visible = 1;
  moon.visible = 1;
  FM.visible = 1;
  WNG.visible = 0;
  LQM.visible = 0;
  WNC.visible = 0;
  NM.visible = 0;
  WXC.visible = 0;
  FQM.visible = 0;
  WXG.visible = 0;

}

function draw() {
  
  
  background("black");
  fill("white");
  text("PASSE O MOUSE SOBRE A LUA PARA VER A FASE E SEU NOME", 10, 585);
  if (mouseIsOver(FM)) {
    WNG.visible = 1;
    moon.setFrame(0);
    moon.pause();
    WXG.visible = 0;
    text("LUA CHEIA", 10, 20);
  }
  if (mouseIsOver(WNG)) {
    LQM.visible = 1;
    FM.visible = 0;
    moon.setFrame(2);
    text("LUA BALSÂMICA", 10, 20);
  }
  if (mouseIsOver(LQM)) {
    WNC.visible = 1;
    WNG.visible = 0;
    moon.setFrame(5);
    text("QUARTO MINGUANTE", 10, 20);
  } 
  if (mouseIsOver(WNC)) {
    NM.visible = 1;
    LQM.visible = 0;
    moon.setFrame(10);
    text("LUA MINGUANTE", 10, 20);
  } 
  if (mouseIsOver(NM)) {
    WXC.visible = 1;
    WNC.visible = 0;
    moon.setFrame(15);
    text("LUA NOVA", 10, 20);
  }
  if (mouseIsOver(WXC)) {
    FQM.visible = 1;
    NM.visible = 0;
    moon.setFrame(20);
    text("LUA CRESCENTE", 10, 20);
  }
  if (mouseIsOver(FQM)) {
    WXG.visible = 1;
    WXC.visible = 0;
    moon.setFrame(24);
    text("QUARTO CRESCENTE", 10, 20);
  }
  if (mouseIsOver(WXG)) {
    FM.visible = 1;
    FQM.visible = 0;
    moon.setFrame(30);
    text("LUA GIBOSA", 10, 20);
  }
  if (mouseIsOver(button)){
    moon.play();
    moon.visible = 1;
    FM.visible = 1;
    WNG.visible = 0;
    LQM.visible = 0;
    WNC.visible = 0;
    NM.visible = 0;
    WXC.visible = 0;
    FQM.visible = 0;
    WXG.visible = 0;
  }
  drawSprites();
}
