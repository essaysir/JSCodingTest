function solution(str){
    let answer ;
    // 후위 연산식 
    const stack = [];
    // 무슨 기준으로 해당 문제가 작동하는지 이해가 잘 되지 않음
    // 어떻게 괄호를 적용해야하는 지 이해가 되지 않음.
    // 괄호를 쓰는 게 아니라, 미리 먼저 계산을 하는 것이다.
    for ( x of str){
        if ( x >= 0 && x<=9 ) stack.push(x);
        else{
            let rt = stack.pop();
            let lt = stack.pop();
            let result = 0;
            if (x ==='+') result = Number(lt)+Number(rt);
            if ( x==='*') result = lt * rt;
            if ( x==='-') result = Number(lt) - Number(rt) ;
            if ( x==='/') result = lt/rt ;
            stack.push(result);
        }
        // console.log(stack);
    }
    answer = stack.pop();
    return answer; 
}
function answer(s){
    let answer; 
    const stack=[];
    for ( let x of s ){
        if( !isNaN(x) ) stack.push(Number(x))
        else{
            // pop 은 부속효과가 존재하는 함수이다.
            // 기존의 행렬을 바꾼다. 
            let rt = stack.pop();
            let lt = stack.pop();
            if ( x==='+') stack.push(lt+rt);
            if ( x==='-') stack.push(lt-rt);
            if ( x==='*') stack.push(lt*rt);
            if ( x==='/') stack.push(lt/rt);
        }
    }
    answer = stack.pop();
    return answer; 
}
const str = '352+*9-';
const str1 = '35-';
console.log(solution(str));
console.log(answer(str));


console.log(solution(str1));
console.log(answer(str1));