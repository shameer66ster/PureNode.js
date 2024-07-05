const { readFileSync, writeFileSync } = require("fs");

const firstPath = readFileSync("./content/first.txt", "utf8");
const secondPath = readFileSync("./content/second.txt", "utf8");

console.log(firstPath, secondPath);

writeFileSync(
  "./content/result-sync.txt",
  `Here is the result: ${firstPath},${secondPath}`
);
