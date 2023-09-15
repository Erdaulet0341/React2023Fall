function argumentsLength() {
    return arguments.length
}

const argsArr = [5]
const result = argumentsLength(...argsArr)

console.log(result)
