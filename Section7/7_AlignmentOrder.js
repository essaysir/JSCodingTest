function solution(arr){
    let answer = arr ;
    // 좌표를 오름차순으로 정렬하는 방법!
    arr.sort((a,b)=>{
        if ( a[0]=== b[0]) return a[1]-b[1];
        if ( a[0]!== b[0]) return a[0]-b[0];
    })

    return answer ; 
}
const arr = [
    [2,7],
    [1,3],
    [1,2],
    [2,5],
    [3,6]
]

console.log(solution(arr));