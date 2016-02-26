var beacons = require('../beacons');
var stationA = {x:0, y:0, reach:2};
var stationB = {x:0, y:0, reach:1};
var zeroZero = {x:0, y:0};

var referenceStationList = {
	one: {x:0, y:0, reach:2},
	two: {x:0, y:0, reach:2},
	three: {x:0, y:0, reach:2}
}

var sortingTestTemplate = function(test, list, deviceLocation, expected){
	test.expect(1);
	beacons.bestPoint(list,deviceLocation, function(error, station){
		test.equals(expected, station, "got "+JSON.stringify(station));
		test.done();
	});

}

exports.findNothingInReach = function (test) {
	sortingTestTemplate(test, [stationA], {"x":3, "y": 3}, undefined);
}

exports.findOneStationInReach = function (test) {
	sortingTestTemplate(test, [stationA], {"x":0, "y": 0}, stationA);
}

exports.findFirstStationInReach = function (test) {
	sortingTestTemplate(test, [stationA, stationB], zeroZero, stationA);
}

exports.findLastStationInReach = function (test) {
	sortingTestTemplate(test, [stationB, stationA], zeroZero, stationA);
}
