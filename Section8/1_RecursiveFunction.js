let i = 1 ; 
function solution(n){
    if ( i > n ) return ;
    console.log(i);
    i ++ ;
    solution(n);
}

function answer(n){
    function DFS(L){
        if(L==0) return ; // 함수 종료의 의미
        else {
            DFS(L-1); 
            // console.log 를 DFS(L-1) 위에 위치시키면 , 
            // 3 2 1 이렇게 찍히지만 , 
            // 밑에 두면, 1 2 3 이렇게 콘솔에 찍힌다.
            // 그 이유는 ? 
            

            // 스택 프레임에 대해 공부해야할 필요 존재 
            console.log(L);
        }
    }
    DFS(n);
}
console.log(answer(3));