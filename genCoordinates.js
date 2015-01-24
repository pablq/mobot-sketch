var fs = require("fs");

var OPTIONS = {
  width : process.argv[2] || 150,
  height : process.argv[3] || 75,
  density : process.argv[4] || 5,
  filename : process.argv[5] || "coordinates"
}

var coordinates = [],
    oneTenthX = OPTIONS.width / 10,
    oneTenthY = OPTIONS.height / 10;

var totalCoordinates = Math.floor(oneTenthX * oneTenthY * OPTIONS.density);

for (var i = 0; i < totalCoordinates; i += 1) {
  coordinates.push(genRandomCoordinate(OPTIONS.width, OPTIONS.height));
  if (i === totalCoordinates - 1) {
    writeJSONFile({ dimensions: { width:OPTIONS.width, height:OPTIONS.height }, coordinates:coordinates }, OPTIONS.filename);
  }
}

function genRandomX (width) {
  return Math.floor(Math.random() * width) % width;
}

function genRandomY (height) {
  return Math.floor(Math.random() * height) % height;
}

function genRandomCoordinate (width, height) {
  return {
    x : genRandomX(width),
    y : genRandomY(height)
  };
}

function writeJSONFile (data, filename) {
  if (typeof data !== "String") {
    data = JSON.stringify(data);
  }
  fs.writeFile(filename + ".json", data, function(error) {
    (error) ? console.log(error) : console.log("SUCCESS!");
  });
}
