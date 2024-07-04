function solution(board , moves) {
    let answer ; 
    // 일단 moves 만큼 for 문이 돌아야한다.
    // 같은 인형이 바구니에 두개 쌓이면 인형 두개가 
    // 없어진다. 

    // 자바스크립트에서 배열밖으로 안나가도록 정의 하는 게 중요해보인다. 
    const box = [];
    let count = 0 ; 
    //console.log(board[y][x-1]);
    for ( x of moves ){ // moves 만큼 반복
        let y=0 ;
        
        // y <= 4 를 넣어준 이유는 , 모든 칸이 0인 경우 중단이 되지 않기 때문에
        // 추가 했다.
        // while 문 조건이 거짓이면, 해당 반복을 중단한다.
        while (y >= 0 && y <= board.length-1 && (board[y][x-1] === 0 || board[y][x-1] === undefined)) {
            y++;
        }
        // console.log(board[y][x-1]);
        if ( y >= 0 && y <= board.length-1){
            let pres = board[y][x-1];
            board[y][x-1] = 0 ; 
            // console.log(board);
            let popnum = box.pop();
            if ( pres === popnum) count ++;  
            else{
                // 처음에, box에 아무것도 없는 경우에,
                // undefined가 계속해서 넘어감에 다음과 같이 정의함
                if ( popnum !== undefined ){
                    box.push(popnum);
                }            
                box.push(pres);
            }
        }
        console.log(box);
            
    
    }
    console.log(box);
    answer = count*2 ;
    return answer ;
}
// 강의 풀이
function answer(board,moves){
    let answer=0; 
    let stack = [];
    moves.forEach(pos => {
        for(let i=0; i<board.length; i++){
            if(board[i][pos-1] !== 0){
                let tmp = board[i][pos-1];
                board[i][pos-1] = 0;
                if (tmp === stack[stack.length-1]){
                    stack.pop();
                    answer += 2;
                }
                else stack.push(tmp);
                break ;
            }
        }
    });



    return answer ;
}
let board = [
    [0,0,0,0,0],
    [0,0,1,0,3],
    [0,2,5,0,1],
    [4,2,4,4,2],
    [3,5,1,3,1]];
let moves = [1,5,3,5,1,2,1,4];
console.log(solution(board,moves));
console.log(answer(board,moves));

