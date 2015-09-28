
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

Vector2.prototype.multiplyScalar = function(scalar)
{
	this.x *= scalar;
	this.y *= scalar;
}

Vector2.prototype.normalize = function(otherVector)
{
	//normalizing
	var length = Math.sqrt(this.x*this.x + this.y*this.y);
	this.x = this.x / length;
	this.y = this.y / length;
}

Vector2.prototype.copy = function(otherVector)
{
	var temp = new Vector2();
	temp.x = this.x;
	temp.y = this.y;
	return temp;
}
