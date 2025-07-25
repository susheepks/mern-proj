const { readFile, writeFile } = require("fs");
//call back function is the fun((ction which is passsed arguments in other function
console.log("1");
readFile("./simple/first.txt", "utf-8", (err, res) => {
  if (err) {
    return;
  }
  console.log("2");
  const read = res;
  console.log(read);
});

writeFile("./simple/first.txt", "hello", (err, res) => {
  if (err) {
    return;
  }
  console.log("3");
  console.log(res);
});
console.log("4");
