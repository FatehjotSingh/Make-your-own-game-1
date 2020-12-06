var link,linkPos
var gameState,edges,life,score;
var bgImg,music,gameOver
var edges,b1,b2,b3,b4,b5,b6,b7,b8,b9;
var og1,og2,og3,og4;
var oui,odi,oli,ori;
var ldi,lui,lli,lri;
var lda,lua,lla,lra;
var lsd,lsu,lsl,lsr;
var horisword,vertisword
var num

function preload() {
  bgImg=loadImage("assets/bg.PNG")
  music=loadSound("assets/02 Overworld (1).mp3")
  gameOver=loadSound("assets/07 Game Over (1).mp3")

  oui=loadAnimation("assets/u1.png","assets/u2.png")
  odi=loadAnimation("assets/d1.png","assets/d2.png")
  oli=loadAnimation("assets/l1.png","assets/l2.png")
  ori=loadAnimation("assets/r1.png","assets/r2.png")

  ldi=loadAnimation("assets/down.png")
  lui=loadAnimation("assets/up1.png")
  lri=loadAnimation("assets/rite2.png")
  lli=loadAnimation("assets/left1.png")

  lsd=loadAnimation("assets/dstab.png")
  lsu=loadAnimation("assets/ustab.png")
  lsr=loadAnimation("assets/rstab.png")
  lsl=loadAnimation("assets/lstab.png")

  lda=loadAnimation("assets/down.png","assets/down1.png")
  lua=loadAnimation("assets/up1.png","assets/up2.png")
  lra=loadAnimation("assets/rite2.png","assets/right2.png")
  lla=loadAnimation("assets/left1.png","assets/left2.png")

}

function setup() {
  createCanvas(600,600)
  edges=createEdgeSprites();
  horisword=createSprite(1000,1000,10,30)
  vertisword=createSprite(1000,1000,30,10)
  b1=createSprite(250,70,10,250)
  b2=createSprite(340,70,10,250)
  b3=createSprite(120,190,250,10)
  b4=createSprite(470,190,250,10)
  b5=createSprite(250,380,10,250)
  b6=createSprite(340,380,10,250)
  b7=createSprite(120,260,250,10)
  b8=createSprite(470,260,250,10)
  b9=createSprite(300,465,100,10)

  link=createSprite(300,230,10,10)
  link.addAnimation("down",ldi)
  link.addAnimation("up",lui)
  link.addAnimation("right",lri)
  link.addAnimation("left",lli)
  link.addAnimation("down2",lda)
  link.addAnimation("right2",lra)
  link.addAnimation("up2",lua)
  link.addAnimation("left2",lla)
  link.addAnimation("sdown",lsd)
  link.addAnimation("sup",lsu)
  link.addAnimation("sleft",lsl)
  link.addAnimation("sright",lsr)

  life=5
  score=0

 gameState = "Playing";
 linkPos="down"
 music.play();
 music.loop();

fill("red")

og1=createGroup()
og2=createGroup()
og3=createGroup()
og4=createGroup()

}

