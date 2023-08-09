function solution(friend){
    let answer = Number.MIN_SAFE_INTEGER ;
    friend.sort((a,b)=>{
        if ( a[0] === b[0] ) return a[1]-b[1];
        return a[0]-b[0];
    });
    // console.log(friend);
    let et = [];
    let num = 0 ; 
    for ( let x=0; x<friend.length; x++ ){
        for( let y=0; y<et.length; y++){
            if ( et.length > 0 && friend[x][0] >= et[y] ){
                et.splice(y,1);
                num -- ;
            }
        }
        num ++;
        et.push(friend[x][1]);
        if ( num > answer) answer = num ;
    }
    return answer ;
}
function answer(friend){
    let answer = Number.MIN_SAFE_INTEGER ;
    // 강의에서 한 방식은 각각의 값들을 'START' 와 'END'로 나누는 것입니다.
    // 예 ) [ [5,'S'] , [12,'S'] ]=> 이러한 식으로 입니다.
    let timeArr = [];
    friend.forEach( ele => {
        timeArr.push([ele[0],'S']);
        timeArr.push([ele[1],'E']);
    });
    //console.log( timeArr); 
    timeArr.sort((a,b)=>{
        if (a[0] === b[0] && a[0] === 'E' ) return -10 ;
        // 또는 
        // if ( a[0] === b[0] ) return a[1].charCodeAt()-b[1].charCodeAt();
        // 아스키 코드를 활용한 방식이다 .

        return a[0]-b[0];
    });
    // console.log(timeArr);
    let num = 0 ; 
    for (let x=0; x<timeArr.length; x++ ){
        if ( timeArr[x][1] === 'S') num++;
        if ( timeArr[x][1] === 'E') num--; 
        if ( num > answer ) answer = num ; 
    }
    return answer;
}
let arr=[
    [14,18],
    [12,15],
    [15,20],
    [20,30],
    [5,14],
]
console.log(solution(arr));
console.log(answer(arr));
