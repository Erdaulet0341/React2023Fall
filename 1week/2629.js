function composeFunctions(functions) {
    return function(x) {
        return functions.reduceRight((result, fn) => fn(result), x)
    }
}

const functions = [x => x + 1, x => x * x, x => 2 * x]
const x = 4

const composedFunction = composeFunctions(functions)
const result = composedFunction(x)

console.log(result)
