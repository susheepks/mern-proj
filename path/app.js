const path = require("path");
console.log(path.sep);

const filepath = path.join("os", "app.js");
console.log(filepath);

const base = path.basename(filepath);
console.log(base);

const complete = path.resolve(__dirname, "os", "app.js");
console.log(complete);
console.log(__dirname);
