function solution(len,con){
    let answer ;
    let dy = Array.from(Array(11),()=>Array(11).fill(0));
    let ch = Array.from({length:len+1} , ()=> 0);
    let tmp = Array.from({length:len},()=>0);
    let b = Array.from({length:len},()=>0);
    let flag = 0 ;
    function comb(n,r){
        if ( dy[n][r] > 0 ) return dy[n][r];
        if( n === r || r===0)return 1 ;
        else return dy[n][r] = comb(n-1,r-1)+ comb(n-1,r);
    }
    function DFS(l,sum){
        if (flag) return
        if( l === len && sum === con ){
            answer = tmp.slice();
            flag =1 ;
        }
        else{
            for ( let i=1; i<= len ; i++ ){
                if(ch[i]===0){
                    ch[i]=1;
                    tmp[l]=i;
                    DFS(l+1,sum+(b[l]*tmp[l]));
                    ch[i] = 0 ;
                }
            }
        }
    }
    for (let i=0; i<len; i++){
        b[i] = comb(len-1,i);
    }
    DFS(0,0);
    return answer ;
}
console.log(solution(4,16));