function solution(n,k){
    let answer ;
    // 왕자가 N명 이고 , K( 특정숫자 ) 외치면 제외
    let que = [];
    for ( let x=1; x<= n; x++){
        que.push(Number(x));
    }
    // console.log(que);
    let count = 1 ;
    let num = 0;
    while( ! (que.length === 1) ){
        if ( count === k ){
             // 배열에서 특정 index 의 값을 아예 빼버리는 것은 어떻게 하는가?
            que.splice(num,1);
            count = 1; 
        }
        else{
            count ++;
            num ++;
        }
        if ( num >= que.length ) num = 0; 
        console.log(que);
    }
    answer = que[0];
    return answer; 
}


// 나와 다르게 풀이한 부분 => 나는 배열을 그대로 둔 채로 계산을 했지만, 
// 선생님께서는 큐 자료구조를 이용하여 풀이를 함
// 선생님이 푸신 방법이 하기 편할 듯
function answer(n,k){
    let answer ;
    // let que = [];
    // for ( let x=1; x<= n; x++){
    //     que.push(Number(x));
    // }
    // 또는

    let que = Array.from({length:n}, (v,i)=>i+1);
    // while ( !( que.length === 1)){
    //     count ++ ;
    //     const pres = que[0];
    //     que.splice(0,1);
    //     if ( count !== k ) que.push(pres);
    //     if ( count === k ) count = 0 ;
    //     console.log(que);
    // }
    // 내 풀이 => shift 라는 메소드를 모름
    while( que.length ){
        for (let x=1; x<k;x++) que.push(que.shift());
        que.shift();
        if ( que.length === 1) answer = que.shift();
    }
    return answer;
}
console.log(solution(8,3));
console.log(answer(8,3));
