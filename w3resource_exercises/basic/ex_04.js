// 4. Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.
//Surprise! We have to use Heroni's formula.
var calculateTriangleArea = () => {
	var a = 5;
	var b = 6;
	var c = 7;
	var s = (a + b + c)/2;
	var area = Math.sqrt(s*(s-a)*(s-b)*(s-c));
	return area;
}

calculateTriangleArea();