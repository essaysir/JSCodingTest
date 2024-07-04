function solution(target,arr){
    let answer ;
    // 이분 검색이 무엇인가?
    arr.sort((a,b)=> a-b ); 
    // 이분검색의 전제 조건은 정렬이 되어 있어야 한다는 것이다.
    
    let lt = 0 ; 
    let rt = arr.length - 1;
    
    while( lt <= rt){
        let mid =parseInt((lt+rt)/2);
        if (arr[mid] === target ) return mid+1; 
        if (arr[mid] > target ){
            rt = mid-1;
        }
        if ( arr[mid] < target ){
            lt = mid +1 ;
        }
    }
    return answer ;
}
let arr=[23,87,65,12,57,32,99,81];
console.log(solution(32,arr));
