const MathBasic = {
    add: function add(...args) {
        if (args.length < 2 || args.length > 2) {
            throw new Error('fungsi add hanya menerima dua parameter');
        }
        const [a, b] = args;
 
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new Error('fungsi hanya menerima parameter number');
        }

        return a + b;
    },
    subtract: function subtract(...args) {
        if (args.length < 2 || args.length > 2) {
            throw new Error('fungsi add hanya menerima dua parameter');
        }
        const [a, b] = args;
 
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new Error('fungsi hanya menerima parameter number');
        }

        return a - b;
    },
    multiply: function multiply(...args) {
        if (args.length < 2 || args.length > 2) {
            throw new Error('fungsi add hanya menerima dua parameter');
        }
        const [a, b] = args;
 
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new Error('fungsi hanya menerima parameter number');
        }

        return a * b;
    },
    divide: function divide(...args) {
        if (args.length < 2 || args.length > 2) {
            throw new Error('fungsi add hanya menerima dua parameter');
        }
        const [a, b] = args;
 
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new Error('fungsi hanya menerima parameter number');
        }

        return a / b;
   
    },
};
   
module.exports = MathBasic;