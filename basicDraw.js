var async = require('async');
var fs = require("fs");

var HEIGHT = 500;
var WIDTH = 500;
var BGCOLOR = "#ffffff";

var gm = require("gm");
var theImage = gm(HEIGHT, WIDTH, BGCOLOR);

var INFILE = process.argv[2];

var coordinates;
if (INFILE) {
  fs.readFile(INFILE, function (error, data) {
    coordinates = JSON.parse(data);
  });
} else {
  coordinates = [ { x:0, y:0 },
                  { x:0, y:HEIGHT/2 },
                  { x:WIDTH/2, y:0 },
                  { x:WIDTH, y:HEIGHT },
                  { x:WIDTH/2, y:HEIGHT },
                  { x:WIDTH, y:HEIGHT/2 },
                  { x:0, y:HEIGHT },
                  { x:WIDTH, y:0 } ];
}

async.each(coordinates, function(point, cb) {
  coordinates.forEach(function(otherPoint) {
    if ((point.x !== otherPoint.x) || (point.y !== otherPoint.y)) {
      theImage.stroke(getRandomColor())
              .fill(getRandomColor())
              .drawLine(point.x, point.y, otherPoint.x, otherPoint.y);
    }
  });
  cb(null);
}, function(error) {
  if (error) {
    console.log("FUCK ALL");
    process.exit();
  } else {
    theImage.write("lines.png", function(drawError) {
      if (drawError) {
        console.log("FUCKING DRAW ERROR", drawError);
        process.exit();
      } else {
        console.log("HOLY SHIT IT WORKED");
      }
    });
  }
});

function getRandomColor() {
  var letters = '0123456789ABCDEF'.split('');
  var color = '#';
  for (var i = 0; i < 6; i++ ) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
