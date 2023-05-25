// advance 문제입니다. 오늘은 안배운 내용이 조금 섞여 있습니다. 다만 충분히 여러분이 배우지 않아도 지금까지 배운 것으로 풀 수 있는 문제입니다.
// 아래와 같은 코드를 console창에 입력해보면 데이터를 가지고 옵니다.

fetch("http://test.api.weniv.co.kr/mall")
  .then((data) => data.json())
  .then((data) => console.log(data));

//     다음 중괄호를 완성하여서

// 1.전체 product의 갯수와
// 2.전체 가격의 평균을 구해주세요.

// fetch('http://test.api.weniv.co.kr/mall')
//     .then(data=>data.json())
//     .then(data=> {
//     // 여기에만 코딩을 해주셔야 합니다!
//     })

fetch("http://test.api.weniv.co.kr/mall")
  .then((data) => data.json())
  .then((data) => {
    // 여기에만 코딩을 해주셔야 합니다!
    // console.log(Object.keys(data).length)

    //2. 전체가격의 평균을 구해주세요.
    let total = 0;
    let num_product = 0;
    for (let i = 0; i < Object.keys(data).length; ++i) {
      total += data[String(i)]["price"];
      num_product += data[String(i)]["stockCount"];
    }
    console.log("전체 product 갯수: ", num_product);
    console.log();
    console.log(
      "전체 가격의 평균",
      Math.round(total / Object.keys(data).length)
    );
  });
