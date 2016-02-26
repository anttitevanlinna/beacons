exports.distance = function (test) {

	var geometry = require('../geometry');

	test.expect(1);
	geometry.distance({},{}, function(error, distance){
		test.equals(1, distance, "just pass");
		test.done();
	});
}