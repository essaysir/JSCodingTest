function solution(str){
    let answer = 0 ;
    const stack = [];
    for ( let x=0; x<str.length; x++ ){
        if ( str[x] === '(') stack.push(str[x]);
        // 레이저인 경우 => 앞에 있는 열린 괄호가 아니기 때문에, pop() 을 먼저하고,
        // 길이를 재서 answer 에 추가 해준다. 
        if( str[x] === ')' && str[x-1] === '(') {
            stack.pop();
            answer += stack.length;
            // console.log(x, answer);
        }
        // 쇠막대기의 끝인 경우
        if ( str[x] === ')' && str[x-1] !== '('){
            answer ++ ;
            stack.pop();
            //console.log(x, answer);
        }
    }
    return answer ;
}

function answer(str){
    let answer ;


    return answer ;
}


const str1 = '()(((()())(())()))(())';
const str2 = '(((()(()()))(())()))(()())';
console.log(solution(str1));
console.log(solution(str2));
