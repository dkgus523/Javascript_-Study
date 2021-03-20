
# 20강 - 문서의 엘리먼트 객체 이용하기

- 스크립트 작성 방식
  - 문서 객체의 속성 사용하기
  
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
    =>

    ```js
      <script>
        function printResult()
        {
          x = prompt("x값을 입력하세요", 0);
          y = prompt("y값을 입력하세요", 0);

          x = parseInt(x);    
          y = parseInt(y);

          btnPrint.value = x+y;
        }
      </script>
      </head>
      <body>
        <input type="button" value="출력" onclick="printResult();" id="btnPrint"/>
      </body>
    ```
    - 객체 생성과 사용 시점의 문제

    ```js
      <script>
        function printResult()
        {
          x = prompt("x값을 입력하세요", 0);
          y = prompt("y값을 입력하세요", 0);

          x = parseInt(x);    
          y = parseInt(y);

          btnPrint.value = x+y;
        }
      </script>
      </head>
      <body>
        <input type="button" value="출력" onclick="printResult();" id="btnPrint"/>
      </body>
    ```
    =>

    ```js
      <script>
        function printResult()
        {
          x = prompt("x값을 입력하세요", 0);
          y = prompt("y값을 입력하세요", 0);

          x = parseInt(x);    
          y = parseInt(y);

          btnPrint.value = x+y;
        }
        btnPrint.onclick = printResult;
      </script>
      </head>
      <body>
        <input type="button" value="출력" id="btnPrint"/>
      </body>
    ```
    -> 오류!!

# 21강 - 코드 초기화와 엘리먼트 객체 선택하기
- 문서 초기화 이벤트 함수 init

  ```js
    <script>
      function printResult()
      {
        x = prompt("x값을 입력하세요", 0);
        y = prompt("y값을 입력하세요", 0);

        x = parseInt(x);    
        y = parseInt(y);

        btnPrint.value = x+y;
      }
      btnPrint.onclick = printResult;
    </script>
    </head>
    <body>
      <input type="button" value="출력" id="btnPrint"/>
    </body>
  ```
  -> 오류!!

  =>

  ```js
    <script>
      function printResult()
      {
        x = prompt("x값을 입력하세요", 0);
        y = prompt("y값을 입력하세요", 0);

        x = parseInt(x);    
        y = parseInt(y);

        btnPrint.value = x+y;
      }
      function init() {
        btnPrint.onclick = printResult;
      }
      window.onload = init;
    </script>
    </head>
    <body>
      <input type="button" value="출력" id="btnPrint"/>
    </body>
  ```

- 객체 아이디 명명 방법의 문제

   ```js
    <script>
      function printResult()
      {
        x = prompt("x값을 입력하세요", 0);
        y = prompt("y값을 입력하세요", 0);

        x = parseInt(x);    
        y = parseInt(y);

        btnPrint.value = x+y;
      }
      function init() {
        btnPrint.onclick = printResult;
      }
      window.onload = init;
    </script>
    </head>
    <body>
      <input type="button" value="출력" id="btnPrint"/>
    </body>
  ```
  => 

  ```js
    <script>
      function printResult()
      {
        var btnPrint = document.getElementById("btn-print");
        x = prompt("x값을 입력하세요", 0);
        y = prompt("y값을 입력하세요", 0);

        x = parseInt(x);    
        y = parseInt(y);

        btnPrint.value = x+y;
      }
      function init() {
        var btnPrint = document.getElementById("btn-print");
        btnPrint.onclick = printResult;
      }
      window.onload = init;
    </script>
    </head>
    <body>
      <input type="button" value="출력" id="btn-Print"/>
    </body>
  ```

# 22강 - 스크립트 코드의 지역화

