const babaYaga = {
  name: "John Wick",
  age: 53,
  from: "벨라루스",
  askingHim: function () {
    console.log("Yeah, I'm thinking I'm back!");
  },
};

//최신문법사용
const babaYaga = {
  name: "John Wick",
  age: 53,
  from: "벨라루스",
  askingHim() {
    console.log("Yeah, I'm thinking I'm back!");
  },
};

const a = "hello";
const b = "world";
const data = {
  a,
  b,
  c: "!!",
  d: [10, 20, 30],
};

// 값추가, CRUD (Create, Read, Update, Delete)
// 데이터추가(append), 데이터 업데이트(update)
const human = {
  name: "hojun",
  age: 98,
};
human.height = 250;
human["height"] = 250;
human;

const human2 = {
  ...human,
  age: 10,
};

// human.keys() // 이 메서드가 없습니다.
Object.keys(human); //이렇게 해줘야 함
Object.values(human);
Object.entries(human); // human.items()와 같다.
