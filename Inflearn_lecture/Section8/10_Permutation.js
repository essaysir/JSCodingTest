function solution(m,arr){
    let answer = 0  ;
    let ansArr = [];
    let n = arr.length; 
    // arr ( [3,6,9] ) 에서 m개를 뽑는 총 경우의 수를 출력
    let tmp = Array.from({length:m}, ()=> 0 ); 
    let chk = Array.from({length:n}, ()=> 0 );
    function DFS(l){
        
        if( l === m ) {
            answer ++ ;
            console.log(tmp.slice());
            ansArr.push(tmp.slice());
            return ;
        } 
        else{
            // 어떻게 해야 진행함에 있어서, 지금까지 선택된 것을 제외시킬 수 있는가 ?
            // chk 배열을 하나 더 만들어서 한다. 그렇다면 chk 배열은 어디서 초기화를 시켜줄 것인가? 
            for(let i=0; i< n ; i++){
                if( chk[i] === 0 ){
                    chk[i] = 1 ; 
                    tmp[l] = arr[i];
                    DFS(l+1);
                    chk[i] = 0 ; 
                }
            }
        }
    }
    DFS(0);
    return answer ; 
}
console.log(solution(2,[3,6,9,4]));