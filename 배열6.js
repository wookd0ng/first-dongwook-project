let express = require("express"); // 모듈 추출
let mysql = require('mysql');
// 정보를 담은 파일
const {clearCookie} = require("express/lib/response");
// 연결을 위한 정보 불러오기
let connection = mysql.createConnection({
 host : 'localhost',
 user : 'lee',
 password : 'lee',
 database : 'scott'
});
// 서버에 대한 생성
let app = express();
// 값에 대한 부분, 리스너에 대한 이벤트
app.get("/", function(request, response){
 // SQL문 실행
 connection.query('SELECT id, 이름, pay from scott.hakjum where pay >= 70000', function(err, rows, fields){
 connection.end();
 if(!err){
 response.send(rows);
 console.log("hakjum table 데이터 : ", rows);
 } else {
 console.log("hakjum Table Query Error!.");
 }
 });
});
// 서버 실행, port 번호, json 형태로 뿌려짐
app.listen(52273, ()=>{
 console.log("Server is running at http://127.0.0.1:52273"); 
})