let aa={
    "name":"홍길동",
    "age":20,
    "job":"student"
}; //{ }이거의 뜻이 배열이 아니라 객체임 그래서 객체를 문자열로 변환시키는 과정

let bb=JSON.stringify(aa); // 객체를 문자열로 바꾸는 과정
console.log(aa);//문자열로 바꾼 변수 bb를 호출