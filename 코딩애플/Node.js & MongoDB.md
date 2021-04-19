# Node.js + MongoDB 2시간만에 웹서버 개발하기

## 0강. 시작하기 전 사전지식
> 만들 것
- 할일 메모장
  - 글목록 읽기 기능
  - 글 발행
  - 수정
  - 삭제
  
- 커리큘럼 요약
  - Node.js
  - NoSQL Database (MongoDB)
  - DB에 데이터 저장/출력법
  - 서버 제작(API) + 서버 배포, npm, bootstrap 등

- 사전에 알면 좋은 것들
  - HTML/CSS 기초
  - JavaScript 기초 문법 

## 1강. 서버에 대해 완전쉽게 설명해드림

- 서버란?
  - 클라이언트에게 네트워크를 통해 정보나 서비스를 전달하는 컴퓨터 / 클라이언트 요청에 의해 서비스 제공함 
  - 요구를 하면 가져다 주는 것
  - 요청을 받으면 요청한 내용 보내주는 프로그램

- 요청 4개 방식이 있음
  - 1. 읽기 GET (ex. '이런 페이지 읽고싶음!' 이라는 요청 가능)
  - 2. 쓰기 POST (ex. 댓글 작성 / 블로그 포스트 작성)
  - 3. 수정 PUT
  - 4. 삭제 DELETE 

## 2-1강. Node.js가 뭔지 알아보자

- JavaScript 라는 언어(HTML 조작과 변경)
  - 웹페이지를 다이나믹하게 바꿔주기 가능
  - HTML 조작이 가능하기 때문 
  - 자바스크립트 해석은 브라우저가 한다. 

 - HTML 
   - 웹페이지에 글쓰고 그림넣는 언어
   - 특징) 안움직임, 글넣고 그림넣고가 끝임

- Node.js 
  - 브라우저 내에서 말고도 다른 환경에서도 JavaScript 실행할 수 있게 도와줍니다.

## 2-2강. Node.js를 쓰는 이유

- 일반 서버 VS Node.js

    일반 서버는 요청 하나하나 받고 처리해서 요청이 많거나 오래걸리는 요청이 있으면 멈추거나 대기시간이 발생한다.

    Node.js 서버는 요청이 많거나 오래걸리는 요청이 있어도 멈추거나 요청 대기시간이 없다.

- Node.js의 강점
  - Non-blocking 덕분에 SNS, 채팅서비스에 자주 사용
  - 코드가 매우 짧고 쉬워서 빠른 개발가능

## 3강. 요즘 Express와 Node.js 설치법(환경설정 등)

- Node.js 설치 (10버전 이상) & 실행
  - Node.js 실행해보려면 명령프롬프트(cmd)를 켜서 `node -v`입력하면 설치한 버전이 나옴 
  - 그 후 node 입력하면 node 실행 가능
- VS code 에디터 설치
  -  https://code.visualstudio.com/ 이곳에서 무료로 다운하면 된다.
  -  폴더 흰바탕에 우클릭 - Open with Code 
  -  바탕화면에 폴더 생성 후 VS code에 Open Folder로 연다.

- 쌩코딩이 아니라 express라는 라이브러리를 써서 서버를 만들 것이다.

  * 라이브러리 : 코드를 쉽게 짜기 위해 빌려쓰는 코드 모음집

- express 설치
  1. 터미널 열기
  2. npm init 입력해서 셋팅하기
     - npm은 라이브러리 설치를 도와주는 도구이다.
  3. 엔터치다가 entry point만 내가 원하는 파일명으로 변경해준다.
    - package.json : 어떤 라이브러리를 썼는지 기록해주는 곳
  4. npm install express 입력하여 설치

## 4강. Node + Express로 웹서버 재빨리띄우기

- 메인파일인 server.js을 만든다.
- node server.js 를 입력해서 서버 연결 확인하기

- GET 요청을 처리하는 기계 제작하기
  - 누군가가 /pet 으로 방문을 하면 pet 관련된 안내문을 띄워주자
  - 누군가가 /beauty 으로 방문을 하면 beauty 관련된 안내문을 띄워주자

## 5강. Node.js 서버에서 HTML 파일 전송하는 법 + nodemon 자동화

- nodemon으로 서버 재실행 자동화하기
  - npm install -g nodemon
  - nodemon server.js

- /블라블라 접속시 HTML 파일을 보내보자


## 6강. 요즘은 복붙만 잘하면 HTML/CSS 디자인 끝

- HTML/CSS 하드코딩할 시간이 없기에 부트스트랩 라이브러리를 이용해서 쉽게 만들자!
  - https://getbootstrap.kr/ 들어간다
  - 버전은 4.4버전으로 클릭한다.
  - Get started 들어가서 Starter template 예제 index.html에 복붙한다.
