function display() {
    console.log("Welocome to typescript");
}
display();
//anonymous function
var greeting = function () {
    console.log("welcome to anonymous function");
};
greeting();
function greet(name, opt) {
    return name + " is " + opt;
}
console.log(greet("he", "good"));
console.log(greet("blank "));
var ro = function (x, y) {
    return x + y;
};
console.log(ro(11, 19));
var Print = function () { return console.log("parameterless arrow function"); };
Print();
