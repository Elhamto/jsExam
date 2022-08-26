function gcd(num1,num2){ 
    let [min, max] = num1 > num2 ? [num2, num1]:[num1 , num2]
    
    let= temp= min;
    while (temp>0) {
        temp =max % min
        max = min
        min = temp
    }
    return max
}   
function lcm(num1, num2) {
    return (num1 * num2) / gcd(num1, num2);   
}

let multi = 1;
for (let i = 1; i <= 20; i++) {
    multi = lcm(multi, i)    
}
console.log (multi);