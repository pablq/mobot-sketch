# mobot-sketch

This repository contains three javascript programs.

The first, called gardenPerspDraw.js, outputs a .png image from data gathered in a sketch at the Missouri Botanical Gardens in Saint Louis, Missouri. The data is pre-prepared and the program is written to run with this particular data set.

To run this file, run the following command from the /js directory:

`node gardenPerspDraw.js ../data/mobot-persp-objects.json ../data/mobot-persp-horiz.json`

The next two files, called gardenMapAscii.js and gardenMapAscii-2d.js, output .txt ASCII art files. They too, take data gathered at the Missouri Botanical Gardens as input.

These are run by typing the following in the /js directory:

`node gardenMapAscii.js ../data/< mobot-map1.json || mobot-map2.json >` 

`node gardenMapAscii-2d.js ../data/< mobot-map1.json || mobot-map2.json >`

All output goes to the /output directory.

They were written for fun and practice. I enjoyed putting the draw functions in a seperate file. I'm sure there are many ways I could have written this better. I'd love any feedback anyone is willing to give.

\- Pablo
