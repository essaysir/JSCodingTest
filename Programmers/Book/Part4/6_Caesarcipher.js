function solution(s,n){
    // 어떤 문자의 알파벳을 특정 거리만큼 밀어서 다른 알파벳을 바꾸는 것 => 시저암호
    // 문자열 s 와 거리 n 을 입력받아 완성해보시오
    let answer ; 
    let str_arr = s.split('');
    for ( let x =0; x<str_arr.length; x++ ){
        // 아스키 코드를 활용해야함
        // 이 때에, 영어대문자 A(65)~Z(90) => 
        // 영어소문자 a(97)~z(122)
        // 대문자와 소문자의 차이는 32이 이다.
        if ( str_arr[x] === ' ') continue ; 
        // spacebar 와 그저 단순 공백은 다른 것이다. 
            let idx = str_arr[x].charCodeAt(0); // 아스키 코드 
            // idx + n 
            if( str_arr[x]=== str_arr[x].toUpperCase() && idx+n > 90 ) idx -= 26 ;
            if ( str_arr[x] === str_arr[x].toLowerCase() && idx+n > 122 ) idx -= 26 ;
            str_arr[x] = String.fromCharCode(idx+n);
        
    }
    answer = str_arr.join('');
    return answer ;
}

console.log( solution('z',4));
console.log( solution('a B z',4));

// console.log(String.fromCharCode(65)); => A
// console.log('A'.charCodeAt(0)); => 65