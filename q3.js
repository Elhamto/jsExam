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
const set = []
function product_sum(k) {
    if (k<2) 
       throw "number must be bigger than 2"
    const arr = new Array(k).fill(1);
    // arr=[2,4,1,1] 
    let index = 2
    let number = 1
    while (index <= k) {
        console.log("while1");
        let count = 1
        while (count<= k) {
            if (!isPrime(number)) {
            console.log("while2", number);
            
                let maghsum = maghsumha(number).pop()
                count++
                // maghsum+(number/ maghsum)
                if(maghsum+(number/ maghsum)==k-count){
                    console.log(arr.pop().push(number));

                }else{
                    maghsumha(maghsum).pop()
                    count++
                    if(maghsum+(number/ maghsum)==k-count){
                        console.log(arr.pop().push(number));
                    }
                }
            }
            number++
        }
        
        index++
    }
console.log(arr, number);
    const sum = arr.reduce(
        (previousValue, currentValue) => previousValue + currentValue, 0);      //sum elements of array
    const multiply = arr.reduce(
        (previousValue, currentValue) => previousValue * currentValue, 1);    //multiply elements of array
    if (sum === multiply) {
        set.push(multiply)
    }    
    // return [...new Set(set)]
}
product_sum(2)
// console.log(product_sum(6));
