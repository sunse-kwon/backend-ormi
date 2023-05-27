// Document Object Model
// dom 은 document 찍고 나온 모든것들, DOM != javascript
// dom is API , what is api? application programming interface.

const element1 = document.querySelector("#one");
const element2 = document.querySelector("h1");
const element3 = document.querySelector(".two");

// 해당하는 Id를 가진 요소에 접근하기
document.getElementById();

// css 선택자로 단일 요소에 접근하기
document.querySelector("selector");

const element6 = document.querySelectorAll("li");
element6.forEach((element) => {});

element6.forEach((element, index) => {
  element.innerText = `hello world! ${index}`;
});

const btnRed = document.querySelector("button");
const title = document.querySelector("#one");

btnRed.addEventListener("click", () => {
  title.classList.toggle("red");
});

const sectionTitle = document.createElement("h2");
sectionTitle.innerText = "hello";

document.querySelector("body").appendChild(sectionTitle);

const myBtn = document.querySelector("body");
const myUl = document.createElement("ul");

for (let i = 0; i < 5; i++) {
  const myLi = document.createElement("li");
  myLi.innerText = "hello!";
  myUl.appendChild(myLi);
}
body.appendChild(myUl);

const body = document.querySelector("body");
const myimg = document.createElement("img");
// const idAttr = target.getAttribute('id');
myimg.setAttribute(
  "src",
  "https://img.wendybook.com/image_detail/img159/159599_01.jpg"
);
body.append(myimg);

const btn = document.createElement("button");
btn.innerText = "눌럿!";
const body = document.querySelector("body");
body.append(btn);

btn.addEventListener("click", (event) => {
  console.log(event);
  console.log(event.target);
  console.log(event.currentTarget);
  console.log(this);
});
