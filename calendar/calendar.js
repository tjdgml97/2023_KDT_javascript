// JS 구현
const calendar = document.querySelector("table");
const date = document.querySelector("#date");
let input = document.getElementById("content");
// const ptag = calendar.getElementsByTagName()
// 클릭 된 요소를 저장하기 위한 전역 변수
let targetEl;
let targetday;

let isAdd = false;

// ToDo 1. 날짜칸 클릭 input 입력


calendar.addEventListener("click",function(e) {
  targetEl="";
  targetday = "";
  if (e.target.tagName === "P") {
    targetEl= e.target ;
    targetday =e.target.textContent;
    console.log(e.target);
    console.log(e.target.innerText);
  }
  date.value = `2023년 2월 ${targetday}일`;
})


function writeSchedule() {

  if(input.value === "" && date.value === "") {
    input.setAttribute("placeholder" , "내용을 입력하세요! ");
    date.setAttribute("placeholder" , "날짜를 선택하세요 ")
    return ; 
  } else if (input.value === "") {
    input.setAttribute("placeholder", "내용을 입력하세요!");
    return ;
  } else if (date.value === "") {
    date.setAttribute("placeholder" ,"날짜를 선택하세요!");
    return ;
  }
  
  console.log("input 내용:")
  console.log(document.getElementById("content").value);

  const content = document.createElement("div");
  content.setAttribute("id" ,"schedule");

  // textContent
  content.textContent= input.value;
  console.log(content);




  targetEl.parentNode.append(content);

  input.value= "";
  isAdd = true;

    // 질문 이방식? 
  //1.div 만들기 content =< div> 내용 <div> 

  let schedule = document.querySelector('#schedule');

  schedule.addEventListener("click" , function(e){

      console.log(schedule);
      e.target.remove();
  
    // if(e.target.value!="") {
    // console.log(e.target.value);
    // console.log("remove");
    // }
  })




  // console.log(parent);
  // let content = targetEl.createElement("div")
  // content.innerText = "hihi";

  // targetEl.innerText = <div>hihi</div>;
  // setAttribute("innerText","background-color:orange")
  // document.getElementById("p").
}




// 내용을 적으면 작성버튼을 누르면  value를 
// 변수에 넣고
// 그 변수를 td 태그안에 보여지게함 

// if(schedule!=undefined) {
//   console.log("hi")
// schedule.addEventListener("click" , function(e){
//     console.log("hi");
//     e.target.remove();

//   // if(e.target.value!="") {
//   // console.log(e.target.value);
//   // console.log("remove");
//   // }
// })
// }

// if(schedule!=undefined) {
//   console.log("hi")
// schedule.addEventListener("click" , function(e){
//     console.log("hi");
//     e.target.remove();

//   // if(e.target.value!="") {
//   // console.log(e.target.value);
//   // console.log("remove");
//   // }
// })
// }