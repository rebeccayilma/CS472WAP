String.prototype.filter = function (word) {
  return this.split(" ")
    .filter((el) => el != word)
    .join(" ");
};

function bubbleSortAlgorithm(arr) {
  var length = arr.length;
  for (var i = 0; i < length; i++) {
    for (var j = 1; j < length - i; j++) {
      if (arr[j - 1] > arr[j]) {
        var temp = arr[j - 1];
        arr[j - 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

Array.prototype.bubbleSort = function () {
  return bubbleSortAlgorithm(this);
};

var Person = function () {};

Person.prototype.initialize = function (name, age) {
  this.name = name;
  this.age = age;
};
Person.prototype.describe = function () {
  return this.name + ", " + this.age + " years old.";
};
var Student = function () {};

Student.prototype = new Person();

Student.prototype.learn = function (subject) {
  console.log(this.name + " just learned " + subject);
};

function Teacher() {}

Teacher.prototype = new Person();

Teacher.prototype.teach = function (subject) {
  return `${this.name} is now teaching ${subject}`;
};

