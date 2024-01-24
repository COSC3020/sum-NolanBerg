
const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js') + '');

const testSum =
    jsc.forall("array nat", function (arr) {
        const expectedSum = arr.reduce((a, b) => a + b, 0);
        const actualSum = sum(arr);

        if (actualSum !== expectedSum) {
            console.log('Failing case:', arr);
            console.log('Expected sum:', expectedSum);
            console.log('Actual sum:', actualSum);
        }

        return actualSum === expectedSum;
    });

jsc.assert(testSum);
