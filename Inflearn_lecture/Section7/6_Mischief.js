function solution(n,arr){
    let answer = [];
    let height = [];
    // 오름차순인데 그 와중에 오름차순에 해당하지 않는 두 숫자를 찾아라
    // 이런 느낌의 문제 풀이이다. 
    let flag = true ;
    for( let x=0; x<arr.length; x++){
        if( flag && arr[x] > arr[x+1]) {
            answer.push(x+1);
            height.push(arr[x]);
            flag = false ; 
            continue;
        }
        if ( !flag && arr[x] > arr[x+1] ){
            answer.push(x+2);
            height.push(arr[x+1]);
        }
        // console.log(answer);
    }
    // 두번 째 문제에 있어서 제대로 작동하지 않는다. 왜냐하면, 뒤의 숫자와 값이
    // 같은 경우에 작동하지 않는다. 그렇다면 이러한 문제는 어떻게 해결하는가?
    console.log(height);
    return answer ;
}
function answer(n,arr){
    let answer=[] ;
    let height=[];
    // 오름차순 배열로 하나의 배열을 더 만들어서 
    // 두 배열이 같지 않은 부분을 파악한다 . 
    const orgArr = [];
    for ( let x of arr ){
        orgArr.push(x);
    }    
    // 또는 
    // const orgArr = arr.slice();
    // 깊은 복사 
    
    arr.sort((a,b)=> a-b);
    
    for ( let x=0; x<n ; x++){
        if ( orgArr[x] !== arr[x] ) {
            answer.push(x+1);
            height.push(arr[x]);
        }
    }
    console.log(height);
    return answer ; 
}
console.log(solution(9,[120,125,152,130,135,135,143,127,160]));
console.log(solution(6,[120,130,150,150,130,150]));

console.log(answer(9,[120,125,152,130,135,135,143,127,160]));
console.log(answer(6,[120,130,150,150,130,150]));
