function solution(num){
    let answer = [] ; 
        // 자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요 
        // 예시 : n = 12345 => [5,4,3,2,1]
    answer = num.toString().split('').reverse();
    // answer = num.split('').reverse();
    // 나의 오답: num 이 여기서 넘어올때, Number 로 넘어와서 split()가
    // 인식되지 않는다. 이점 주의할 것  !
    return answer; 

}

console.log(solution(12345));
