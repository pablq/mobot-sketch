var fs = require("fs");

var INFILE = process.argv[2];

var imageData;
if (INFILE) {
  fs.readFile(INFILE, function (error, data) {

    imageData = JSON.parse(data);
    
    var WIDTH = imageData.dimensions.width,
        HEIGHT = imageData.dimensions.height,
        IMAGE = [];

    for (var i = 0; i < HEIGHT; i += 1) { 
      IMAGE.push([]);
      for (var j = 0; j < WIDTH; j += 1) {
        IMAGE[i].push(" ");
      };
    };

    imageData.coordinates.forEach(function (coordinate){
      IMAGE[coordinate.y][coordinate.x] = "X";
    });

    var OUTPUT = "";
    for (var i = IMAGE.length - 1; i >= 0; i -= 1) {
      for (var j = 0, w = IMAGE[i].length; j < w; j += 1) {
        OUTPUT += IMAGE[i][j];
      };
      OUTPUT += "\r\n";
    };

    fs.writeFile("image.txt", OUTPUT, function (error) {
      error ? console.log(error) : console.log("Success!");
    });
  });
} else {
  console.log("Please provide a JSON input with the following format:\r\n{ dimensions : { width : XXX, height: XXX }, coordinates : [ { x : XXX, y : XXX } ] }");
  process.exit();
}
