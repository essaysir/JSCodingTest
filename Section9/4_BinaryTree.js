// 이진트리 넓이우선 탐색 (BFS);
// 레벨 마다 모두 탐색하는 방법이다. 

// 상태 트리 
function solution(){
    let answer ="";
    let queue = [];
    queue.push(1);
    while( queue.length ){
        let v = queue.shift();
        answer += v + " ";
        for ( let nv of [v*2,v*2+1]){
            if ( nv > 7 ) continue; 
            queue.push(nv);
        }
    }
    return answer
}
console.log(solution());
