//폐쇠된 공간안에 데이터에 접근하기 위한 테크닉
//why 사용? ->

function one(x) {
  function two(y) {
    return x ** y;
  }
  return two;
}

let 승수2 = one(2);
let 승수3 = one(3);

console.log(승수2(3));
console.log(승수3(3));
