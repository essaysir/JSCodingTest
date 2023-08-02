function solution(s,t){
    let answer = 'YES';
    // s => 필수과목
    // t => 전체 과목
    let request = s.split('');
    // console.log(request);
    for ( let x of t ){
        // console.log(s.indexOf(x));
        // 해당 필수과목의 순서가 정확히 들어가 있는지.
        
        // if (s.indexOf(x) !== -1 ){
        // 또는 
        if ( request.includes(x)){
            if ( request.shift() !== x ){
                return 'NO';
            }
        
        }
    }
    // 그렇다면, 모든 필수과목이 들어있는지는 어떻게 확인할 것인가?
    if ( request.length !== 0 ) return 'NO';

    return answer ;
}
console.log(solution('CBA','CBDAGE'));
console.log(solution('CBA','CADBGE'));
console.log(solution('CABH','CADBGE'));
