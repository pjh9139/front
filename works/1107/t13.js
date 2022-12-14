'use strict';

// 클래스 만들기
class Member {
  // 필드명(getter 와 setter을 통해서 값의 처리때는 필드를 선언하지 않는다.)
  // name;
  // age;

  //생성자
  constructor(name, age, color) {
    this.name = name;
    this.age = age;
    this.color = color;
  }
  //getters 생성
  get name(){
    return this._name;
  }
  get age(){
    return this._age;
  }
  get color(){
    return this._color;
  }


  //setters 생성
  set name(name){
    this._name = name;
  }
  set age(age){
    this._age = (age < 1) ? age * (-1) : age;
  }
  set color(color){
    if(color=="껌정"||color=="블랙"||color=="흑색"||color=="까망") {
      this._color = "검정"
    }
    else{
      this._color = color;
    }
  }

  // 메소드
  memprint(){
    console.log("성명 : " + this.name + " , 나이 : " + this.age + " , 색상 : " + this.color);
  }
}
