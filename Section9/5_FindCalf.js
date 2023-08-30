// BFS : 상태 트리 탐색  
// 트리 중에 이전에 나왔던 값을 넣게 되면서 , 시간 복잡도 상에서 너무 오래 걸리게 된다.

function solution(start, endPoint){
    let answer = 0 ; 
    let ch = Array.from({length:10001},()=> 0);
    let dis =Array.from({length:10001},()=> 0);
    let queue = [];
    ch[start] = 1 ; 
    queue.push(start);
    dis[start] = 0 ; 

    while ( queue.length ){
        let x = queue.shift();
        for ( let nx of [x-1,x+1,x+5]){
            if ( nx === endPoint ) return dis[x]+1;
            if ( nx > 0 && nx <= 10000 && ch[nx] === 0 ){
                ch[nx] = 1 ;
                queue.push(nx);
                dis[nx] = dis[x]+1 ;
            }
        }
    }

    return answer ; 
}

function solution2(s, e){  
    let answer=0;
    let ch=Array.from({length:10001}, ()=>0);
    let queue=[];
    queue.push(s);
    ch[s]=1;
    let L=0;
    while(queue.length){
        let len=queue.length;
        for(let i=0; i<len; i++){
            let x=queue.shift();
            for(let nx of [x-1, x+1, x+5]){
                if(nx===e) return L+1;
                if(nx>0 && nx<=10000 && ch[nx]===0){
                    ch[nx]=1;
                    queue.push(nx);
                }
            }
        }
        L++;
    }
    return answer;
}

console.log(solution2(5, 14));
console.log(solution(5,14));
console.log(solution(8,3));
