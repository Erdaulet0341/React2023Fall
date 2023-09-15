var createCounter = function(n) {
    return function() {
        return n++
    }
}

let a = createCounter(7)
console.log(a())
console.log(a())
console.log(a())