// var _getAllFilesFromFolder = function (dir) {
//   var filesystem = require("fs");
//   var results = [];

//   filesystem.readdirSync(dir).forEach(function (file) {
//     file = dir + "/" + file;
//     var stat = filesystem.statSync(file);

//     if (stat && stat.isDirectory()) {
//       results = results.concat(_getAllFilesFromFolder(file));
//     } else results.push(file);
//   });

//   return results;
// };

// const files = _getAllFilesFromFolder(__dirname + "/paragraphs");
// console.log(files);
