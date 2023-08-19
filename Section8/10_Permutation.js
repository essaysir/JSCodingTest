function solution(m,arr){
    let answer = 0  ;
    let ansArr = [];
    let n = arr.length; 
    // arr ( [3,6,9] ) 에서 m개를 뽑는 총 경우의 수를 출력
    let tmp = Array.from({length:m}, ()=> 0 ); 
    function DFS(l){
        
        if( l === m ) {
            answer ++ ;
            console.log(tmp.slice());
            ansArr.push(tmp.slice());
            return ;
        } 
        else{
            for(let i=0; i< n ; i++){
                tmp[l] = arr[i];
                DFS(l+1)
            }
        }
    }
    DFS(0);
    return answer ; 
}
console.log(solution(2,[3,6,9]));