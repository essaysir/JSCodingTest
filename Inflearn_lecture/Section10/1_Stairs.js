// 동적 계획법이란? 큰 문제가 있을 경우에 , 작은 단위로 쪼개서 생각해보는 것이다.

// DFS를 통해, 풀이한 방식이다.
function solution(stairs){
    let answer = 0 ;
    let path = [];
    function DFS(v){
        if ( v === stairs ){
            answer ++ ;
            // console.log(path); // 올라온 계단의 각각의 개수를 보여주기 위한 것
        }
        if ( v > stairs ) return ; 
        else{
            path.push(1);
            DFS(v+1);
            path.pop();
            path.push(2);
            DFS(v+2);
            path.pop();
        }
    }
    DFS(0);
    return answer ;
}
// DP ( 동적 계획법 ) 을 통해 풀이
function solution2(stairs){
    let answer;
    let arr = Array.from({length: stairs+1} , ()=> 0 );
    arr[1] = 1 ; 
    arr[2] = 2 ;
    for ( let x=1; x<arr.length-2; x++){
        arr[x+2] = arr[x]+arr[x+1];
    } 
    console.log(arr);
    answer = arr[stairs];
    return answer ;
}
console.log(solution(7));
// console.log(solution(20));
console.log(solution2(7));