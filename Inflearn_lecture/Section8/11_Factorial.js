function solution(num){
    let answer = 1 ;
    function DFS(l){
        answer = answer * l ; 
        if( l === num ){
            return ;
        }
        else{
            DFS(l+1);
        }
    }
    DFS(1)
    return answer;
}
function answer(n){
    let answer ; 
    function DFS(n){
        if ( n === 1 ) return 1; 
        else return n*DFS(n-1); 
    }
    answer = DFS(n);
    return answer; 
}
console.log(solution(5));
console.log(solution(6));

console.log(answer(5));
console.log(answer(6));