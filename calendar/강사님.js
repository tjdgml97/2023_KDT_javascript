
function calendarTask(e) {
  console.log(e);
  // 날짜 input - value 값으로 넣음 
}

// 어떤 요소 클릭했는지 확인 
if(e.target.tagName==="p" ) {
  date.value = `2023 2 ${e.target.textContent}`
  // td의 위치- > 부모의 위치 확인 : e.target.parentNode ->global 에 저장 
}else if ( e.target.tagName ==="TD") {
  const day = e.target.children
}