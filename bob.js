class bob{
	constructor(x,y,r)
	{
	// assign options to the rubber ball\
	    var options = {
            isStatic : false,
			restitution: 1,
			friction: 0,
			density:1
		}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var bobpos=this.body.position;		
			push()
			translate(bobpos.x, bobpos.y);
			rectMode(CENTER)
		    fill ("pink")
			//draw the ellipse here to display the rubber ball
			ellipse(0,0,this.r,this.r)
			pop()
	}

}