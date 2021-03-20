# 10강 - eval 함수와 JSON 파싱하기

- Open 데이터 구조로 사용되는 JSON
  - eval : 문자로 표현 된 JavaScript 코드를 실행하는 함수

```js
 var data = '[ \ 
    {"co":0.6,"so2":0.006,"o3":0.009,"no2":0.029,"pm10":56},
    {"co":0.7,"so2":0.005,"o3":0.007,"no2":0.046,"pm10":69},
    {"co":0.6,"so2":0.006,"o3":0.014,"no2":0.03,"pm10":49}
 ]';

 eval("var ar =" + data + ";");

 console.log(ar[0].co);

 eval('var x = 30;');

 console.log(x);

```
   
# 11강 - JSON파서를 이용한 파싱

```js

 var data = JSON.parse('{id:1, title:"aaa"}');

 console.log(data.title);

 --> 오류! parse 문법규칙에 맞지 않게 작성해서, 키값을 문자열 형태로 바꿔줘야한다.

 변경 후)
 var data = JSON.parse('{"id":1, "title":"aaa"}');

 console.log(data.title);

```

- 코드로 문자열 형태로 변환하는 방법
  
```js
 var data2 = {id:2, title:"bbb"};

 var json = JSON.stringify(data2);

 alert(json);
```

# 12강 - 자바스크립트 연산자

- 연산자 
  - 기본값 : 숫자:12 / 문자열: "hello"
  - 산술연산자 : +, -, *. /, %
  - 비교연산자 : <, >, <=, >=, ==, !=, ===, !==
  - 관계연산자 : &&, ||
 
```js
  var x = 3;
  var y = 3;

  console.log(x == y);   //true
  console.log(x === y);  //true 
```

```js
  var x = 3;
  var y = new Number(3);

  console.log(x == y);   //true
  console.log(x === y);  //false
```

# 13강 - 자바스크립트 제어구조

- 제어구조
  - 조건문 : if, while, do-while
  - 반복문 : while, for, for-in
  - 선택문 : else, else if, switch

```js
 var ar = ["hello", "hi", "greeting"];

 for(var i = 0; i<ar.length; i++)
  document.write(ar[i] + "<br />");
  
  //hello
  //hi
  //greeting

 for(var d in ar)
  documtnt.write(d + "<br />");

  //0
  //1
  //2
```

```js
 var ob = {id:1, title:"hello", writeId:"newlec"};

 for(var i in ob)
  document.write(ob[i] + "<br />");

  //1
  //hello
  //newlec
```

# 14강 - 함수 객체와 표현식

- 함수? 대입? 객체?

```js
sol1)
 var add = new Function("x, y", "return x+y;");
 document.write(add(3,4));   //7

sol2)
 var add = function(x,y){
   return x+y;
 };

 document.write(add(5,4));   //9

sol3)
function add(x,y){
  return x + y;
}

document.write(add(6,4));   //10

```

- sol2방법을 제일 많이 사용한다.


# 15강 - 함수의 가변 인자 arguments 콜렉션

- 가변적인 매개 변수

```js
 function add(x, y){
   return x + y;
 }

 document.write(add(16,4,5,6,7,"hello"));

 --> 앞에 두개만 사용되기 때문에 `arguments`를 사용해준다.

 function add(){

   alert(arguments[0]);  //16

   return x + y;
 }

 document.write(add(16,4,5,6,7,"hello"));
```

# 16강 - 변수의 가시영역과 전역변수

- var 선언 변수는` 정적인` 방식으로 생성

```js
 alert(a);      //undefined
 var a = 1;
```

- var 선언 변수는` 동적인` 방식으로 생성

```js
a = 1;
alert(a);
```

- 전역변수

```js
 var f1 = function() {
   a = 1;
   a++;
   alert(a);
 }
 f1();
```

- 동일한 변수를 여러 번 선언하는 경우는?

```js
 var a = 1;
 var a = 2;
 alert(a);
```

- 중괄호를 사용하는 경우

```js
{
  var a = 1;
}
alert(a);

--> 스크립트에서는 중괄호가 변수 영역을 나누지 않음.
``` 

- 함수 안에서 선언한 global 변수

```js
 function f1(){
   var a = 1;
 }

 f1();
 alert(a);

 --> 스크립트에서는 함수영역만 변수 영역을 나눔
```

# 17강 - 클로저

- 클로저 : 일반적으로 어떤 함수가 자신의 내부가 아닌 외부에서 선언된 변수에 접근하는 것

- 변수 생명주기와 클로저

```js
 function f1(){
   -----------------
   var a = 1;

   return a;
   -----------------
 }

 var a = f1();
 alert(a);
```

```js
 function f1(){
 ------------------------
   var a = 1;
   
   return function f2(){
    return a;
   }
 }
 
 var f = f1();
 var a = f();
 alert(a);
 ------------------------
```

# 18강 - window 플랫폼을 이용한 대화 parseInt, alert, prompt, comfirm

- window 객체의 Members : 사용자와 상호작용을 위한 기본 도구
- window 
  - screen
  - location
  - history
  - document
  - navigator
- Methods
  - alert()
  - confirm()
  - prompt()
  - setTimeout()
  - clearTimeout()
  - setInterval()
  - clearInterval()
- Properties
  - status
  - defaultStatus

```js
 var x, y;
 x = prompt("x값을 입력하세요.");
 y = prompt("y값을 입력하세요.");

 x = parseInt(x);    //int형으로 변환해줘야함 안그럼 문자로 받아들임
 y = parseInt(y);
 
 alert(x+y);   
```
# 19강 - 이벤트 기반의 프로그래밍

- 스크립트 코드 작성 영역

  ```js
  - 페이지가 읽혀질 때 실행
    <script>

    </script> 

  - 이벤트가 발생할 때 실행
   <input onXXX = ""/>

   <input onclick=""/>
   <input onmouseover=""/>
   
  ```  

- 이벤트와 함수 호출
  - 덧셈 결과 호출하기
  
    ```js
      <script>
        function printResult()
        {
    
          x = prompt("x값을 입력하세요", 0);
          y = prompt("y값을 입력하세요", 0);

          x = parseInt(x);    
          y = parseInt(y);

          alert(x+y);
        }
      </script>
      </head>
      <body>
        <input type="button" value="출력" onclick="printResult();"/>
      </body>
    ```
