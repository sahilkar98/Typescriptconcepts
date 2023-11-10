function greetmsg(a) {
    var b = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        b[_i - 1] = arguments[_i];
    }
    return a + " " + b;
}
console.log(greetmsg("ola", "ciao"));
console.log(greetmsg("Hi"));
console.log(greetmsg("hi", "hello", "ciao"));
