module.exports.distance = function(pointA, pointB, callback){

	var sumOfSquares = Math.pow(pointA.x - pointB.x, 2) + Math.pow(pointA.y - pointB.y, 2);
	var distance = Math.sqrt(sumOfSquares);

	callback(null, distance);
};

module.exports.reachCalculation = function(reach, distance, callback){
	if(reach>distance){
		callback(null, Math.pow(reach-distance,2));
	}else{
		callback(null, 0);
	}
};

