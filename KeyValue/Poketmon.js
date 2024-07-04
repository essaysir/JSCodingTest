// https://school.programmers.co.kr/learn/courses/30/lessons/1845?language=javascript
// 포켓몬 문제

// N/2 마리의 포켓몬을 선택하는 방법 중
// 가장 많은 종류의 포켓하는 선택하는 방법을 찾아, 그 때의 포켓몬 종류 번호의 개수 RETURN

// nums => N마리 포켓몬의 종류 번호가 담긴 배열
function solution(nums) {
  var answer = 0;

  //   const serialObject = nums.reduce((acc, num) => {
  //     if (acc[num]) acc[num] += 1;
  //     else acc[num] = 1;
  //     return acc;
  //   }, {});

  // 새로 알았던 점 => Map 보다 객체의 연산이 더 빠르다.
  // 뿐만 아니라, reduce 보다도 forEach를 도는 게 더 연산이 빠름

  const serialObject = {
    totalSize: 0,
  };
  nums.forEach((element) => {
    serialObject[element] = (serialObject[element] || 0) + 1;
    serialObject["totalSize"] = serialObject.totalSize + 1;
  });

  const serialCount = Object.keys(serialObject).length - 1;
  const halfCount = Math.floor(serialObject.totalSize / 2);
  answer = Math.min(serialCount, halfCount);
  return answer;
}

// 그렇다면, 배열을 각각 번호의 종류에 어떠한 게 가장 많은 갯수로
const testArray = [1, 2, 3, 4, 2, 3, 4];
console.log(solution(testArray));
