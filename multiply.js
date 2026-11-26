function multiply(a) {
    return function(b) {
        if (arguments.length === 0) {
            return a;
        }

        const result = a * b;

        return function(c) {
            if (arguments.length === 0) {
                return result;
            }

            return result * c;
        };
    };
}

module.exports = multiply;
