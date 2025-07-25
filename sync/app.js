//fs module (os,path,fs,http)module in nodejs
// const fs = require("fs");
// const read = fs.readFileSync;
// const write = fs.writeFileSync;
const { readFileSync, writeFileSync } = require("fs");
console.log("1");
const read = readFileSync("./simple/first.txt", "utf-8");
console.log("2");
writeFileSync("./simple/first.txt", " i change the", { flag: "a" });
console.log("3");
writeFileSync("./simple/second.txt", " i change the", { flag: "a" });
console.log(read);
