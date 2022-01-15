
var car
var ground
var redcar
var bluecar
var truck
var police
var taxi
var roadblock
var rn
var obstacle
var obstacles   

function preload(){
carImg=loadImage("race car.png")
policeImg=loadImage("police.png")
backgroundImg=loadImage("Road.png")
taxiImg=loadImage("taxi.png")
truckImg=loadImage("truck.png")
shieldImg=loadImage("shild.png")
roadblockImg=loadImage("roadblock.png")
redcarImg=loadImage("redcar.png")
bluecarImg=loadImage("bluecar.png")
}

function setup() {
    createCanvas(windowWidth, windowHeight)

ground=createSprite(windowWidth/2, windowHeight, windowWidth/2,windowHeight)
ground.addImage("ground",backgroundImg)
ground.velocityY=-30

car=createSprite(200, 290,50,50)
car.addImage("car",carImg)
car.scale=0.4
car.setCollider(0,0,100,100)

police=createSprite(40, 620, 40,40)
police.addImage("police", policeImg)
police.scale=2

}

function draw() {
background("white")

//obstacles ()

car.x=World.mouseX
police.x=car.x

if(ground.y<0){
    ground.y=windowHeight
}



drawSprites()
}

function obstacles(){
if(frameCount % 70 === 0){
var obstacle=createSprite(Math.round(random(0,windowWidth)), 0, 20,20)

  var rn = Math.round(random(1,5))

  switch (rn){
        case 1: obstacle.addImage(redcarImg)
        break;

        case 2: obstacle.addImage(bluecarImg)
        break;

        case 3: obstacle.addImage(taxiImg)
        break;

        case 4: obstacle.addImage(truckImg)
        break;

        case 5: obstacle.addImage(roadblockImg)
        break;  
  }


}
} 
