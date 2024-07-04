function solution(n){
    let answer= ''; 
    // 재귀함수를 이용해서 2진수를 출력하세요 
    function DFS(num){
        if( num === 0 ) return ; 
        else{
            DFS(parseInt(num/2));
            answer += String(num%2);
        } 
    }
    DFS(n);

    return answer ;
}
console.log(solution(11));