class Hero {
  constructor(x,y,r)
	{
		var options = { 
			density: 1, 
			frictionAir: 1
		};
		this.x=x;
		this.y=y;
		this.r=r;
		this.image=loadImage("superhero1.png");
		this.body=Bodies.circle(this.x, this.y, (this.r)/2, options);
		World.add(world, this.body);

		if(keyDown(LEFT_ARROW)){
			changePosition(-1,0);
		  }
		  else if(keyDown(RIGHT_ARROW)){
			changePosition(1,0);
		  }
		  else if(keyDown(UP_ARROW)){
			changePosition(0,-1);
		  }
		  else if(keyDown(DOWN_ARROW)){
			changePosition(0,+1);
		  }
	}
	
	display()
	{
			
			var heroPos=this.body.position;		
			push()
			translate(heroPos.x, heroPos.y-100);
			rectMode(CENTER)
			fill(255,0,255)
			imageMode(CENTER);
			image(this.image, 0,0,this.r+150, this.r)
			pop()
			
	}
}
