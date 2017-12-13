module.exports = {

    toSquare(inpNumber) {

        if (typeof inpNumber === "number") {
            return Math.pow(inpNumber, 2);
        } else if (typeof inpNumber === "string") {
            inpNumber = parseInt(inpNumber);
            return Math.pow(inpNumber, 2);
        }
    }
}