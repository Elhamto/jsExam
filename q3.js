const set = []
function product_sum(k) {
    if (k<2) 
       throw "number must be bigger than 2"
    const arr = new Array(k);
    // arr=[2,4,1,1]
    const sum = arr.reduce(
        (previousValue, currentValue) => previousValue + currentValue, 0);
    const pro = arr.reduce(
        (previousValue, currentValue) => previousValue * currentValue, 1);    
    if (sum === pro) {
        set.push(pro)
    }    
    return [...new Set(set)]

}

console.log(product_sum(6));