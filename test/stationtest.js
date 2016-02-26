var beacons = require('../beacons');
var stationA = {x:0, y:0, reach:2};
var stationB = {x:0, y:0, reach:1};
var zeroZeroPoint = {x:0, y:0};

var sortingTestTemplate = function(test, list, deviceLocation, expected){
	test.expect(1);
	beacons.bestPoint(list,deviceLocation, function(error, station){
		test.equals(expected, station, "got "+JSON.stringify(station));
		test.done();
	});
}

exports.findNothingInReach = function (test) {
	sortingTestTemplate(test, [stationA], {x:3, y: 3}, undefined);
}

exports.findOneStationInReach = function (test) {
	sortingTestTemplate(test, [stationA], zeroZeroPoint, stationA);
}

exports.findFirstStationInReach = function (test) {
	sortingTestTemplate(test, [stationA, stationB], zeroZeroPoint, stationA);
}

exports.findLastStationInReach = function (test) {
	sortingTestTemplate(test, [stationB, stationA], zeroZeroPoint, stationA);
}
