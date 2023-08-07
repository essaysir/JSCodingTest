function solution(arr){
    let answer = arr ;
        // 삽입 정렬이 무엇인가?
        // 오름차순 으로 정렬하는 방법 
        // => 선택 정렬 과 sort 
        
        // 방법 1 : 선택 정렬 
        // 작은 것을 맨 왼쪽으로 밀어붙이고, 그를 뺴고 다시 반복문을 돌리면 될듯하다

        for ( let x = arr.length-1; x >= 0 ; x--){
            let idx = x;
            let n = x-1;
            while ( n >= 0  ){
                // console.log('확인용 idx : '+ idx);
                // console.log('확인용 arr[idx] : '+arr[idx]);
                if ( arr[idx] < arr[n] ) {
                    idx = n; 
                }
                [arr[x],arr[idx]] =[arr[idx],arr[x]];
                n--;
            }
        }
    return answer;
}
function answer(arr){
    let answer = arr ; 
    // 위에서는 선택정렬을 이용하면 진행했다면, 삽입 정렬이란 무엇인지 확인해보자

    for(let i=0; i<arr.length; i++){
        let tmp=arr[i], j;
        for(j=i-1; j>=0; j--){
            if(arr[j]>tmp) arr[j+1]=arr[j];
            else break;
        }
        arr[j+1]=tmp;
    } 
        
        
    

    return answer;
}
console.log(solution([11,7,5,6,10,9]));
console.log(answer([11,7,5,6,10,9]));
