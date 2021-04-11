class Elastic{
    constructor(bodyA, pointB){
        var options ={
            bodyA : bodyA,
            pointB : pointB
        }
        this.elastic = Constraint.create(options);
        this.bodyA = bodyA;
        this.pointB = pointB;
        World.add(world, this.elastic);
    }
    
    fly(){
        this.elastic.bodyA = null;
    }
}