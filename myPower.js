var myCube = require('./myCube');
var mySquare = require('./mySquare');

module.exports = {
    toSquare(inpNumber) {
        return mySquare.toSquare(inpNumber);
    },

    toCube(inpNumber) {
        return myCube.toCube(inpNumber);
    }
}