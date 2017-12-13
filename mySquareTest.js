const assert = require('chai').assert;
const mySquare = require('../../../../src/common/util/math/mySquare');
const inpNum = 2;
const inpNumString = inpNum.toString();

describe('MySquare', function() {
    describe('toSquare', function() {

        it('toSquare(' + inpNum + ') should return number value of "' + inpNum + '"', function() {
            let result = mySquare.toSquare(inpNum);
            assert.equal(result, inpNum * inpNum);
        });

        it('toSquare("' + inpNumString + '") should return string value of "' + inpNumString + '"', function() {
            let result = mySquare.toSquare(inpNumString);
            assert.equal(result, inpNum * inpNum);
        });

        it('toSquare should return a Number', function() {
            let result = mySquare.toSquare(inpNum);
            assert.typeOf(result, 'number', 'It returned a number');
        });
    });
})