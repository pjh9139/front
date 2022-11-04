'use strict'

// 오늘날짜를 전역변수로 생성...
const today = new Date();
const year = today.getFullYear(); // 연도 4자리
const month = today.getMonth() + 1; // 월 (기존월보다 1자리 작다 0월부터 만들어서)
const date = today.getDate(); // 일
const hour = today.getHours(); // 시
const minute = today.getMinutes(); // 분
const second = today.getSeconds();// 초
const yymmdd = year + "-" + month  + "-" + date + " :" + hour + ":" + minute + ":" + second;

// 시스템 날짜 가져와서 폼에 출력하기
function dateBring(){
  document.getElementById("startDate").value = yymmdd;
}

// 날짜비교함수
function compareDate(){
  let start = document.getElementById("startDate").value;
  let end = document.getElementById("endDate").value;

  const startDate = new Date(start);
  const endDate = new Date(end);

  let result;

  if(isSameDay(startDate,endDate)){
    result = "입력된 두날짜가 같습니다"
    document.getElementById("demo").innerHTML = result;
  }
  else {
    compareDate2();
  }
}

// 날짜 같은지 비교함수 ===(완전일치(타입))
function isSameDay(day1,day2){
  return  day1.getFullYear() === day2.getFullYear() &&
  day1.getMonth() === day2.getMonth() &&
  day1.getDate() === day2.getDate()
}

// 날짜형식 데이터를 시간형식으로 바꿔서 비교
function compareDate2(){
  let start = document.getElementById("startDate").value;
  let end = document.getElementById("endDate").value;

  const startDate = new Date(start);
  const endDate = new Date(end);

  let elapsedTime = endDate.getTime() - startDate.getTime();
  let strDate = elapsedTime / (60*60*24*1000)
  strDate = strDate.toFixed(0);
  
  document.getElementById("demo").innerHTML = "두날짜의 차이는"+ strDate + "일 입니다.";
}