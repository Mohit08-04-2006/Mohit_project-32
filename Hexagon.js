class Hexagon{
    constructor(x,y,r){
      var options = {
          isStatic: false,
          restitution:0.8,
          friction:1.0,
          density:1.0
      }

      this.body = Bodies.circle(x,y,r,options);
      this.image = loadImage("Hexagon-Yellow-PNG.png");
      World.add(world,this.body);

      this.r = r;

    }

    display(){
        fill('yellow');
        imageMode(CENTER);
        console.log("Body",this.body.position.x,this.body.position.y);
        console.log("image",this.body.position.x,this.body.position.y);
        image(this.image,this.body.position.x,this.body.position.y,this.r,this.r);
    }
}