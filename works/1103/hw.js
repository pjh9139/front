'use strict';

function reg(){
  // 정규표현식

  const regexmid = /\W/g;    // 영문자/숫자/_를 포함하고 있지 않느냐?
  const regexname = /^[a-zA-Z가-힣]{2,20}$/g;    // 성명은 한글 영문만 입력가능하게 길이는 2~20자까지
  const regextel = /[^0-9]/g;    // 숫자만 입력가능하게
  const regexemail = /[a-zA-z0-9]+@[a-zA-z]+\.[a-zA-z]/g;    //이메일 형식에 맞도록 체크(a@b.com)
  const regexAll = /\s/g;  //문장안에 공백 또는 탭을 포함하고 있느냐?


  let name = document.getElementById("name").value;
  let mid = document.getElementById("mid").value;
  let pwd = document.getElementById("pwd1").value;
  let tel = document.getElementById("tel").value;
  let email = document.getElementById("email").value;

  if(regexAll.test(name)|regexAll.test(mid)|regexAll.test(pwd)|regexAll.test(tel)|regexAll.test(email)){ 
    alert("입력창에 ' ',공백은 넣을수 없습니다.");
    return false;
  }
  else if(name.trim() == ""|mid.trim() == ""|pwd.trim() == ""|tel.trim() == ""|email.trim() == ""){ 
      alert("모든칸을 입력해주세요");
      return false;
    }
    else if(regexmid.test(mid)){
    alert("아이디는 영문 숫자 특수문자만 사용가능합니다");
    return false;
  }
    else if(!regexname.test(name)){
    alert("성명은 한글 영자내 2~20자만 가능합니다");
    return false;
  }
    else if(regextel.test(tel)){
    alert("전화번호는 숫자만 입력해주세요");
    return false;
  }
    else if(!regexemail.test(email)){
    alert("이메일 형식에 맞게 입력해주세요");
    return false;
  }

  alert("회원가입 성공!");
}