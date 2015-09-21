
var a = new Vector2();
a.set(5, 6);

var b = new Vector2();
b.set(2, -1);

var Vector2 = function()
{
	this.x = 0; 
	this.y = 0;
}

Vector2.prototype.set = function (x, y)
{
	this.x = x;
	this.y = y;
}

Vector2.prototype.add = function (otherVector)
{
	this.x = otherVector.x + this.x;
	this.y = otherVector.y + this.y;
}

Vector2.prototype.subtract = function(otherVector)
{
	this.x -= otherVector.x;
	this.y -= otherVector.y;
}

Vector2.prototype.multiply = function(otherVector)
{
	this.x = otherVector.x * this.x;
	this.y = otherVector.y * this.y;
}

//normalizing
var length = Math.sqrt(x*x + y*y);
var normalX = x / length;
var normalY = y / length;