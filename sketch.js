function setup() { 
    createCanvas(900, 900);
    background("white");
  } 
  function draw() { 
    
    stroke("black");
    fill("pink");
    
    if(mouseIsPressed){ 
      rect(mouseX, mouseY, 35, 35, 35, 35); 
    }
  
  }
  