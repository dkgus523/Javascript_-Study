# 1강 - 학습 가이드

# 2강 - 자바스크립트의 탄생과 플랫폼

# 3강 - 실습환경

- 편집도구
  - Adobe DreamWeaver
  - Aptana Studio
  - Coda
  - TextMate
  - Visual Studio
  > Visual Studio Code 사용할 예정

- 브라우저
  - Apple Safari
  - Google Chrome
  - Microsoft Internet Explorer
  - Mozilla Firefox
  > Google Chrome 사용할 예정

 
# 4강 - 코드 작성과 Live Server 설치하기

- html 기본 코드 
  - html:5 를 입력하면 자동완성이 된다.

- Live Server 설치하기
  1. 파일 > 기본설정 > 확장 메뉴 (또는 Ctrl + Shift + X)를 클릭한다.
  2. Live Server를 검색한 후 설치한다.
  3. 잘되는지 확인하고 싶으면, html 파일 생성한다.
  4. 좌측 코드 탭을 우클릭한 후 Open With Live Server 메뉴(또는 Alt + L 입력 후 Alt + O)를 클릭하여 확인하면 된다.

# 5강 - 데이터 객체와 래퍼(Wrapper) 클래스

- 일반적인 언어의 값의 종류와 변수
  - var : 변수 선언  (정수, 실수, 문자, 문자열)
  - 기본형식이 없음
- Wrapper 클래스와 Wrapping 방식

    ```js
    var x = 3;
    var x = new Number(3);

    var x; -> undefined
    x = 3; -> number
    ```
    undifined : 이름은 있으나 아직 객체를 할당하지 않은 상태 (Nullpointer)

- 변수의 초기값 비교

    ```js
    var x;
    alert(x == "undefined");
    -> 거짓

    var x;
    alert(x == undefined);
    -> 참
    ```

# 6강 - 배열(Array)생성과 사용하기

- push / pop 메소드를 이용한 데이터 관리 : Stack
  
  ```js
  var nums = new Array();

  nums.push(5);
  alert(nums);  //5

  nums.push(10);
  alert(nums);  //5,10

  nums.push(21);
  alert(nums);  //5,10,21

  var n1 = nums.pop();
  alert(nums);  //5,10

  var n2 = nums.pop();
  alert(nums);  //5

  var n3 = nums.pop();
  alert(nums);  //

  ``` 
- 인텍스를 이용한 데이터 관리 : List

    ```js
    var nums = new Array();

    nums[0] = 5;
    alert(nums[0]);  //5

    nums[1] = 10;
    alert(nums[1]);  //10

    nums[2] = 21;
    alert(nums[2]);  //21


    var nums = new Array();

    nums[3] = 5;
    alert(nums);  // , , ,5

    alert(nums.length);  //4
    ```

# 7강 - 배열(Array)초기화와 조작하기

- 배열 객체 초기화

```js 
 var nums = new Array();
 var nums = new Array(5);
 var nums = new Array(5,10,21);
 var nums = new Array(5,10,21,"hello");
 alert(typeof nums[3]);   //nums[3]의 타입은 무엇? 

var nums = new Array(5,10,21,"hello",new Array(2,3,4));
alert(nums[4][1]);  //3
```

- splice() 메소드를 이용한 데이터 관리 : List
  
```js
 var nums = new Array(5,10,21,"hello");

 nums.splice(1)   //1번째부터 다 지워라
 nums.splice(1,1) //1번째부터 하나만 지워라
 nums.splice(1,2) //1번째부터 두개 지워라
 nums.splice(1,1,"hoho")  //1번째부터 하나 지우고 hoho로 변경해라
```

# 8강 - Object 객체

- 키를 기반으로 데이터를 저장해야 할 때

```js
 var exam = new Object();
 exam.kor = 30;
 exam.eng = 70;
 exam.math = 80;

 alert(exam.kor + exam.eng);
```
- 키를 이용한 데이터 관리 : Map

```js
 var exam = new Object();

 exam["kor"] = 30;
 exam["eng"] = 70;
 exam["math"] = 80;

 alert(exam["kor"]); 
```

# 9강 - JSON

- Javascript 데이터 객체와 JSON 생성 방법

|  | JavaScript Object | JavaScript Object Notation(JSON)
|---|---|---|
|Boolean | var n = new Boolean(true); | var n = true;
|Number | var n = new Number(3); | var n = 3;
|String | var s = new String("hello"); | var s = "hello"; var s = 'hello';
|Array | var ar = new Array(); | var ar = [];
|Object | var ob = new Object(); | var ob = {};

```js
var exam = {"kor":30, "eng":70, "math":80};

console.log(exam.kor + exam.eng);   //100
```

```js
var exam = {"kor":30, "eng":70, "math":80};
var ar = [3,4,5,6,exam,[7,8,9]];

console.log(ar[5][1]);   //8
```

- 데이터를 구분하기 위한 표현방법

```js
  var notices = [
                  {"id":1, "title":"hello json"},
                  {"id":2, "title":"hi json"},
                  {"id":3, "title":"json is ..."}
                ];

notices[1] = {"id":2, "title":"hi json"}
```
