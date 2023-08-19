function solution(n,coins,change){
    let answer = Number.MAX_SAFE_INTEGER;
    // n => 동전 종류의 개수 , coins => 동전 종류
    // change => 잔돈 
    function DFS(l,sum){
        if ( sum > change ) return ;
        if ( l >= answer ) return ; 
        if ( sum === change ){
            console.log(l,sum);
            answer = Math.min(l,answer) ; 
        }
        else{
            for( let x of coins){
                DFS(l+1, sum+x);
            }
        }
    }
    DFS(0,0);
    return answer;
}   
let arr = [1,2,5];
console.log(solution(3,arr,20));