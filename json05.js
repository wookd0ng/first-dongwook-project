//문자열을 객체로 변환시키는 과정
//문자열은 []이걸 쓴다 배열

let aa=`{
    "name":"홍길동",
    "age":20,
    "job":"학생"
}`

let bb=JSON.parse(aa); //문자열을 객체로 변환시키는 함수 parse
console.log(`이름은 ${bb.name}, 나이는 ${bb.age}, 직업은 ${bb.job}`); //객체로 바꾼 bb를 호출하는 과정