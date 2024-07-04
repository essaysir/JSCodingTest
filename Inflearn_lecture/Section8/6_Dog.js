function solution(max , dogs){
    let answer = Number.MIN_SAFE_INTEGER ;
    let n = dogs.length ;
    let ch = Array.from({length: n } , ()=> 0 );
    // console.log(ch); => [0,0,0,0,0]; 
    function DFS(v, weight){
        // 끝나는 조건을 처음에는 무게가 기준보다 무거워지면 이라고 생각했지만, 
        // 이분탐색은 무조건 끝까지 가야 끝나는 조건으로 해야한다. 
        // 이에 대해 계속 생각해보자 
        if ( weight > max ) return ;
        if( v === n  ) {
            if ( weight > answer && weight <=  max ) answer = weight; 
            return ;
        }
        else{
            // 어떤 강아지들을 태웠는지는 알 필요가 없기때문에, 
            // ch 는 만들 필요는 없다. 
            // ch[v] = 0 ; 
            DFS(v+1, weight);
            // ch[v] = 1 ;
            DFS(v+1, weight+dogs[v]);
        }

    }
    DFS(0,0);
    
    return answer ; 
}
console.log(solution(259,[81,58,42,33,61]));