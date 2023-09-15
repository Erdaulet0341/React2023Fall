var filter = function(arr, fn) {
    let res=[]
    for(var i=0;i<arr.length;i++){
        if(fn(arr[i],i)){
            res.push(arr[i])
        }
    }
    return res
}

function gr10(n){
    return n>10
}

console.log(filter([10,20,30], gr10))