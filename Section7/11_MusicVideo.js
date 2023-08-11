function solution(m,songs){
    let answer ;
    // 결정 알고리즘 이란 ? => 강사님께서 만드신 단어  
    // lt = 9 , rt = 45 ; 
    // 최소 9 부터 최대 45 안에서 결정될 수 밖에 없다.
    // 해당 문제 풀이는 이분 검색을 이용한 풀이이다. 
    let lt = Math.max(...songs);
    let rt = songs.reduce((cur,acr)=> cur+acr , 0 );
    while(lt <= rt){
        let mid = parseInt((lt+rt)/2);
        if ( count(songs,mid) <= m ){
            answer = mid;
            rt = mid - 1;
        }
        else{
            lt = mid+1 ; 
        }
    }

    return answer;
}

const count = function( songs, capacity){
    let cnt = 1, sum = 0 ; 
    for ( let x of songs ){
        if ( sum+x > capacity ){
            cnt ++ ;
            sum = x; 
        }
        else{
            sum += x ;
        }
    }
    return cnt ; 
};
let arr = [1,2,3,4,5,6,7,8,9];
console.log(solution(3,arr));