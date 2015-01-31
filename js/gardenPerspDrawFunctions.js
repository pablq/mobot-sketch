module.exports = function (image) {
     
    var = TREE_C = "#663300",
          BUSH_C = "#669900",
          ROCK_C = "#666699",
          PERSON_C = "#66ffff",
          BLACK_C = "#000000";

    var drawTree = function (view_range, object_size, distance) {

        var base_size = 5,
            origin = {
                x: view_range,
                y: distance
            },
            size = base_size * object_size,
            step = Math.floor(size / 12); 

        var pTop = [ origin.x, origin.y + size ],
            pBtmLft = [ origin.x - step, origin.y ],
            pBtmRgt = [ origin.x + step, origin.y ],
            pTrkTreLft = [ origin.x - step, origin.y + (4 * step) ],
            pTrkTreRgt = [ origin.x + step, origin.y + (4 * step) ],
            pLft = [ origin.x - (5 * step), origin.y + (4 * step) ],
            pRgt = [ origin.x + (5 * step), origin.y + (4 * step) ];

        return image.stroke(BLACK_C)
                    .fill(ROCK_C)
                    .drawPolygon(pTop, pLft, pTrkTreLft, pBtmLft, pBtmRgt, pTrkTreRgt, pRgt);
    }
        
    var drawRock = function (view_range, object_size, distance) {

        var base_size = 1,
            origin = {
                x: view_range,
                y: distance
            },
            size = base_size * object_size,
            step = Math.floor(size / 4);
        


    }

    var drawBush = function (view_range, object_size, distance) {

        var base_size = 3;

    }

    var drawPerson = function (view_range, object_size, distance) {

        var base_size = 2;

    }

    return {
        tree: drawTree,
        rock: drawRock,
        bush: drawBush,
        person: drawPerson
    }
}
