// • 클래스가 orange 인 DOM 요소를 선택 해서 출력해 주세요
// • ID 가 skyblue 인 DOM 요소를 선택하여 출력해 주세요
// • Ul 리스트의 2번째 자식 li 요소를 선택한 다음, 해당 DOM 요소에 orange 클래스 를 부여해 한 다음 출력해 주세요

const orangeElement = document.querySelector(".orange");
console.log(orangeElement);

let skyblueElement = document.getElementById("skyblue");
console.log(skyblueElement);

let secondListEl = document.querySelector('li:nth-child(2)');
secondListEl.classList.add("orange");

console.log(secondListEl);


// orange 클래스를 가지는 첫번째 DOM 요소를 선택한 다음, 
//해당 요소가 orange 클래스를 가지는지 if 문으로 확 인 후, 
if(orangeElement.classList.contains("orange")){
  console.log(orangeElement);
  orangeElement.classList.remove("orange");
  console.log(orangeElement);
}
//가지고 있으면 orange 클래스를 제거해 주세요
