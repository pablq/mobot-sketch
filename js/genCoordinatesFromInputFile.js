var fs = require("fs");

var INPUT = process.argv[2];

if (!INPUT) {
  console.log("PLEASE PROVIDE AN INPUTFILE OF ANY TYPE");
  process.exit();
}

var data;
fs.readFile(INPUT, function (error, contents) {
  if (error) {
    console.log("THERE WAS AN ERROR READING THE FILE. EXITING...");
    process.exit();
  } else {
    data = contents.toString();
    console.log(data); 
  }
});
