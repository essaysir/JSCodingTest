function solution(n,r){
    let answer=0 ;
    // 1 부터 n 까지의 번호가 적힌 구슬 중
    // m 개를 뽑는 방법의 수 출력
    const tmp = Array.from({length:r},()=>0);
    function DFS(l,s){
        if ( l === r ){
            console.log(tmp);
            answer ++ ; 
        }
        else{
            for( let i=s; i<=n; i++){
                tmp[l] = i ;
                DFS(l+1,i+1);
            }
        }
    }
    DFS(0,1);
    return answer ;
}

console.log(solution(4,2));