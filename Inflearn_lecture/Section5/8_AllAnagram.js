// S문자열에서 T문자열과 아나그램이 되는 S의 부분문자열의 개수를 구하는 프로그램을 작성하
// 세요. 아나그램 판별시 대소문자가 구분됩니다. 부분문자열은 연속된 문자열이어야 합니다.

function solution(aH,bH){
    let answer = 0  ; 
    let lt = 0 ; 
    let rt = bH.length - 1 ; 
    // console.log(lt , rt);
    let hashMap = new Map();
    let hashMap2 = new Map();
    for (let x of bH){
        if( hashMap2.has(x)) hashMap2.set(x,hashMap2.get(x)+1);
        else hashMap2.set(x,1);
    }
    // charAt() 를 쓰는 것이 아니라 ,str[] 사용하면 더 괜찮을 듯
    for ( let x = 0; x<= rt; x++){
        if( hashMap.has(aH.charAt(x))) hashMap.set(aH.charAt(x),hashMap.get(x)+1);
        else hashMap.set(aH.charAt(x),1);    
    }
    // console.log(hashMap);
    // console.log(hashMap2);
    
    // lt 를 for 문을 돌리는 것이 아니라, rt 를 돌려도 될 듯 하다. 
    for ( lt = 0 ; lt < aH.length - bH.length -1 ; lt ++ ){
        if ( rt !== bH.length-1 ) {
            const present = aH.charAt(rt);
            // console.log(present);
            if ( hashMap.has(present) ) hashMap.set(present,hashMap.get(present)+1);
            else hashMap.set(present,1);
        }
        // console.log(hashMap);
        if ( compareMaps(hashMap, hashMap2) ) {
            answer ++ ;
        }
        if ( hashMap.get(aH.charAt(lt)) === 1 ) hashMap.delete(aH.charAt(lt)) ;
        else hashMap.set(aH.charAt(lt), hashMap.get(aH.charAt(lt)) -1 );
        
        rt ++ ;
    }


    return answer;
}
// 파라미터는 맵 2개가 들어가고, return 값은 boolean 이다.
// 첫번째는 size 를 비교하고 , 두번째는 값들을 비교한다.
function compareMaps(map1, map2){
    if ( map1.size !== map2.size ) return false ;
    // for ( let [key,val] of map2 ) => 이를 사용하면 좀 더 좋을 듯 하다.
    for ( let x of map2 ){// 여기서는 value를 가져오는 듯 하다.
        if ( map2.get(x) !== map1.get(x) ) return false; 
    } 
    return true ;
}

let a="bacaAacba";
let b="abc";
console.log(solution(a, b));