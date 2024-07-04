function solution(arr){
    let answer = arr ;
    for ( let x=0; x<arr.length-1; x++){
        for ( let y=0; y<arr.length-x-1; y++){
            // 우선, 이게 마이너스, 플러스 인지 먼저 확인해야 한다.
            // 문제 이해를 잘못 함 => 음수 와 양수만 구분 하면 된다,
            if ( arr[y] > 0 && arr[y+1] < 0 ){
                [arr[y],arr[y+1]] = [arr[y+1],arr[y]];
            }

        }
    }
    return answer ;
}
const arr = [1,2,3,-3,-2,5,6,-6];
console.log(solution(arr));