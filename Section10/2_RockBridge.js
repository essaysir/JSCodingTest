function solution(rocks){
    let answer; 
    // rocks = N개의 돌로 다리를 만듬 
    // 철수가 개울을 건너는 방법은 몇가지 인가? 
    let dy = Array.from({length:rocks+2}, ()=>0);
    dy[1] = 1 ; 
    dy[2] = 2 ; 
    for ( let i = 3 ; i< dy.length; i++){
        dy[i] = dy[i-1] + dy[i-2];
    }
    answer = dy[rocks] + dy[rocks-1];
    // 딱 N번째에 도착하는 계단과 다르게, 
    // 개울을 건너는 방법의 가지 수 이기 때문에 , 다음과 같이 해줘야한다
    return answer;
}
console.log(solution(7));