let box1El = document.querySelector(".box1");
let box2El = document.querySelector(".box2");
let input = document.querySelector("input");

box1El.innerHTML = "<a href='#'>네이버로 이동</a>"
box2El.innerText =  "박스내용 및 스타일 변경" ; 
box2El.setAttribute("style", "background-color:orange");
input.setAttribute("placeholder" , "아이디를 입력하세요.");