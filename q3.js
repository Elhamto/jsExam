const isPrime = (num) =>{
    for(let i=2; i<= Math.sqrt(num); i++)
        if(num%i === 0)
            return false
    return true;
} 
function maghsumha(num){
    const result = []
    for(let i=2; i<= num/2; i++)
        num%i ===0 && result.push(i)
    return result;
}
// console.log(maghsumha(2));
function product_sum(k) {
    const set = new Array();
    let lenSet = 0
    if (k<2) 
       throw "number must be bigger than 2"
    // arr=[2,4,1,1] 
    let digit = 2
    let number = 1
    while (digit <= k) {
        console.log("while1", digit);
        const arr = new Array(digit).fill(1);
        let count = 1
        while (count< digit) {
            if (!isPrime(number)) {
                console.log("while2 if1", number);
                const maghsumhaFunc =maghsumha(number)
                for (let i = 0; i < maghsumhaFunc.length; i++) {  
                    let maghsum = maghsumhaFunc.pop()  
                    if (set.includes(number)) {
                        maghsum =maghsumha(maghsum).pop()
                        count++
                        arr.shift()
                        arr.push(maghsum)
                    }
                    count++
                    arr.shift()
                    arr.push(maghsum)
                    console.log(maghsum, count);
                    let maghsumAlaih = number/maghsum
                    arr.shift()
                    arr.push(maghsumAlaih)
                    const sum = arr.reduce(
                        (previousValue, currentValue) => previousValue + currentValue, 0);      //sum elements of array
                    const multiply = arr.reduce(
                        (previousValue, currentValue) => previousValue * currentValue, 1);    //multiply elements of array
                    if (sum === multiply) {
                        set.push(number)
                        console.log("if2",set);
                        break
                    }else{
                        arr.pop()
                        arr.pop()
                        arr.push(1)
                        arr.push(1)
                    }
                    console.log(arr);                    
                }
            }
            // console.log("lenSet: ",lenSet," set.len: ",set.length,"-1:", set[set.length-1], "num: ",number);
            if (lenSet ==set.length-1 && set[set.length-1]==number) {
                number--
                lenSet =set.length
                break
            }else{
            number++}
        }
        console.log("end W2",arr, number);
        digit++
    }
    console.log(set);
    const result = [...new Set(set)].reduce(
        (previousValue, currentValue) => previousValue + currentValue, 0);
    return result
}
// product_sum(2)
console.log(product_sum(5));
