var fs = require('fs');
var beacons = require('./beacons');
var worklist = JSON.parse(fs.readFileSync('input.json'));

worklist.deviceList.forEach(function(device){
	beacons.bestPoint( worklist.stationList, device, function(error, bestStation){
		if( bestStation ){
			console.log('Best station for point ' +JSON.stringify(device)+ ' -> station '+JSON.stringify(bestStation));
			// sorry, didn't bother with the string formatting
		}else{
			console.log('Found nada for '+JSON.stringify(device));
		}
	});
});