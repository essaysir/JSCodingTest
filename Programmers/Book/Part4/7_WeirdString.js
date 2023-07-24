function solution(str){
    let answer= [];
    let count = 0 ; 
        for ( let x of str){
            if ( x === ' ') {
                count = 0 ;
                answer.push(' ');
                continue ;
            }
            if ( count === 0 || count % 2 === 0 ) answer.push(x.toUpperCase());
            if ( count % 2 === 1 ) answer.push(x.toLowerCase());
            count ++ ;
        }
    answer = answer.join('');
    return answer ;
}
let str = 'try hello world';
console.log(solution(str));