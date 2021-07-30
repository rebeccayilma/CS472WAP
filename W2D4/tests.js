describe("Filter", function () {
  it("removing banned words from string", function () {
    assert.equal(
      "This house is not nice!".filter("not"),
      "This house is nice!"
    );
  });
});

describe("BubbleSort Algorithm", function () {
  it(" BubbleSort algorithm on an Array", function () {
    expect([6, 4, 0, 3, -2, 1].bubbleSort()).to.eql([-2, 0, 1, 3, 4, 6]);
  });
});

describe("Teacher", function () {
  it("What Subject does the teacher teach", function () {
    let professor = new Teacher();
    professor.initialize("Michael Zijlstra", "30");

    assert.equal(
      professor.teach("WAP"),
      "Michael Zijlstra is now teaching WAP"
    );
  });
});
