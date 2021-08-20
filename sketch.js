
var food
function preload()
{
	
  dogHappy= loadImage("images/dogImg1.png")
  dogSad= loadImage("images/dogImg.png")
  playImage=loadImage("images/S.jpg")
}

function setup() {
	createCanvas(800, 700);
  database= firebase.database()
  database.ref('food').on("value",readPosition)
  milk1=new Food()
  milk1.getfeedTime()
 
  dog= createSprite(700,400,50,50)
    dog.addImage(dogSad)
    dog.scale=0.2
    playButton=createButton("play")
    playButton.position(400,200);
    

    


        
}



function draw() {  
 

  drawSprites();
  milk1.buttons()
  milk1.milkImg()
  playButton.mousePressed(()=>{
    background(playImage)
  })
  
 
  if (food===0){
    dog.addImage(dogHappy)
    dog.scale=0.2
  }

}
function readPosition(data){
  food= data.val()

}
function writeStock(data){
  database.ref('/').set({
    food:data
  })

}


