function solution(arr){
    let answer=[] ;
    let len = arr.length ;
    // 생각 1 => sort 말고 다른 방법이 존재하는 지 ?
    answer = arr.sort((a,b)=> a-b);
    // 오름차순 => 이 경우, a-b < 0 앞에 오는 것이다. 
    // sort 함수는 부속효과가 있는 지 궁금하다.
    
    // console.log(' sort 의 부속효과는 ? : '+arr)
    //  sort 의 부속효과는 ? : 5,7,11,13,15,23 
    //  sort 는 부속효과가 존재하는 함수이다. 기존의 배열을 아예 바꿈


    return answer;
}

function answer(arr){
    let answer=arr ;
    // arr 을 얕은 복사를 진행 => arr 이 변하면, answer 또한 변화

    // 선택정렬 을 통한 해결 
    // 그렇다면 , 선택정렬이란 무엇인가 ?  => i 번째 올 수 있는 값들을 모두 선택해서 정렬해주는 것이다.
    for ( let x=0; x<arr.length; x++){
        let idx = x;
        let n = x+1;
        while ( n < arr.length ){
            if ( arr[idx] > arr[n] ) {
                idx = n; 
            }
            [arr[x],arr[idx]] =[arr[idx],arr[x]];
            n++;
        }

    }
    answer = arr ;
    return answer ;
}
let arr = [13,5,11,7,23,15,99,100,4545];
console.log(solution(arr));
console.log(answer(arr));
