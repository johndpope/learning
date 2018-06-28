const cv = require('opencv');
cv.readImage('./img/myImage.jpg', (err, im) => {
	let contours = im.findContours();
	 
	// Count of contours in the Contours object 
	contours.size();
	 
	// Count of corners(verticies) of contour `index` 
	contours.cornerCount(index);
	 
	// Access vertex data of contours 
	for(var c = 0; c < contours.size(); ++c) {
	  console.log("Contour " + c);
	  for(var i = 0; i < contours.cornerCount(c); ++i) {
	    var point = contours.point(c, i);
	    console.log("(" + point.x + "," + point.y + ")");
	  }
	}
	 
	// Computations of contour `index` 
	contours.area(index);
	contours.arcLength(index, isClosed);
	contours.boundingRect(index);
	contours.minAreaRect(index);
	contours.isConvex(index);
	contours.fitEllipse(index);
	 
	// Destructively alter contour `index` 
	contours.approxPolyDP(index, epsilon, isClosed);
	contours.convexHull(index, clockwise);
});