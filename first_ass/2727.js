
var isEmpty = function(obj) {
    for (const _ in obj) return false;
    return true;
};

obj = {"x": 5, "y": 42}

console.log(isEmpty(obj))