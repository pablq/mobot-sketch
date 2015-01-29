(function(){
  
    var fs = require("fs"),
        INFILE = process.argv[2];

    if (!INFILE) { 
        console.error("Format: node gardenMapAscii.js <FILENAME>");
        process.exit();

    } else {

        var data = require("./" + INFILE);

        if (!data) {

            console.error("Bad input file");
            process.exit();

        } else {

            var MIN_X = 0,
                MAX_X = 100,
                MIN_Y = 0,
                MAX_Y = 60,
                MIN_Z = 0,
                MAX_Z = 20,
                IMAGE = [],
                OUTPUT = "",
                OUTFILE = INFILE.split("/").pop().split(".")[0] + ".txt";
            
            (function () {
                for (var z = MIN_Z; z <= MAX_Z; z += 1) { 

                    IMAGE.push([]);

                    for (var x = MIN_X; x <= MAX_X; x += 1) {

                        IMAGE[z].push([]);

                        for (var y = MIN_Y; y <= MAX_Y; y += 1) {

                            IMAGE[z][x].push(" ");

                        };
                    };
                };
            })();

            (function () {
                for (var i = 0, len = data.length; i < len; i += 1) {
                    
                    var coordinate = data[i];

                    IMAGE[coordinate.z][coordinate.x][coordinate.y] = coordinate.type;

                };
            })();

            (function () {

                OUTPUT += "*** BEGIN IMAGE ***\r\n\r\n";

                for (var i = 0, iLen = IMAGE.length; i < iLen; i += 1) {
                    
                    OUTPUT += "\r\n*** BEGIN SHEET (z = " + i + ") ***\r\n\r\n";

                    for (var j = 0, jLen = IMAGE[i].length; j < jLen; j += 1) {
                        
                        for (var k = 0, kLen = IMAGE[i][j].length; k < kLen; k += 1) {

                            OUTPUT += IMAGE[i][j][k];                           

                        }

                        OUTPUT += "\r\n";
                    }

                    OUTPUT += "\r\n*** END SHEET ***\r\n\r\n";
                }
                
                OUTPUT += "*** END IMAGE ***\r\n";

            })();

            fs.writeFile("../output/" + OUTFILE, OUTPUT, function (error) {

                error ? console.log(error) : console.log("Success!");

            });
        }
    }

})(this);
