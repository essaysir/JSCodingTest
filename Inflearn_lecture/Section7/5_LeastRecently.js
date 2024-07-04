function solution(n,arr){
    let answer ;
    // n 은 캐시의 크기 
    const cache = Array.from({ length: n }, () => 0);
    // Array.form 을 통한 배열 만드는 법 숙지하기 
    // console.log(cache);

    for ( let x of arr){
    // 생각해야할 조건
    // 1. cache miss => 이미 다섯개가 차있으면 , 하나를 밀어낸다.
    // 2. 기존에 캐시안에 존재하는 경우 , 맨 앞으로 온다. 
        if ( cache.includes(x) ) {
            cache.splice(cache.indexOf(x) , 1 );
            cache.unshift(x);
        }
        if ( !cache.includes(x) ){
            cache.pop();
            cache.unshift(x);
        }
        // console.log(cache);
    }
    answer = cache ;
    return answer ;
}
// 선택 정렬을 이용한 풀이법
function answer(n,arr){
    let answer;
    const cache = Array.from({length:n} , ()=> 0);
    // console.log(cache);
    arr.forEach(ele => {
        let index = n-1 ;
        if ( cache.includes(ele) ) {
            index = cache.indexOf(ele);
        }
        for( let x=index; x>0 ; x--){
            cache[x] = cache[x-1];
        }
        cache[0] = ele ;
        // console.log(cache);
    });
    answer = cache ;
    return answer;
}
console.log(solution(5,[1,2,3,2,6,2,3,5,7]));
console.log(answer(5,[1,2,3,2,6,2,3,5,7]));

// 배열에서 중간에 있는 특정 index 값을 빼고 어떻게 맨 앞으로 집어넣을 수 있는가 ?
// pop , shift , slice  
let arr=[1,2,3,4,5];
// console.log(arr.splice(2,1));
// console.log(arr.unshift(3));
// console.log(arr);