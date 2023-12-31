function solution(str1 ,str2){
    let answer ;
    let map1 = new Map();
    let map2 = new Map(); 
    for ( let x of str1 ){
        if (!map1.has(x)) map1.set(x,1)
        else map1.set(x, (map1.get(x)+1))
    }
    for ( let x of str2 ){
        if (!map2.has(x)) map2.set(x,1);
        else map2.set(x, (map2.get(x)+1));
    }
    answer = 'YES';
    for ( let [key,val] of map1){
        if ( map1.get(key) !== map2.get(key)) answer = 'NO';
    }
    return answer; 
}
function solution_teach(str1,str2){
    let answer='YES';
    let sH = new Map();
    for (let x of str1){
        if ( sH.has(x)) sH.set(x,sH.get(x)+1)
        else sH.set(x,1);
    }
    for (let x of str2){
        if(!sH.has(x) || sH.get(x)===0) return "NO";
        sH.set(x,sH.get(x)-1);
    }

    return answer ;
}
let str1 = 'AbaAeCe';
let str2 = 'baeeACA';
let str3 = 'abaCC';
let str4 = 'Caaab';

console.log( solution(str1,str2));
console.log( solution(str3,str4));
console.log( solution_teach(str1,str2));
console.log( solution_teach(str3,str4));
