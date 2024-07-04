function solution(n,m){
    let answer = 0 ;
    // N 은 1부터 N까지 적힌 구슬이 존재
    // M 은 중복을 허락하여 M번을 뽑아 일렬로 나열
    function DFS(v,l){
        if( v === n+1 ) return ; 
        else{
            if( l === m+1 ){
                console.log(v,l);
                DFS(v+1,1);
            }
            else{
                console.log(v,l);
                DFS(v,l+1);
            }
            answer++;
        }
    }
    DFS(1,1);
    return answer ;  
} // 위의 풀이는 문제를 잘못 이해하고 푼 풀이이다. 
// 단지, 답으로 보여준 값만 뽑으려고 함.


// 어찌보면, 재귀함수와 다중 for 문은 같은 기능을 하는 거 같은데 ,
// 왜 다중 for문은 안 쓰고 , 재귀함수를 쓰는 것인가 ? 
// for문이 몇개가 들어가야하는 지 모르는 경우에 재귀함수를 통해서 원하는 작동을 실행하도록 할 수 있다.
function answer(n,m){
    let answer=[] ;
    let tmp = Array.from({length:m} , ()=> 0);
    function DFS(l){
        if ( l === m ){
            answer.push(tmp.slice());
            // answer.push(tmp); => 해당과 같이 하면, 얕은 복사로 인해서 
            // 원하는 값을 구할 수 가 없음 
        }
        else{
            for(let i=1; i<= n ; i++){
                tmp[l] = i ; 
                DFS(l+1);
            }
        }
    }
    DFS(0);
    return answer ;
}
// console.log(solution(4,3));
console.log(answer(4,3));