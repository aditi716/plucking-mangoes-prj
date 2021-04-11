class Stone{
    constructor(x,y){
        var options ={
          isStatic : false,
          restitution : 0,
          friction : 1,
          density : 1.2
        }
        this.image = loadImage("Plucking mangoes/stone.png");
        this.body = Bodies.rectangle(x,y,35,35, options);
        World.add(world, this.body);
      }
      display(){
        var posStone = this.body.position;
        imageMode(CENTER);
       push();
        image(this.image, posStone.x, posStone.y,35,35);
        pop();
      }
  }