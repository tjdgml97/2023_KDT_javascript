const inputTask = document.querySelector(".input-task");

function addTodo() {
  if(inputTask==="") inputTask.setAttribute("placeholder","내용을 입력하세요");
}

// // 클릭이 발생했을때 함수 실행 , event,함수 
// const addbtn = document.querySelector('');

// function deleteTask(t) {
//   t.parentNode.remove();
// }

// function addList(){
//   // input tas - input 에 값이 아무것도 없으면 - placeholder(속성)변경 
//   // return - > if else 대신 if 문에서 return 으로 종료 , 
//   if(inputTask.value==="") {
//     inputTask.setAttribute("placeholder","내용을 입력하세요");
//     return;
//   }

//   const addLi = document.createElement("li")
//   // input 인데 속성이 check
//   const checkBtn = document.createElement("input");
//   checkBtn.setAttribute("type","checkbox");
//   // event 가 발생할떄 - 어떤이벤트, 함수 
//   checkBtn.addEventListener("click",function(){
//     if(checkBtn.checked===true){
//       checkBtn.parentNode.style.textDecoration = "line-through";
//     } else{
//       checkBtn.parentNode.setAttribute("style","text-decoration: none")
//     }
//   })


//   const deleteBtn = document.createElement("button");
//   deleteBtn.textContent = "삭제";

//   // 방법2 
//   // 속성을 설정 온클릭 -> 디스를 전달
//   //Q1
//   deleteBtn.setAttribute("onclick","deleteTask(this)")

//   // 방법 1
//   // deleteBtn.addEventListener("click",function(){
//     // event target 사용 - 어떤 delete버튼이 사용되었는지 확인
//     // 부모 요소인 li 지워짐 
//     // e.target.parentNode.remove();
//   // })
//   // append child 는 붙지 않음 
//   addLi.append(checkBtn)
//   addLi.append(inputTask.value) //글자 컨텐츠 붙임 
//   addLi.append(deleteBtn)


//   todoList.appendChild(addLi);


//   // Q2
//   inputTask.value="";  
//   addbtn.addEventListener("click",addList);
//   addbtn.addEventListener("click",addList);

//   // 
// }

// addbtn.addEventListener("click",addList);
