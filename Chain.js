class Chain
{
    constructor(bodyA,bodyB)
    {
       var options=
       {
           bodyA,
           bodyB,
           stiffness:0.04,
           length:10
       }
      this.bodyA1=bodyA;
      this.bodyB1=bodyB;
      this.chain=Constraint.create(options);
      World.add(world,this.chain);
      
    }
    display()
    {
        
        strokeWeight(4);
        line(this.bodyA1.position.x,this.bodyA1.position.y,this.bodyB1.position.x,this.bodyB1.position.y);    
    }
}