class Ground{
    constructor(){
      this.body = Bodies.rectangle(450,650,900,100);
      World.add(world, this.body);
    }
    display(){
     //var posX = this.body.x;
     //var posY = this.body.y;
      rectMode(CENTER);
      fill("grey");
      rect(450, 650, 900, 100);
    }
}