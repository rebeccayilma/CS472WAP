describe("Math Calculations", function () {
    it("add an array of numbers", function () {
        assert.equal(sum([1, 2, 3, 4]), 10);
    });

    it("multiply an array of numbers", function () {
        assert.equal(multiply([1, 2, 3, 4]), 24);
    });
});

describe("String manipulation", function () {

    it("should return the resverse string", function () {
        assert.equal(reverse('eer'), 'ree');
    });

    it("should return an array of string which length are more that the given number", function () {
        const resp = filterLongWords(['abebe', 'kebede', 'chi'], 6)
        assert.deepEqual(resp, ['kebede']);
    });
});