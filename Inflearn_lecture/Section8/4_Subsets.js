function solution(n){
    let answer=[] ;
    // 재귀함수를 이용해서 풀이
    // 1부터 N까지의 원소를 갖는 집합의 모든 부분집합을 출력 
    let ch = Array.from({length:n+1}, ()=>0);
    // console.log(ch);
    function DFS(v){
        if( v === n+1){
            let tmp = [];
            // 부분집합 하나가 완성된 때
            for ( let i=1 ; i<= n; i++){
                if( ch[i] === 1) tmp.push(i);
            }
            // console.log(tmp);
            if ( tmp.length > 0 ) answer.push(tmp);
        }
        else{
            ch[v] = 1 ;
            DFS(v+1);
            ch[v] = 0 ; 
            DFS(v+1);
        }
    }
    DFS(1);
    return answer;
}
console.log(solution(3));