function solution(n,m,horses){
    let answer; 
    // n은 n개의 마구간을 의미 , m은 m개의 말을 의미..
    // 문제 파악 : [1,2,8,4,9] 좌표에 각각의 마구간 있는데 , 
    // m 마리의 말을 어떻게 하면 가장 작은 거리가 최대가 되게 배치할 수 있는가 ? 

    //  우선 : 오름 차순으로 정렬할 필요가 있지 않을까 ?
    horses.sort((a,b)=> a-b);
    // console.log(horses);

    // 다섯 개 중에 어떻게 3개를 배치해야 할까? 
    // 이 경우에는 가장 끝과 미드를 고르면 된다고 할지라도.. 
    // n과 m 이 늘어날 경우에는 ? 
    let lt = 1 ; 
    let rt = horses[horses.length -1 ];
    while(lt <= rt ){
        let mid = parseInt((lt+rt)/2);
        if ( count(horses,mid) >= m  ){
            answer = mid ; 
            lt = mid + 1 ;
        }
        else rt = mid - 1 ; 
    }

    return answer ;
}

function count(stable,dist){
    let cnt = 1 , ep = stable[0];
    for(let i=1; i<stable.length; i++){
        if(stable[i]-ep >= dist){
            cnt ++ ;
            ep = stable[i];
        }
    }
    return cnt ; 
}
console.log(solution(5,3,[1,2,8,4,9]));
console.log(solution(5,2,[1,2,8,4,9]));
