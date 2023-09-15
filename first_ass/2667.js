var createHelloWorld = function() {
    return function() {
        return ("Hello World")
    }
};

let hello = createHelloWorld()

console.log(hello())