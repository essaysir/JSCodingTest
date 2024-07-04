function solution(n,lines){
    let answer = 0 ; 
    // n 은 n개의 정점을 의미 , lines 는 연결되어있는 선들을 의미.
    // 1번 정점에서 n번 까지 갈 수 있는 경우의 수를 구하시오 
    let map = Array.from(Array(n+1),()=>Array());
    // 인접 배열 방법이 아닌 , 인접 리스트 방식으로 해본다.
    
    let chk = Array.from({length : n+1},()=>0);
    // console.log(len); => 9 
    // console.log(map); 10,10 => 2차원 배열 
    let path = [];

    for ( let [a,b] of lines){
        map[a].push(b);
    }
    // console.log(map);
    function DFS(num){
        if ( num === n ) {
            answer ++;
            console.log(path);
        } 
        else{
            for (let i=0; i< map[num].length ; i++){
                if( chk[map[num][i]] === 0  ){
                    chk[map[num][i]] = 1 ;
                    path.push(map[num][i]);
                    DFS(map[num][i]);
                    // DFS 문제에서 계속해서 나오는 부분에 대해서 
                    // 제대로 체크하지를 못하고 있음.
                    chk[map[num][i]] = 0 ; 
                    path.pop();
                }
            }
        }
    }
    path.push(1);
    chk[1] = 1 ; 
    DFS(1);
    return answer;
}
let arr = [[1,2],[1,3],[1,4],[2,1],[2,3],[2,5],[3,4],[4,2],[4,5]]
console.log(solution(5,arr));
