module.exports = {
    toCube(inpNumber) {

        if (typeof inpNumber === "number") {
            return Math.pow(inpNumber, 3);
        } else if (typeof inpNumber === "string") {
            inpNumber = parseInt(inpNumber);
            return Math.pow(inpNumber, 3);
        }
    }
}