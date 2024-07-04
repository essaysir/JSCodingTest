function solution(arr){
    let answer = 'NO' ; 
    let ch = Array.from({length:arr.length+1},()=>0);
    let sum = arr.reduce((acr,cur)=> acr += cur , 0);
    function DFS(v){
        if( v == arr.length +1 ){
            let tmp = [];
            
            for( let i=1 ; i <= arr.length; i++){
                if(ch[i] === 1){
                    tmp.push(arr[i-1]);
                } 
            }
            let sum1 = tmp.reduce((acr,cur)=> acr += cur , 0 );
            if ( sum1 === sum / 2  ) return answer = 'YES';

        }
        else{
            ch[v] = 1; 
            DFS(v+1);
            ch[v] = 0 ;
            DFS(v+1);
        }
    }
    DFS(1);

    return answer ; 
}

function answer(arr){
    let answer = 'NO' , flag = 0 ;
    let total = arr.reduce((a,b)=> a+b, 0);
    let n = arr.length ;
    function DFS(L,sum){
        if ( flag ) return ; 
        if ( L === n ){
            if ( (total-sum) === sum ){
                answer = 'YES';
                flag = 1 ;
            }
        }
        else{
            DFS(L+1,sum+arr[L]);
            DFS(L+1, sum);
        }
    }
    
    DFS(0,0);
    return answer ;
}
console.log(solution([1,3,5,6,7,10]));
console.log(answer([1,3,5,6,7,10]));
