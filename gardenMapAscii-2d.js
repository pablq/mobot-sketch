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
                IMAGE = [],
                OUTPUT = "",
                OUTFILE = INFILE.split("/").pop().split(".")[0] + "-2d.txt";
            
            (function () {

                for (var y = MIN_Y; y <= MAX_Y; y += 1) {

                    IMAGE.push([]);

                    for (var x = MIN_X; x <= MAX_X; x += 1) {

                        IMAGE[y].push(" ");

                    };
                };

            })();

            (function () {
                
                for (var i = 0, len = data.length; i < len; i += 1) {
                    
                    var coordinate = data[i];

                    IMAGE[coordinate.y][coordinate.x] = coordinate.type;

                };

            })();

            (function () {

                OUTPUT += "*** BEGIN IMAGE ***\r\n\r\n";

                for (var i = 0, iLen = IMAGE.length; i < iLen; i += 1) {
                    
                    for (var j = 0, jLen = IMAGE[i].length; j < jLen; j += 1) {

                        OUTPUT += IMAGE[i][j];                           
                    }

                    OUTPUT += "\r\n";
                }
                
                OUTPUT += "\r\n*** END IMAGE ***\r\n";

            })();

            fs.writeFile("output/" + OUTFILE, OUTPUT, function (error) {

                error ? console.log(error) : console.log("Success!");
                process.exit();

            });
        }
    }

})(this);