function draw() {
  textSize(35)
  horisword.x=1000
  horisword.y=1000
  vertisword.x=1000
  vertisword.y=1000
  if(life!==0){
 background(bgImg)
}
 link.setVelocity(0,0)
 link.bounceOff(edges)
 link.bounceOff(b1)
 link.bounceOff(b2)
 link.bounceOff(b3)
 link.bounceOff(b4)
 link.bounceOff(b5)
 link.bounceOff(b6)
 link.bounceOff(b7)
 link.bounceOff(b8)
 link.bounceOff(b9)
 b1.visible=false
 b2.visible=false
 b3.visible=false
 b4.visible=false
 b5.visible=false
 b6.visible=false
 b7.visible=false
 b8.visible=false
 b9.visible=false
 horisword.visible=false
 vertisword.visible=false
 link.setCollider("rectangle",0,0,100,100)
 //console.log(linkPos)
 if(gameState==="Playing"){
 if(keyWentDown("b")){
  if(linkPos==="up"){
    link.changeAnimation("sup",lsu)
    horisword.x=link.x-5
    horisword.y=link.y-30
  }
  if(linkPos==="down"){
    link.changeAnimation("sdown",lsd)
    horisword.x=link.x
    horisword.y=link.y+30
  }
  if(linkPos==="left"){
    link.changeAnimation("sleft",lsl)
    vertisword.x=link.x-33
    vertisword.y=link.y+3
  }
  if(linkPos==="right"){
    link.changeAnimation("sright",lsr)
    vertisword.x=link.x+33
    vertisword.y=link.y+3
  }
 }
 if(vertisword.isTouching(og1)){
  og1.destroyEach();
  score=score+1
} 
if(vertisword.isTouching(og2)){
 og2.destroyEach();
 score=score+1
}
if(vertisword.isTouching(og3)){
 og3.destroyEach();
 score=score+1
}
if(frameCount%100===0){
  var num=Math.round(random(1,4))
  switch(num){
    case 1:spawnup()
    break
    case 2:spawndown()
    break
    case 3:spawnleft()
    break
    case 4:spawnright()
    break
  }
}
if(vertisword.isTouching(og4)){
 og4.destroyEach();
 score=score+1
}
if(horisword.isTouching(og1)){
  og1.destroyEach();
  score=score+1
} 
if(horisword.isTouching(og2)){
 og2.destroyEach();
 score=score+1
}
if(horisword.isTouching(og3)){
 og3.destroyEach();
 score=score+1
}
if(horisword.isTouching(og4)){
 og4.destroyEach();
 score=score+1
}
 if(keyDown(UP_ARROW)){
  link.changeAnimation("up",lui)
  link.velocityY=-2
  linkPos="up"
}
if(keyDown(DOWN_ARROW)){
  link.changeAnimation("down",ldi)
  link.velocityY=2
  linkPos="down"
}
if(keyDown(LEFT_ARROW)){
  link.changeAnimation("left",lli)
  link.velocityX=-2
  linkPos="left"
}
if(keyDown(RIGHT_ARROW)){
  link.changeAnimation("right",lri)
  link.velocityX=2
  linkPos="right"
}
if(link.isTouching(og1)||link.isTouching(og2)||link.isTouching(og3)||link.isTouching(og4)){
  life=life-1;
  if(link.isTouching(og1)){og1.destroyEach()}
  if(link.isTouching(og2)){og2.destroyEach()}
  if(link.isTouching(og3)){og3.destroyEach()}
  if(link.isTouching(og4)){og4.destroyEach()}
}
fill("red")
text(life,150,515)
text(score,170,565)
if(life===0){
  background(0)
  
  end()
}
}

 link.scale=0.4
  drawSprites();
  


}
function spawnup(){
  oktou=createSprite(300,450,10,10)
  oktou.addAnimation("oup",oui)
  oktou.scale=0.4  
  oktou.velocityY=-3
  og4.add(oktou)
}
function spawndown(){
  oktou=createSprite(300,0,10,10)
  oktou.addAnimation("odown",odi)
  oktou.scale=0.4  
  oktou.lifetime=700
  oktou.velocityY=3
  if(oktou.y===500){
    oktou.y=700
  }
  og3.add(oktou)
}
function spawnleft(){
  oktou=createSprite(0,225,10,10)
  oktou.addAnimation("olp",ori)
  oktou.scale=0.4  
  oktou.velocityX=3
  og2.add(oktou)
}
function spawnright(){
  oktou=createSprite(600,225,10,10)
  oktou.addAnimation("orp",oli)
  oktou.scale=0.4  
  oktou.velocityX=-3
  og1.add(oktou)
}
function end(){
  gameState="End"
  music.stop();
  gameOver.play();
  
  background(0)
  fill("white")
  text("Game Over",200,300)
  
  link.destroy()
  og1.destroyEach()
  og2.destroyEach()
  og3.destroyEach()
  og4.destroyEach()
}