const isPrime = (num) =>{
    for(let i=2; i<= Math.sqrt(num); i++)
        if(num%i === 0)
            return false
    return true;
} 
// function maghsumha(num){
//     const result = []
//     for(let i=2; i<= num/2; i++)
//         num%i ===0 && result.push(i)
//     return result;
// }
// console.log(maghsumha(2));
function basicProductSum(number, digit) {
    const arr = new Array(digit).fill(1);
    arr.shift()
    arr.push(digit)
    arr.shift()
    arr.push(number/digit)

    const sum = arr.reduce(
        (previousValue, currentValue) => previousValue + currentValue, 0);      //sum elements of array
    const multiply = arr.reduce(
        (previousValue, currentValue) => previousValue * currentValue, 1);    //multiply elements of array
    if (sum === multiply) {
        return true
    }
    else
    return false
}
// console.log(product_sum(4, 2));
function sumSet(k) {
    const set = new Array();
    if (k<2) 
       throw "number must be bigger than 2"
    for (let digit = 2; digit <= k; digit++) {
        for (let number = 4; number<=100; number++) {
            // if (!isPrime(number)) {
                if (basicProductSum(number, digit)) {
                    set.push(number)
                }
            // }
        }
    }
    // const result = [...new Set(set)].reduce(
    //     (previousValue, currentValue) => previousValue + currentValue, 0);
    // return result
    return set
}
console.log(sumSet(12));
