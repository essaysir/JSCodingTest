function solution(n,r){
    let answer = 0 ;
    // 조합 => 순서에 상관없이, n 개 중에 r개를 뽑는 경우
    // 특정 배열에서 nCr = n-1Cr-1 + n-1Cr-1
    // 위의 개념을 이해하는 것은 특정 한 숫자가 포함되는지 와 포함되지 않는 경우 
    // 두 경우의 수를 모두 더 하는 것이다.
    
    // 메모지제이션을 위한 2차원 배열 정의 
    let dy = Array.from(Array(35),()=>Array(35).fill(0))
    // console.log(dy);
    function DFS(n,r){
        if ( dy[n][r] > 0 ) return dy[n][r];
        if ( r === 0 || r === n  ){
            return 1 ;
        }
        else{
            return dy[n][r] = DFS(n-1,r-1) + DFS(n-1,r);    
        }
    }
    answer = DFS(n,r);
    return answer; 
}
console.log(solution(5,3));
console.log(solution(33,19));
