function setup() {
  createCanvas(500, 500);
  
}

function draw() {
  background(100) ; 
  // put your shapes here!
  
  text(mouseX + " , " + mouseY, 10, 20) ;  
} 

  

function mouseReleased() { 
  print(mouseX + " , " + mouseY) ; 
} 

 
