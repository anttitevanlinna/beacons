exports.bestPoint = function(linkStations, deviceLocation, callback){

	var geometry = require('./geometry');
	var bestStation = undefined;
	var bestPower = 0;
	linkStations.forEach( function(station){
		geometry.distance(deviceLocation, station, function(error, distance){
			geometry.powerCalculation(station.reach, distance, function(error, power){
				if( power > 0 && power > bestPower){
					bestStation = station;
					bestStation.power = bestPower = power;
				}
			});
		});
	});

	callback(null, bestStation);
}