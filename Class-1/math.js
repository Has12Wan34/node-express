function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function test(a, b) {
    console.log(a, b)
}

const text = 'Hello word';

module.exports.add = add;
module.exports.subtract = subtract;
module.exports.test = test;
module.exports.text = text;