// 1부터 100까지 더하는 예제
// for(초깃값;조건;증감값)
// 1번 풀이
let s = 0;
for (let i = 0; i < 101; ++i) {
  s += i;
}
s;

// 2번 풀이
let s = 0;
let i = 1;
while (i < 101) {
  s += i;
  ++i;
}
s;

new Array(10);
new Array(10).fill(1);
new Array(10).fill(1);
new Array(10).fill(1).map((_, i) => i);
new Array(10).fill(1).map((_, i) => i + 1);

// 저는 javascript도 python처럼 쓰기위해서
// range구현하고, zip도 구현하고, map 구현해놓고 사용합니다.
// 위처럼 개발하시는 것을 권하지는 않습니다.
// 개인 개발 속도는 빨라지지만 협업할 때 문제가 생깁니다.
// 회사 컨벤션으로 맞춰놓으면 개발속도 높아집니다.

// 3번 풀이
let range = new Array(100).fill(1).map((_, i) => i + 1);
let s = 0;
for (const i of range) {
  // console.log(i)
  s += i;
}
s;

// 4번 풀이
new Array(100)
  .fill(1)
  .map((_, i) => i + 1)
  .reduce((a, c) => a + c, 0);

// 5번 풀이
let range = new Array(100).fill(1);
let s = 0;
for (const index in range) {
  // index가 문자열이라서 변환해준겁니다.
  // s += parseInt(index) + 1
  s += +index + 1;
}
s;

// 1부터 100까지 짝수만 더하는 예제
// 100번 반복
let s = 0;
for (let i = 0; i < 101; ++i) {
  if (i % 2 === 0) {
    s += i;
  }
}
s;

// 위보다는 효율적인 코드
// 50번 반복
let s = 0;
for (let i = 0; i < 101; i += 2) {
  s += i;
}
s;

let s = 0;
let i = 0;
while (i < 101) {
  if (i % 2 === 0) {
    s += i;
  }
  ++i;
}
s;

// Q. [10, 5, 4, 7, 9, 3, 2, 5, 4, 7, 4, 2, 1]에서 5보다 작은 수만(미만인 수) 다 더해주세요.
// 다양하게 풀어보세요. for, while, filter, map, reduce...
let data = [10, 5, 4, 7, 9, 3, 2, 5, 4, 7, 4, 2, 1];
let s = 0;
for (const i of data) {
  if (i < 5) {
    s += i;
  }
}
s;

let data = [10, 5, 4, 7, 9, 3, 2, 5, 4, 7, 4, 2, 1];
let s = 0;
let i = 0;
while (i < data.length) {
  if (data[i] < 5) {
    s += data[i];
  }
  i++;
}
s;

data.filter((v) => v < 5);
data.filter((v) => v < 5).reduce((a, c) => a + c, 0);

data.map((v) => v < 5);
data.map((v) => (v < 5 ? v : 0));
data.map((v) => (v < 5 ? v : 0)).reduce((a, c) => a + c, 0);

data.map((v) => {
  if (v < 5) {
    return v;
  }
  return 0;
});

// 이렇게 풀이하는 것은 매우 어려운 방법입니다.
data.reduce((a, c) => (c < 5 ? a + c : a), 0);

// forEach- 모르겠다.. 물어보자, 나중에 확인해볼것
let s = 0;
data.forEach((v) => v < 5 && (s += v));
s
// [10, '5', 4, '7', 9, '3', 2, '5', 4, '7', '4', '2', '1']에서 모든 숫자를 다 더해주세요.
// 1. 숫자만 더합니다.
// 2. 문자열도 숫자로 변환하여 더합니다.
// 다양하게 풀어보세요. for, while, filter, map, reduce...

let data = [10, "5", 4, "7", 9, "3", 2, "5", 4, "7", "4", "2", "1"];
let s = 0;
for (const i of data) {
  if (typeof i === "number") {
    s += i;
  }
}
s;
//숫자만 더하기
i = 0
s= 0
while (i<data.length) {
  if (typeof data[i] === 'number'){
    s += data[i]
  }
  ++i
}
s

//문자열도 변환
////

function typeCheck(value) {
  return Object.prototype.toString.call(value).slice(8, -1);
}

let data = [10, "5", 4, "7", 9, "3", 2, "5", 4, "7", "4", "2", "1"];
let s = 0;
for (const i of data) {
  if (typeCheck(i) === "Number") {
    s += i;
  }
}
s;

let data = [10, "5", 4, "7", 9, "3", 2, "5", 4, "7", "4", "2", "1"];
let s = 0;
let i = 0;
while (i < data.length) {
  if (typeof data[i] === "number") {
    s += data[i];
  }
  i++;
}
s;

let data = [10, "5", 4, "7", 9, "3", 2, "5", 4, "7", "4", "2", "1"];
data.filter((v) => typeof v === "number").reduce((a, c) => a + c, 0);

// 난이도가 있습니다.
let data = [10, "5", 4, "7", 9, "3", 2, "5", 4, "7", "4", "2", "1"];
// number인 것만 더하는 것
data.reduce((a, c) => (typeof c === "number" ? a + c : a), 0);
// number와 string 모두 더하는 것이었다면?
data.reduce((a, c) => a + parseInt(c), 0);
// 엔터를 이렇게 칠 수 있기 때문에 가독성 차원에서 이점을 볼 수 있습니다.
data.map((v) => parseInt(v)).reduce((a, c) => a + c, 0);

