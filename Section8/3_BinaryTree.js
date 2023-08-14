// 이진트리 란 무엇인가 ? 

function solution(v){
    let answer ;
    function DFS(v){
        if(v>7){
            return ;
        }
        else{ 
            // log 의 위치에 따라 찍히는 순서가 달라짐 
            //console.log(v); // 전위 순회
            DFS(v*2);
            // console.log(v); // 중위 순회
            DFS(v*2+1);
            // console.log(v); // 후위 순회
            
        }
    }
    DFS(v);

    return answer;
}

console.log(solution(1));