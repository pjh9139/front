'use strict'

// 오늘날짜를 전역변수로 생성...

const today = new Date();
const year = today.getFullYear(); // 연도 4자리
const month = today.getMonth() + 1; // 월 (기존월보다 1자리 작다 0월부터 만들어서)
const date = today.getDate(); // 일
const hour = today.getHours(); // 시
const minute = today.getMinutes(); // 분
const second = today.getSeconds();// 초
const yymmdd = year + " - " + month  + " - " + date + " : " + hour + " : " + minute + " : " + second;

// 표준날짜 출력함수
function fCheck1(){
  let date1 = new Date();
  document.getElementById("demo").innerHTML = date1;
}

// 편집날짜 함수
function fCheck2(){
  let strDate = yymmdd;
  demo.innerHTML = strDate;
}

// 쉬운날짜 함수
function fCheck3(){
  let str = "";
  str += year + "년 ";
  str += month + "월 ";
  str += date + "일 ";
  // 요일 : 0 일요일 1: 월요일.... (6)토요일
  // str += today.getDay() + "요일";  //요일 : getDay()
  let week = ["일","월","화","수","목","금","토"];
  str += week[today.getDay()] + "요일 ";
  str += hour + "시 "
  str += minute + "분 "
  str += second + "초 "

  demo.innerHTML = str;
}

// 시간출력 함수
function fCheck4(){
  // let strdate = today.getTime();
  let strTime = today.getMilliseconds();
  strTime = (today.getMilliseconds()/1000 + "초")
  let strDate = strTime;
  demo.innerHTML = strDate;
}

// 해당월의 마지막일자꺼내기 함수
function fCheck5(){
  let year = document.getElementById("year").value;
  let month = document.getElementById("month").value;
  let strDate = new Date(year,month,0); // new Date (년,월,일,시,분,초);
  strDate = year+"년의"+month+"월의 마지막 일자는?" + strDate.getDate() + "일 입니다";
  demo.innerHTML = strDate;
}

function fCheck6(){
  let strDate = year+"-"+month+"-" + date;
  let fmtDate = strDate.split("-");
  let yy = fmtDate[0];
  let mm = ('0'+fmtDate[1]).slice(-2);
  let dd = ('0'+fmtDate[2]).slice(-2);
  strDate = yy + "-" + mm + "-" + dd;

  // let year = document.getElementById("year").value;
  // let month = document.getElementById("month").value;
  // let today = date
  // if(today<10){
  //   switch(today){
  //     case 1 : today = "01";
  //     case 2 : today = "02";
  //     case 3 : today = "03";
  //     case 4 : today = "04";
  //     case 5 : today = "05";
  //     case 6 : today = "06";
  //     case 7 : today = "07";
  //     case 8 : today = "08";
  //     case 9 : today = "09";
  //   }
  // }
  demo.innerHTML = strDate;
}