data.reduce((a, c) => (c === parseFloat(c) ? a + c : a), 0);

// 모음 제거
// https://school.programmers.co.kr/learn/courses/30/lessons/120849

new Array("hello world"); // ['hello world']

"hello world".split("");
Array.from("hello world");

// v in 'aeiou' 이렇게 쓰고 싶을 때에는!
// includes

Array.from("hello world").filter((v) => !["a", "e", "i", "o", "u"].includes(v));

Array.from("hello world")
  .filter((v) => !["a", "e", "i", "o", "u"].includes(v))
  .join("");

function solution(my_string) {
  return my_string.replace(/[aeiou]/g, "");
}

function solution(my_string) {
  result = "";
  for (const s of my_string) {
    if (["a", "e", "i", "o", "u"].includes(s)) {
      continue;
    }
    result += s;
  }
  return result;
}

solution("hello");

// 용돈은 매년 2배씩 오릅니다.
// 올해 받은 용돈은 10000원입니다.
// 나이는 8살입니다.
// 30만원 이상이 되면 용돈이 더이상 오르지 않습니다.
// for와 coninue 문법을 써서 8살부터 35살까지 받은 용돈의 총합을 구하세요.

result = 0;
money = 10000;
for (let age = 8; age < 36; age++) {
  result += money;
  if (money >= 300000) {
    continue;
  }
  money = money * 2;
}
result;

// isNaN을 사용하면 숫자는 false가 나옵니다.
// 문자는 true가 나옵니다.

function solution(my_string) {
  my_string
    .split("")
    .filter((v) => !isNaN(v))
    .map((v) => v * 1)
    .sort((a, b) => a - b);
}

// https://codingdojang.com/scode/393?answer_mode=hide

// str(list(range(10001))).count('8')
// 이 코드는 알고리즘 문제 풀이할 때만 쓰세요.
".".repeat(99);
".".repeat(99).split(".");
"."
  .repeat(99)
  .split(".")
  .map((v, i) => i + 1);
"."
  .repeat(99)
  .split(".")
  .map((v, i) => i + 1);
"."
  .repeat(99)
  .split(".")
  .map((v, i) => i + 1)
  .join("")
  .split("")
  .filter((v) => v === "8").length;

let s = "";
for (let i = 0; i < 101; i++) {
  s += i;
}
s.split("").filter((v) => v === "8").length;

Array(100)
  .fill(0)
  .map((v, i) => "" + i);

Array(101)
  .fill(0)
  .map((v, i) => "" + i) // 안에서 메서드 체이닝을 한 번 더 할 수 있지만 복잡도만 상승할 것 같아 실행하지 않았습니다.
  .join("")
  .split("")
  .filter((v) => v === "8").length;

////////
let a = [10, 20, 30, 40];
let b = [100, 200, 300, 400];
a.map((v, i) => [v, b[i]]);

let a = [10, 20, 30, 40];
let b = [100, 200, 300, 400];
let c = [1000, 2000, 3000, 4000];
a.map((v, i) => [v, b[i], c[i]]);

const zip = (a, b) => a.map((v, i) => [v, b[i]]);

let s = [1, 3, 4, 8, 13, 17, 20][(1, 3, 4, 8, 13, 17, 20)][
  (3, 4, 8, 13, 17, 20)
];
// python에서 sort를 했을 때 주었던 key function를 여기서 구현해볼겁니다.

const zip = (a, b) => a.map((v, i) => [v, b[i]]);
let s = [1, 3, 4, 8, 13, 17, 20];

zip(s, s.slice(1));
zip(s, s.slice(1)).sort((a, b) => a[1] - a[0] - (b[1] - b[0]));
zip(s, s.slice(1)).sort((a, b) => a[1] - a[0] - (b[1] - b[0]))[0];

////////////////////////

let s = [1, 3, 4, 8, 13, 17, 20];
for (let i = 0; i < s.length; i++) {
  console.log(s[i]);
}

let s = [1, 3, 4, 8, 13, 17, 20];
for (let i = 0; i < s.length - 1; i++) {
  console.log(s[i + 1] - s[i]);
}

let s = [1, 3, 4, 8, 13, 17, 20];
for (let i = 1; i < s.length; i++) {
  console.log(s[i] - s[i - 1]);
}

// 최솟값을 찾아내려면 먼저 최댓값을 저장해라!
// 최댓값을 찾아내려면 먼저 최솟값을 저장해라!
let s = [1, 3, 4, 8, 13, 17, 20];
let min = Infinity;
let index = 0;
for (let i = 0; i < s.length - 1; i++) {
  if (s[i + 1] - s[i] < min) {
    min = s[i + 1] - s[i];
    index = i;
  }
}
console.log(s[index], s[index + 1]);

// 10번
// 엘리베이터 최대 몸무게 500kg입니다.
// 다음 친구들이 엘리베이터를 탔을 때 최대로 탑승할 수 있는 인원수를 구하세요.
let weight = [60, 50, 55, 60, 77, 88, 56, 67, 89, 45, 55, 45];

weight.sort((a, b) => a - b);
sum = 0;
count = 0;
for (let i of weight.sort((a, b) => a - b)) {
  if (sum + i <= 500) {
    sum += i;
    count += 1;
  }
}
sum;
count;
