module.exports = function (image) {
     
    var TREE_C = "#996633",
        BUSH_C = "#669900",
        ROCK_C = "#666699",
        PERSON_C = "#a30042",
        BLACK_C = "#000000";

    var TOTAL_HEIGHT = 600,
        HEIGHT = 500,
        WIDTH = 1000;

    var R_BNDRY = 360,
        MAX_DIST = 100,
        MAX_SIZE = 10;;

    var getOriginY = function (y_val) {
        return TOTAL_HEIGHT - Math.floor(HEIGHT * (y_val / MAX_DIST));
    }

    var getOriginX = function (x_val) {
        return Math.floor(WIDTH * (x_val / R_BNDRY));
    }

    var drawTree = function (view_range, object_size, distance) {
                        
        var base_size = 9,
            origin = {
                x: getOriginX(view_range),
                y: getOriginY(distance)
            },
            size = base_size * object_size * (MAX_DIST / distance),
            step = Math.floor(size / 12); 

        var pBtmTLft = [ origin.x - step, origin.y ],
            pBtmTRgt = [ origin.x, origin.y ],
            pTopTRgt = [ origin.x, origin.y - (5 * step) ],
            pRgtBchLT = [ origin.x + (5 * step), origin.y - (6 * step) ],
            pRgtBchLB = [ origin.x + step, origin.y - (6 * step) ],
            pRgtBchMT = [ origin.x + (5 * step), origin.y - (9 * step) ],
            pRgtBchMB = [ origin.x + step, origin.y - (7 * step) ],
            pRgtBchTT = [ origin.x + (2 * step), origin.y - (11 * step) ],
            pRgtBchTB = [ origin.x, origin.y - (6 * step) ],
            pLftBchTB = [ origin.x - step, origin.y - (8 * step) ],
            pLftBchTT = [ origin.x - (2 * step), origin.y - (12 * step) ],
            pLftBchMB = [ origin.x - (2 * step), origin.y - (8 * step) ],
            pLftBchMT = [ origin.x - (4 * step), origin.y - (10 * step) ],
            pLftBchLB = [ origin.x - step, origin.y - (4 * step) ],
            pLftBchLT = [ origin.x - (6 * step), origin.y - (7 * step) ],
            pTopTLft = [ origin.x - step, origin.y - (3 * step) ];

        return image.stroke(TREE_C)
                    .fill(TREE_C)
                    .drawPolygon(pBtmTLft, pBtmTRgt, pTopTRgt, pRgtBchLT, pRgtBchLB, pRgtBchMT, pRgtBchMB, pRgtBchTT, pRgtBchTB, pLftBchTB, pLftBchTT, pLftBchMB, pLftBchMT, pLftBchLB, pLftBchLT, pTopTLft);
    }
        
    var drawRock = function (view_range, object_size, distance) {

        var base_size = 3,
            origin = {
                x: getOriginX(view_range),
                y: getOriginY(distance)
            },
            size = base_size * object_size * (MAX_DIST / distance),
            step = Math.floor(size / 4);

        var pBtmLft = [ origin.x - (3 * step), origin.y - step ],
            pMidLft = [ origin.x - size, origin.y - (2 * step) ],
            pTopLft = [ origin.x - size, origin.y - size ],
            pTopMid = [ origin.x + step, origin.y - size ],
            pTopRgt = [ origin.x + (2 * step), origin.y - (3 * step) ],
            pMidRgt = [ origin.x + (3 * step), origin.y - (3 * step) ],
            pBtmRgt = [ origin.x + size, origin.y - (2 * step) ],
            pBtmMid = [ origin.x + (2 * step), origin.y]; 

        return image.stroke(ROCK_C)
                    .fill(ROCK_C)
                    .drawPolygon(pBtmLft, pMidLft, pTopLft, pTopMid, pTopRgt, pMidRgt, pBtmRgt, pBtmMid);
    }

    var drawBush = function (view_range, object_size, distance) {

        var base_size = 4,
            origin = {
                x: getOriginX(view_range),
                y: getOriginY(distance)
            },
            size = base_size * object_size * (MAX_DIST / distance),
            step = Math.floor(size / 7);

        var pBtmRgt = [ origin.x, origin.y ],
            pBtmRM = [ origin.x + (3 * step), origin.y - step ],
            pBtmRR = [ origin.x + (5 * step), origin.y - (3 * step) ],
            pTopRR = [ origin.x + (5 * step), origin.y - (5 * step) ],
            pTopRL = [ origin.x + (2 * step), origin.y - (7 * step) ],
            pTopLR = [ origin.x - (2 * step), origin.y - (7 * step) ],
            pTopLL = [ origin.x - (5 * step), origin.y - (5 * step) ],
            pBtmLL = [ origin.x - (6 * step), origin.y - (3 * step) ],
            pBtmLM = [ origin.x - (4 * step), origin.y - step ],
            pBtmLR = [ origin.x - step, origin.y - step ];

        return image.stroke(BUSH_C)
                    .fill(BUSH_C)
                    .drawPolygon(pBtmRgt, pBtmRM, pBtmRR, pTopRR, pTopRL, pTopLR, pTopLL, pBtmLL, pBtmLM, pBtmLR);
    }

    var drawPerson = function (view_range, object_size, distance) {

        var base_size = 5;
            origin = {
                x: getOriginX(view_range),
                y: getOriginY(distance)
            },
            size = base_size * object_size * (MAX_DIST / distance),
            step = Math.floor(size / 12);

        var pLftFtL = [ origin.x - (2 * step), origin.y ],
            pLftFtR = [ origin.x - step, origin.y ],
            pCtch = [ origin.x, origin.y - (3 * step) ],
            pRgtFtL = [ origin.x + (2 * step), origin.y ],
            pRgtFtR = [ origin.x + (3 * step), origin.y ],
            pRgtPit = [ origin.x + step, origin.y - (6 * step) ],
            pRgtArmL = [ origin.x + (3 * step), origin.y - (5 * step) ],
            pRgtArmR = [ origin.x + (4 * step), origin.y - (6 * step) ],
            pRgtNeck = [ origin.x + (2 * step), origin.y - (8 * step) ],
            pRgtHead = [ origin.x + (3 * step), origin.y - (10 * step) ],
            pTopHeadRgt = [ origin.x + (2 * step), origin.y - (12 * step) ],
            pTopHeadLft = [ origin.x, origin.y - (12 * step) ],
            pLftNeck = [ origin.x, origin.y - (9 * step) ],
            pLftArmL = [ origin.x - (3 * step), origin.y - (7 * step) ],
            pLftArmR = [ origin.x - (2 * step), origin.y - (6 * step) ],
            pLftPit = [ origin.x - step, origin.y - (7 * step) ];

        return image.stroke(PERSON_C)
                    .fill(PERSON_C)
                    .drawPolygon(pLftFtL, pLftFtR, pCtch, pRgtFtL, pRgtFtR, pRgtPit, pRgtArmL, pRgtArmR, pRgtNeck, pRgtHead, pTopHeadRgt, pTopHeadLft, pLftNeck, pLftArmL, pLftArmR, pLftPit);
    }

    return {
        tree: drawTree,
        rock: drawRock,
        bush: drawBush,
        person: drawPerson
    }
}
