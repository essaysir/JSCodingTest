function solution(k,nums,x){
    let answer=0;
    // k 개를 뽑아서 합이 x 의 배수인지 확인 후
    // 총 가지수를 구하는 문제이다.
    let tmp = Array.from({length:k} , ()=>0);
    
    // 무조건 k 개를 뽑아야한다는 부분에서 막혔다.
    function DFS(l,s,sum){
        if( l === k ){
            if ( sum % x === 0){
                answer ++ ;
            } 
            console.log(sum,tmp);
        }   
        else{
            for( let i=s; i<nums.length; i++){
                tmp[l] = nums[i]; 
                DFS(l+1,i+1,sum+arr[i]);
            }
        } 
    }
    DFS(0,0,0);


    return answer; 
}
let arr = [2,4,5,8,12];
console.log(solution(3,arr,6));