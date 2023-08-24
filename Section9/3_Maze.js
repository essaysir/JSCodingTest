function solution(maze){
    let answer = 0 ;
    let dx = [-1,0,1,0];
    let dy = [0,1,0,-1];
    function DFS(x,y){
        if ( x === 6 && y === 6 ) answer ++ ;
        else{
            for ( let k=0; k<4; k++){
                let nx = x + dx[k];
                let ny = y + dy[k];
                if ( nx >= 0 && nx<= 6 && ny >= 0 && ny <= 6 && maze[nx][ny] ===0 ){
                    maze[nx][ny] = 1 ;
                    // 왔던 길을 처리해주는 것이다. 처리해주지 않으면 ,
                    // 계속 왔다갔다 하게 된다.
                    DFS(nx,ny);
                    maze[nx][ny] = 0 ;
                }
            }
        }
    }
    // 처음에 0,0 을 왔던 것으로 처리해주는 것을 까먹으면 안된다.
    maze[0][0] = 1 ;
    DFS(0,0);
    return answer;
}
let arr=[
[0, 0, 0, 0, 0, 0, 0], 
[0, 1, 1, 1, 1, 1, 0],
[0, 0, 0, 1, 0, 0, 0],
[1, 1, 0, 1, 0, 1, 1],
[1, 1, 0, 0, 0, 0, 1],
[1, 1, 0, 1, 1, 0, 0],
[1, 0, 0, 0, 0, 0, 0]
];

console.log(solution(arr));