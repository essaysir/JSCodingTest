// 괄호 안의 문자는 모두 제거하고 
// 남은 문자를 보여주시오
function solution(s){  
    let answer=[];
    const stack = [];
    for ( let x of s ){
        if ( x === '(') {
            stack.push(x);
            continue;
        }
        if ( x === ')') {
            stack.pop();
            continue ;
        }
        // stack 구조에 아무것도 없다면 
        // 괄호에 둘러싸이지 않은 상태이므로 
        if ( stack.length === 0 ) answer.push(x);  
    }
    answer = answer.join('');
    return answer;
}

function solution_teach(s){
    let answer ;
    const stack = [];
        for ( let x of s ){
            if(x===')'){
                while(stack.pop() !=='(' );
                // pop 한 것이  ( 일때 거짓이 되면서,
                // 반복문이 끝난다.
            }
            else stack.push(x);
            
        }
    answer = stack.join('');
    return answer;
}

let str="(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(solution(str));
console.log(solution_teach(str));
