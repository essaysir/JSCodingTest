function solution(time) {
    let answer=0;
    // 가능한 것들을 stack 집어 넣는다는 생각으로 진행하면 안될까?

    // 해당 문제는 greedy 의 대표적인 문제라고 한다. 
    // 주어진 시간들을 종료시간을 기준으로 오름차순 정렬을 해야한다.
    // 종료시간이 같은 경우에는 시작시간을 기준으로 정렬을 또 해야한다.
    time.sort((a,b)=>{
        if ( a[1] === b[1] ) return a[0]- b[0];
        return a[1] - b[1];
    });
    // console.log(time);
    let et = 0 ; 
    for ( let x=0; x<time.length; x++){
        if ( et <= time[x][0] ){
            answer ++;
            et = time[x][1];
        }
    }

    return answer;
}
let arr = [
    [1,4],
    [2,3],
    [3,5],
    [4,6],
    [5,7]
];
let arr1 = [
    [3,3],
    [1,3],
    [2,3]
];

console.log(solution(arr));
console.log(solution(arr1));