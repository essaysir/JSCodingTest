// 올바른 괄호 

// 왼쪽 괄호와 오른쪽 괄호의 쌍이 맞아야 하는 것인가? 
// 괄호의 갯수가 같다고 해서 올바른 괄호라고 할 수 없다.
// 왜냐하면, )(  다음 처럼 순서가 다르게 되있는 경우도 존재할 수 있기 때문이다.
// 그러하여, stack ( 스택 ) 이라는 자료구조를 이용하여 ,이를 해결 할 수 있다. 
function solution(s){
    let answer = 'YES';
    const stack = [];
    for (let x of s){
        if (x === '(') stack.push(x);
        if ( stack.length === 0 && x === ')') {
            answer = 'NO';
            break ;
        }
        if (x === ')' ) stack.pop();
    }
    if ( stack.length !== 0 ) answer="NO"; 
    return answer;
}

let a="(()(()))(()";
let b="(()(()))()";

console.log(solution(a));
console.log(solution(b));

// 스택이라는 자료구조 
// 후입선출법을 생각하면 될 듯하다.
// 나중에 집어 넣은 것이 제일 먼저 뽑히는 구조이다

// 이와는 반대로 , 선입선출법인 큐 라는 자료구조도 존재한다.
