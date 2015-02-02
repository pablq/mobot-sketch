(function(){

    var OBJ_INFILE = process.argv[2],
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

            var MAX_DIST = 100,
                TREE = "y",
                BUSH = "o",
                ROCK = "x",
                PERSON = "p",
                SKY_C = "#ccffff",
                GRASS_FAR_C = "#ccffcc",
                GRASS_MID_C = "#ccff99",
                GRASS_CLOSE_C = "#a3cc7a";

            var TOTAL_HEIGHT = 600,
                HEIGHT = 500,
                WIDTH = 1000;

            objects = objects.sort(function (a, b) {
                if (a["distance"] > b["distance"])
                    return -1;
                if (a["distance"] < b["distance"])
                    return 1;
                return 0;
            });
            
            horizon = horizon.sort(function (a, b) {
                if (a["average_dist"] > b["average_dist"])
                    return -1;
                if (a["average_dist"] < b["average_dist"])
                    return 1;
                return 0;
            });
            
            var drawing = gm(WIDTH, TOTAL_HEIGHT, SKY_C); 

            var bottom_left = [ 0, TOTAL_HEIGHT ],
                bottom_right = [ WIDTH, TOTAL_HEIGHT ];

            (function () {
                
                for (var i = 0, len = horizon.length; i < len; i += 1) {
                        
                    var left_val = TOTAL_HEIGHT - Math.floor(HEIGHT * (horizon[i].value_at_0 / MAX_DIST)),
                        right_val = TOTAL_HEIGHT - Math.floor(HEIGHT * (horizon[i].value_at_360 / MAX_DIST)),
                        left = [ 0, left_val ],
                        right = [ WIDTH, right_val ],
                        color = (i < 1) ? GRASS_FAR_C : (i === 1) ? GRASS_MID_C : GRASS_CLOSE_C;

                    drawing.stroke(color)
                           .fill(color)
                           .drawPolygon(bottom_left, left, right, bottom_right);
                }

            })();

            var draw = require("./gardenPerspDrawFunctions.js")(drawing);

            (function () {

                for (var i = 0, len = objects.length; i < len; i += 1) {

                    (function (object) {

                        switch (object.type) {
                            case TREE:
                                drawing = draw.tree(object.view_range, object.object_size, object.distance);
                                break;
                            case BUSH:
                                drawing = draw.bush(object.view_range, object.object_size, object.distance);
                                break;
                            case ROCK:
                                drawing = draw.rock(object.view_range, object.object_size, object.distance);
                                break;
                            case PERSON:
                                drawing = draw.person(object.view_range, object.object_size, object.distance);
                        }
                        
                    })(objects[i]);
                }

            })();
            drawing.write("../output/mobot-japanese-garden-persp.png", function (error) {

                if (error) {
                    console.log("FUCKING DRAW ERROR", error);
                    process.exit();
                } else {
                    console.log("HOLY SHIT IT WORKED");
                }
                
            });
        }
    } 
)();
