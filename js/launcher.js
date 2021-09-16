class Launcher{
    constructor(bodyA,pointB){
        var options={
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.02,
            length: 10
        }
        //this.pointB= pointB
        this.sling= Constraint.create(options);
        World.add(world, this.sling);
    }
    fly(){
        this.sling.bodyA= null;
    }
    attach(){
        this.sling.bodyA= stoneObj.body;
    }
    display(){
        if(this.sling.bodyA !=null){
            var pointA= this.sling.bodyA.position;
            var pointB= this.sling.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
}