function anagram(s,str) {
    s=s.toLowerCase().split("")
    str=str.toLowerCase().split("")
    if ((s.length===str.length)) {
        if (s.sort().join("")===str.sort().join("")) {
            return "isAnagram"
        }
    }
    return "isNot"
}
const arr=[1,2]
const s1="node"
const s2="deno"
const s3="meno"
const s4="no"
console.log(anagram(s1,s2));