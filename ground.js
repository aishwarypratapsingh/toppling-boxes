class ground{
    constructor(x,y,width,height){
    var options = {
             isStatic:true                  //JSON     
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    rectMode(CENTER);
    //fill("brown");
    rect(pos.x, pos.y, this.width, this.height);  
    //rect(this.body.position.x,this.body.position.y,this.width,this.height);
    
  }
}









