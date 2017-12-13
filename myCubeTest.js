const assert = require('chai').assert;
const myCube = require('../../../../src/common/util/math/myCube');
const inpNum = 3;
const inpNumString = inpNum.toString();

describe('myCube', function() {
    describe('toCube', function() {
        //takes a number, asserts it, returns the square
        it('toCube(' + inpNum + ') should return number value of "' + inpNum + '"', function() {
            let result = myCube.toCube(inpNum);
            assert.equal(result, Math.pow(inpNum, 3));
        });
        //takes a string form of a number, asserts it, returns the square
        it('toCube("' + inpNumString + '") should return string value of "' + inpNumString + '"', function() {
            let result = myCube.toCube(inpNumString);
            assert.equal(result, Math.pow(inpNumString, 3));
        });
        //returns the original number
        it('toCube should return inpNum', function() {
            let result = myCube.toCube(inpNum);
            assert.typeOf(result, 'number', 'It returned a number');
        });
    });
})