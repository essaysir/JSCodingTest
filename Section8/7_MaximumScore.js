function solution(num, maxtime , prob){
    let answer = Number.MIN_SAFE_INTEGER;
    // N => 문제의 개수 , M => 제한 시간
    function DFS(v,time,score){
        // console.log(v);
        // 문제의 조건을 초과하는 경우에는 어떻게 종료시켜야하는가 ? 
        // 처음에는 time + prob[v][1] => 이런 방식으로 생각했는데, 이렇게 하면 
        // 배열의 범위를 초과하여 계산이 오류가 발생 ; 

        // time > maxtime 을 하면, 큰 것들은 실행이 안되니 다음과 같은 방식을 유념하자 
        if ( time > maxtime ) return ; 
        if( v === num){
            answer = Math.max(score,answer);
        }
        else{
            DFS(v+1,time+prob[v][1], score+prob[v][0] );
            DFS(v+1, time ,score);
        }
    }
    DFS(0,0,0);
    return answer ;
}
let arr = [[10,5],[25,12],[15,8],[6,3],[7,4]];
// 왼쪽이 점수 , 오른쪽이 시간.
console.log(solution(5,20,arr));