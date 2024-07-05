const _ = require("lodash");

const items = [1, [2, [3, [4, [5]]]]];

const nwItems = _.flattenDeep(items);
console.log(nwItems);
