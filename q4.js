const n=4
// const m =5
// let cp = new Map([[10,4],[15,10]]);
const m =10
let cp = [[8,1],[12,3],[17,4],[100,10]];

cp=[...cp].sort((k,v)=>{return k[0]/k[1]-v[0]/v[1]})

let d=1
while(d){
    let P=0
    for (let [k ,v] of cp) {
        P += d*v - k
        if (P >= m) {
            console.log(d);
            // break
            return
        }
    }
    d++
}