function sum(arr) {
    return arr.reduce((n, a) => n + a, 0);
}

function multiply(arr) {
    return arr.reduce((n, a) => n * a, 1);
}

function reverse(str) {
    return str.split('').reduce((n, a) => a + '' + n, '');
}

function filterLongWords(arr, num) {
    return arr.filter(w => w.length >= num);
}
