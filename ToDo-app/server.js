 // 기본 셋팅
 const express = require('express');
 const app = express();

 app.listen(8088, function() {
     console.log('listening on 8088')
 });
 //listen(서버띄울 포트번호, 띄운 후 실행할 코드 )


 //누군가가 /pet 으로 방문을 하면 pet관련된 안내문을 띄워주자
 app.get('/pet', function(요청, 응답) {
     응답.send('펫용품 쇼핑할 수 있는 페이지입니다.');
 });


 //누군가가 /beauty 으로 방문을 하면 beauty관련된 안내문을 띄워주자
 app.get('/beauty', function(요청, 응답) {
     응답.send('뷰티용품 쇼핑할 수 있는 페이지입니다.');
 });


 // /블라블라 접속시 HTML 파일을 보내보자
 app.get('/', function(요청, 응답) {
     응답.sendFile(__dirname + '/index.html')
 });