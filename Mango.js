class Mango{
    constructor(x,y){
        var options ={
          isStatic : true,
          restitution : 0,
          friction : 1
        }
        this.image = loadImage("Plucking mangoes/mango.png");
        this.body = Bodies.rectangle(x,y,35,35, options);
        World.add(world, this.body);
      }
      display(){
       var pos = this.body.position;
       push();
        image(this.image,pos.x, pos.y, 35, 35);
        pop();
        
      }
  }