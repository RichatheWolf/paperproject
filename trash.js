class trash 
{
	constructor(x, y, w, h)
	{
		var trashOptions = {
		    isStatic: true			
		}
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		this.body = Bodies.rectangle(x, y, w, h , trashOptions);
 		World.add(world, this.body);

	}
	display()
	{
			
			var trashPos = this.body.position;		

			push()
			translate(trashPos.x, trashPos.y);
			rectMode(CENTER);
			strokeWeight(4);
			stroke("white");
			fill("white");
			rect(0, 0, this.w, this.h);
			pop()
			
	}

}