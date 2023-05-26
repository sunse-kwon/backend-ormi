const arr1 = [];
const arr2 = [1, 2, 3];
const arr3 = new Array(4, 5, 6);

const arr = [[10, 20], 2, 3, 4, 5];
arr[0];
arr[0][0];
arr.length;
arr.pop(); //안에 무슨값이 들어가던 마지막값이 빠져나옴. (index, value 와 무관합니다.) 파이썬과 다름.
arr.push(); //마지막에 값을 넣게 됩니다.

const arr4 = [1, 2, 3, 4, 5];
arr4.shift();
arr4.unshift(100);

const arr5 = [1, 2, 3, 4, 5];
//splice() method는 배열의 요소를 추가, 제거, 또는 교체
arr5.splice(1, 0, 100);
arr5;

const arr6 = [10, 20, 30, 40, 50, 60];
arr6.slice(2, 5); //arr[2:5]와 같다 in python

const arr7 = [1, 2, 3, 7, 8, 5];
//사전식 정렬입니다.(문자열 정렬처럼 봅니다.)

//오름차순 - 외울 것 아래꺼
arr7.sort((a, b) => a - b);

//내림차순 - 외울 것 아래꺼. 
arr7.sort((a, b) => b - a);

//forEach 자주사용합니다., 반복만합니다.
//새로운 array를 만들고 싶다면 map 을 사용해 주세요.
const arr8 = [1, 11, 2, 3, 7, 8, 22, 5];
arr8.forEach((item, index, arr) => {
  console.log(item);
  console.log(index);
  console.log(arr);
});

//실무에서는 이렇게 많이 사용한대요
const arr9 = [1, 11, 2, 3, 7, 8, 22, 5];
arr9.forEach((v, i) => {
  console.log(v); //value
  console.log(i); //index
});

/* 
<body>
    <div id="0"></div>
    <div id="1"></div>
    <div id="2"></div>
    <div id="3"></div>
    <div id="4"></div>
    <div id="5"></div>
    <div id="6"></div>
    <div id="7"></div>
</body> 
*/
const arr10 = [1, 11, 2, 3, 7, 8, 22, 5];
arr10.forEach((v, i) => {
  const tag = document.getElementById(i);
  tag.innerHTML = v;
});

const arr11 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newArr = arr11.filter((el) => el % 2 === 0);
console.log(newArr);

// https://school.programmers.co.kr/learn/courses/30/lessons/120583?language=javascript
function solution(array, n) {
  answer = array.filter((v) => v == n).length;
  return answer;
}

[].reduce((a, c) => a + c, 0);

const arr12 = ["hello", "world", "hojun"];
arr12.join("!"); // hello!world!hojun

//map은 아래 형태보다, 데이터를 뽑아내는 형태로 많이 사용합니다.
[1, 2, 3, 4]
  .map((x) => x ** 2)

  [([10, 20], [20, 30], [30, 40])].map((v) => v)
  [([10, 20], [20, 30], [30, 40])].map((v) => v[0])

  [
    //성이 3글자라는 전제를 하고 3글자씩만 뽑아내기
    ("leehojun", "sinhojun", "kimhojun")
  ].map((v) => v.slice(0, 3))

  [("leehojun", "sinhojun", "kimhojun")].map((v, i) => [v.slice(0, 3), i])

  [
    //////

    ({
      name: "hojun",
      age: 10,
    },
    {
      name: "gildong",
      age: 20,
    })
  ].map((x) => x.age)

  [
    //동일코드
    ({
      name: "hojun",
      age: 10,
    },
    {
      name: "gildong",
      age: 20,
    })
  ].map((x) => x["age"])

  [
    ({
      name: "hojun",
      age: 10,
    },
    {
      name: "gildong",
      age: 20,
    })
  ].map((v, i, obj) => {
    console.log(v, i, obj);
    return v;
  });

let data = [
  {
    name: "lee hojun",
    age: 10,
  },
  {
    name: "kim junho",
    age: 20,
  },
  {
    name: "sin sunghun",
    age: 30,
  },
];
data.map((v, i) => [i, v["name"].split(" ")[1], v["age"] - 1]);
