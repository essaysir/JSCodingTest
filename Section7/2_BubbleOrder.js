function solution( len , arr){
    let answer ;
    // N개 숫자를 오름차순으로 정렬하여 출력
    // 정렬하는 방법은 버블정렬입니다.
    // => 여기서 말하는 버블 정렬이란 무엇인가?
    // 계속해서 자신의 왼쪽과 비교해서 큰 값을 오른쪽으로 쭉 밀어놓으면서 하는 방식이다. 

    // console.log(arr);
    for ( let i=0; i<arr.length-1; i++){
        for( let j=0; j<arr.length-i-1; j++){
            if( arr[j] > arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
            }
        }
    }
    answer = arr ;    
    return answer ;
}

console.log(solution(6,[13, 5, 11, 7, 23, 15]));