```js
  <script>
    function printResult()
    {
      var btnPrint = document.getElementById("btn-print");
      x = prompt("x값을 입력하세요", 0);
      y = prompt("y값을 입력하세요", 0);

      x = parseInt(x);    
      y = parseInt(y);

      btnPrint.value = x+y;
    }
    function init() {
      var btnPrint = document.getElementById("btn-print");
      btnPrint.onclick = printResult;
    }
    window.onload = init;
  </script>
  </head>
  <body>
    <input type="button" value="출력" id="btn-Print"/>
  </body>
```
=>

```js
    <script>
      window.onload = function() {
        var btnPrint = document.getElementById("btn-print");

        var add = function(x,y) {
          return x + y;
        }

        btnPrint.onclick = function() {

          x = prompt("x값을 입력하세요", 0);
          y = prompt("y값을 입력하세요", 0);

          x = parseInt(x);    
          y = parseInt(y);

          btnPrint.value = x+y;
        };
      }
    </script>
    </head>
    <body>
      <input type="button" value="출력" id="btn-Print"/>
    </body>
  ```

# 23강 - 코드분리와 이벤트 바인딩 방법 두 가지

- 분리 전)
```html
- index.html
  <!DOCTYPE html>
  <html lang="en">

  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <script>
        window.onload = function() {
        var btnPrint = document.getElementById("btn-print");

        var add = function(x,y) {
          return x + y;
        }

        btnPrint.onclick = function() {

          x = prompt("x값을 입력하세요", 0);
          y = prompt("y값을 입력하세요", 0);

          x = parseInt(x);    
          y = parseInt(y);

          btnPrint.value = x+y;
        };
      }
      </script>
  </head>

  <body>
    <input type="button" value="출력" id="btn-Print"/>
  </body>
  </html>
```

- 분리 후, 
- 여러 스크립트 파일을 함께 사용할 때 초기화 함수의 문제
```html
- index.html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="index.js"></script>
    <script src="test.js"></script>
</head>

<body>
  <input type="button" value="출력" id="btn-Print"/>
</body>
</html>
```

```js
- index.js

 window.addEventListener("load", function(){
      var btnPrint = document.getElementById("btn-print");

      var add = function(x,y) {
        return x + y;
      }

      btnPrint.onclick = function() {

        x = prompt("x값을 입력하세요", 0);
        y = prompt("y값을 입력하세요", 0);

        x = parseInt(x);    
        y = parseInt(y);

        btnPrint.value = x+y;
      };
    });
```

```js
- test.js
 window.addEventListener("load", function(){
   alert("안녕하세요~");
 });
```

# 24강 - 첫 예제 간단한 계산기 프로그램 만들기

- javascript1-dom.html Ex1, javascript1-dom.js Ex1 참고

# 25강 - 노드 선택 방법 개선하기

- javascript1-dom.html Ex2, javascript1-dom.js Ex2 참고

# 26강 - Selectors API

- javascript1-dom.html Ex3, javascript1-dom.js Ex3 참고

# 27강 - Node와 Element Node 그리고 childNodes, children

- javascript1-dom.html Ex4, javascript1-dom.js Ex4 참고

# 28강 - Node의 종류와 개체 형식

- 문서를 구성하는 Node의 종류들
  - Document(9)
    - DocumentType(10) - `<!DOCTYPE HTML PUBLIC"-//W3C//DTD HTML...>`
    - Element(1) - `<textarea><p><font>`
      - Attr(2)  - `<textarea rows="30" cols="40">`
      - Entity(6) - `&lt;뉴렉처&gt; &nbsp; => <뉴렉처>(빈칸)`
      - EntityReference(5) - `&lt;뉴렉처&gt; &nbsp`
      - Text(3) - `<p> 뉴렉처</p>`
    - Comment(8) - `<!--주석 -->`
    - CDATASection(4) - `<![CDATA[ <,>,]]>`
    - Notation(12) - `<font color="#ffff00" size="10px">`

# 29강 - Node 인터페이스

- www.w3.org/TR 사이트 접속 후
- title에 DOM 검색해서 확인 가능