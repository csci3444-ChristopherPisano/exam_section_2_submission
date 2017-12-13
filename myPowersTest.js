const assert = require('chai').assert;
const myPower = require('../../../../src/common/util/math/myPower');

const number1 = 3;
const num1String = number1.toString();

describe("myPowersTest", function() {
    describe("toSquare", function() {
        it('returns a square', function() {
            let result = myPower.toSquare(number1);
            assert.equal(result, number1 * number1);
        });
        it('takes a string, returns a square', function() {
            let result = myPower.toSquare(num1String);
            assert.equal(result, number1 * number1);
        });
        it('returns a number', function() {
            let result = myPower.toSquare(number1);
            assert.typeOf(result, 'number', 'it returned a number');
        });
    });
    describe("toCube", function() {
        it('returns a Cube', function() {
            let result = myPower.toCube(number1);
            assert.equal(result, number1 * number1 * number1);
        });
        it('takes a string, returns a Cube', function() {
            let result = myPower.toCube(num1String);
            assert.equal(result, number1 * number1 * number1);
        });
        it('returns a number', function() {
            let result = myPower.toCube(number1);
            assert.typeOf(result, 'number', 'it returned a number');
        });
    });
});