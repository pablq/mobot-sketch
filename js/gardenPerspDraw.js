(function(){

    var fs = require("fs"),
        OBJ_INFILE = process.argv[2],
        HOR_INFILE = process.argv[3];


    if (!OBJ_INFILE || !HOR_INFILE) { 

        console.error("Format: node gardenPerspDraw.js <PATH TO OBJECT FILE> <PATH TO HORIZON FILE>");
        process.exit();

    } else {

        var objects  = require("./" + OBJ_INFILE),
            horizon = require("./" + HOR_INFILE);

        if (!objects || !horizon) {

            console.error("Bad input file");
            process.exit();

        } else {

            var gm = require("gm");

            var L_BNDRY = 0,
                R_BNDRY = 360,
                MIN_DIST = 0,
                MAX_DIST = 100,
                MIN_SIZE = 0,
                MAX_SIZE = 10,
                TREE = "y",
                BUSH = "o",
                ROCK = "x",
                WATER = "w",
                PERSON = "p",
                SKY_C = "#00ffff",
                GRASS_FAR_C = "#ccff99",
                GRASS_CLOSE_C = "#a3cc7a";

            var HEIGHT = 500,
                WIDTH = 1000;

            objects = objects.sort(function (a, b) {
                if (a["view_range"] > b["view_range"])
                    return 1;
                if (a["view_range"] < b["view_range"])
                    return -1;
                return 0;
            });
            
            horizon = horizon.sort(function (a, b) {
                if (a["average_dist"] > b["average_dist"])
                    return -1;
                if (a["average_dist"] < b["average_dist"])
                    return 1;
                return 0;
            });
            
            var drawing = gm(WIDTH, HEIGHT, SKY_C); 

            (function(){

                var bottom_left = [ 0, 0 ],
                    bottom_right = [ WIDTH, 0 ];

                for (var i = 0, len = horizon.length; i < len; i += 1) {
                        
                    console.log("value_at_0: " + horizon[i].value_at_0 + ", value_at_360: " + horizon[i].value_at_360 + ";");        
                    console.log("left: " + left + ", right: " + right + ";");        
                    
                    var left_val = Math.floor(HEIGHT * (horizon[i].value_at_0 / MAX_DIST)),
                        right_val = Math.floor(HEIGHT * (horizon[i].value_at_360 / MAX_DIST)),
                        left = [ 0, left_val ],
                        right = [ WIDTH, right_val ],
                        color = i ? GRASS_FAR_C : GRASS_CLOSE_C;

                    drawing.stroke(color)
                           .fill(color)
                           .drawPolygon(bottom_left, left, right, bottom_right);
                }

            })(); 

            drawing.write("garden.jpg", function(drawError) {
                if (drawError) {
                    console.log("FUCKING DRAW ERROR", drawError);
                    process.exit();
                } else {
                    console.log("HOLY SHIT IT WORKED");
                }
            });
        }
    } 
})();
