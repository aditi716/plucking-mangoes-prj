class Tree{
    constructor(x,y){
      var options ={
        isStatic : true
      }
      this.image = loadImage("Plucking mangoes/tree.png");
      this.body = Bodies.rectangle(x,y,350,500, options);
      World.add(world, this.body);
    }
    display(){
     var pos = this.body.position;
      imageMode(CENTER);
      push();
      image(this.image,pos.x, pos.y, 350, 500);
      pop();
    }
}