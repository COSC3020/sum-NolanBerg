const jsc = require('jsverify');
const { sum } = require('./code.js'); 

const testSum = jsc.forall("array nat", function (arr) {
    return sum(arr) === arr.reduce((a, b) => a + b, 0);
});

jsc.assert(testSum);
