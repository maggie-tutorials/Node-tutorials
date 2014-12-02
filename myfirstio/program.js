var fs = require('fs');
var filename = process.argv[2];

file = fs.readFile(filename, function(err, data){
	contents = data.toString();
	console.log(contents.split('\n').length - 1);
	
});

