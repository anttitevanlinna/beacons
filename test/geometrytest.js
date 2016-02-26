var geometry = require('../geometry');
var zeroZeroPoint = {x:0, y:0};
var oneOnePoint = {x:1, y:1};

var distanceTestTemplate = function(test, pointA, pointB, expected){
	test.expect(1);
	geometry.distance(pointA, pointB, function(error, distance){
		test.equals(expected, distance, "got "+distance);
		test.done();
	});
};

exports.distanceOneSquareRoot = function (test) {
	distanceTestTemplate(test, zeroZeroPoint, oneOnePoint, Math.sqrt(2));
}

exports.distanceOneSquareRootInverse = function (test) {
	distanceTestTemplate(test, oneOnePoint, zeroZeroPoint, Math.sqrt(2));
}

exports.distanceFiveSquareRoot = function (test) {
	// just to see that the math scales upwards from one
	distanceTestTemplate(test, oneOnePoint, {x:2, y:3}, Math.sqrt(5));
}

exports.distanceZeroSquareRoot = function (test) {
	distanceTestTemplate(test, zeroZeroPoint , zeroZeroPoint, 0);
}

var powerTestTemplate = function(test, reach, distance, expected){
	test.expect(1);
	geometry.reachCalculation(reach,distance, function(error, power){
		test.equals(expected, power, "got "+power);
		test.done();
	});
}

exports.expectingOnePower = function (test){
	powerTestTemplate(test, 2, 1, 1); 
}

exports.expectingFourPower = function (test){
	powerTestTemplate(test, 3, 1, 4); 
}

exports.reachSameAsDistance = function (test){
	powerTestTemplate(test, 3, 3, 0); 
}
exports.reachSmallerThanDistance = function (test){
	powerTestTemplate(test, 3, 4, 0); 
}