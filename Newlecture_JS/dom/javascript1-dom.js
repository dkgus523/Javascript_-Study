//Ex1 : 계산기 프로그램

window.addEventListener("load", function() {
    var txtX = document.getElementById("txt-x");
    var txtY = document.getElementById("txt-y");
    var btnAdd = document.getElementById("btn-add");
    var txtSum = document.getElementById("txt-sum");

    btnAdd.onclick = function() {
        var x = parseInt(txtX.value);
        var y = parseInt(txtY.value);

        txtSum.value = x + y;
    };
});

//Ex2 : 엘리먼트 선택방법 개선하기
window.addEventListener("load", function() {
    var section2 = document.getElementById("section2");

    var txtX = section2.getElementsByClassName("txt-x")[0];
    var txtY = section2.getElementsByClassName("txt-y")[0];
    var btnAdd = section2.getElementsByClassName("btn-add")[0];
    var txtSum = section2.getElementsByClassName("txt-sum")[0];

    // var inputs = section2.getElementsByTagName("input")

    // var txtX = inputs[0];
    // var txtY = inputs[1];
    // var btnAdd = inputs[2];
    // var txtSum = inputs[3];

    btnAdd.onclick = function() {
        var x = parseInt(txtX.value);
        var y = parseInt(txtY.value);

        txtSum.value = x + y;
    };
});

//Ex3 : Selector API Level1
window.addEventListener("load", function() {
    var section3 = document.getElementById("section3");

    var txtX = section3.querySelectorAll("input[name='x']");
    var txtY = section3.querySelector(".txt-y");
    var btnAdd = section3.querySelector(".btn-add");
    var txtSum = section3.querySelector(".txt-sum");

    btnAdd.onclick = function() {
        var x = parseInt(txtX.value);
        var y = parseInt(txtY.value);

        txtSum.value = x + y;
    };
});

//Ex4 : ChildNodes를 이용한 노드 선택
window.addEventListener("load", function() {
    var section4 = document.querySelector("#section4");
    var box = section4.querySelector(".box");

    var input1 = box.children[0]; //.childNodes[0]
    var input2 = box.children[1];

    //.children 은 input이 공백이 있든 말든 태그형태만 뽑아서 순번을 매긴다.

    input1.value = "hello";
    input2.value = "okay";


});

//Ex5 : 엘리먼트 노드의 속성 변경
window.addEventListener("load", function() {
    var section = document.querySelector("#section5");
    var srcInput = section.querySelector(".src-input");
    var imgSelect = section.querySelector(".img-select")
    var changeButton = section.querySelector(".change-button");
    var img = section.querySelector(".img");

    changeButton.onclick = function() {
        img.src = "../images/" + srcInput.value;
        //img.src = "../images/" + imgSelect.value;
    };

});

//Ex6 : 엘리먼트 노드의 속성 & CSS 속성 변경
window.addEventListener("load", function() {
    var section = document.querySelector("#section6");
    var srcInput = section.querySelector(".src-input");
    var imgSelect = section.querySelector(".img-select")
    var changeButton = section.querySelector(".change-button");
    var img = section.querySelector(".img");
    var colorInput = section.querySelector(".color-input");

    changeButton.onclick = function() {
        img.src = "../images/" + srcInput.value;
        //img.src = "../images/" + imgSelect.value;

        //img.style["border-color"] = colorInput.value; 
        //아래와 같은 방법이지만 아래처럼 쓰인다.
        img.style.borderColor = colorInput.value;
    };

});

//Ex7 : 노드조작 : 메뉴추가(createTextNode, Element)
window.addEventListener("load", function() {
    var section = document.querySelector("#section7");
    var menuListDiv = section.querySelector(".menu-list");
    var addButton = section.querySelector(".add-button");
    var delButton = section.querySelector(".del-button");

    addButton.onclick = function() {
        var title = titleInput.value;
        var txtNode = document.createTextNode(title);
        menuListDiv.appendChild(txtNode);
    };

    delButton.onclick = function() {
        var txtNode = menuListDiv.childNodes[0];
        menuListDiv.removeChild(txtNode);
    };
});

//Ex8 : 노드조작 : 메뉴추가(createTextNode, Element)
window.addEventListener("load", function() {
    var section = document.querySelector("#section8");
    var menuListDiv = section.querySelector(".menu-list");
    var addButton = section.querySelector(".add-button");
    var delButton = section.querySelector(".del-button");

    addButton.onclick = function() {
        // var title = titleInput.value;

        // var html = '<a href="">' + title + '</a>';
        // var li = document.createElement("li");
        // li.innerHTML = html;

        // menuListUl.append(li);

        var title = titleInput.value;
        var txtNode = document.createTextNode(title);

        var aNode = document.createElement("a");
        aNode.href = "";
        aNode.appendChild(txtNode);

        var liNode = document.createElement("li");
        liNode.appendChild(aNode);

        menuListUl.appendChild(liNode);
    };

    delButton.onclick = function() {
        // var txtNode = menuListUl.childNodes[0]; 
        var liNode = menuListUl.children[0];
        // menuListDiv.removeChild(liNode);
        liNode.remove();
    };
});

//Ex9 : 노드 복제와 템플릿 태그
window.addEventListener("load", function() {
    var notices = [
        { id: 5, title: "퐈이야~~~", regDate: "2019-01-26", writerId: "newlec", hit: 0 },
        { id: 6, title: "나 좀 복제해줘~", regDate: "2019-01-26", writerId: "newlec", hit: 17 }
    ];

    var section = document.querySelector("#section9");

    var noticeList = section.querySelector(".notice-list");
    var tbodyNode = noticeList.querySelector("tbody");
    var cloneButton = section.querySelector(".clone-button");
    var templateButton = section.querySelector(".template-button");

    cloneButton.onclick = function() {

    };

    templateButton.onclick = function() {


    };

});

//Ex10 : 노드 삽입과 바꾸기
window.addEventListener("load", function() {

    var section = document.querySelector("#section10");

    var noticeList = section.querySelector(".notice-list");
    var tbodyNode = noticeList.querySelector("tbody");
    var upButton = section.querySelector(".up-button");
    var downButton = section.querySelector(".down-button");

    var currentNode = tbodyNode.firstElementChild; //.children[0];

    downButton.onclick = function() {


    };

    upButton.onclick = function() {

    };

});

//Ex11 : 다중 노드선택 방법과 일괄삭제, 노드의 자리바꾸기
window.addEventListener("load", function() {

    var section = document.querySelector("#section11");

    var noticeList = section.querySelector(".notice-list");
    var tbody = noticeList.querySelector("tbody");
    var allCheckbox = section.querySelector(".overall-checkbox");
    var delButton = section.querySelector(".del-button");
    var swapButton = section.querySelector(".swap-button");

    allCheckbox.onchange = function() {

    };

    delButton.onclick = function() {

    };

    swapButton.onclick = function() {


    };

});

//Ex12 : 클릭한 컬럼을 기준으로 레코드 정렬하기 #1
window.addEventListener("load", function() {

    var notices = [
        { "id": 1, "title": "유투브에 끌려다니지 않으려고 했는데....ㅜㅜ..", "regDate": "2019-02-05", "writerId": "newlec", "hit": 2 },
        { "id": 2, "title": "자바스크립트란..", "regDate": "2019-02-02", "writerId": "newlec", "hit": 0 },
        { "id": 3, "title": "기본기가 튼튼해야....", "regDate": "2019-02-01", "writerId": "newlec", "hit": 1 },
        { "id": 4, "title": "근데 조회수가 ㅜㅜ..", "regDate": "2019-01-25", "writerId": "newlec", "hit": 0 }
    ];

    var section = document.querySelector("#section12");

    var noticeList = section.querySelector(".notice-list");
    var titldTd = section.querySelector(".title");
    var tbodyNode = noticeList.querySelector("tbody");

    var bindData = function() {
        var template = section.querySelector("template");

        for (var i = 0; i < notices.length; i++) {
            var cloneNode = document.importNode(template.content, true);
            var tds = cloneNode.querySelectorAll("td");
            tds[0].textContent = notices[i].id;

            var aNode = tds[1].children[0];
            aNode.href = notices[i].id;
            aNode.textContent = notices[i].title;

            tds[2].textContent = notices[i].regDate;
            tds[3].textContent = notices[i].writerId;
            tds[4].textContent = notices[i].hit;

            tbodyNode.appendChild(cloneNode);
        }
    };

    bindData();

    var titleSorted = false;

    titldTd.onclick = function() {
        // 이 부분에 새로 배운 내용을 작성해 보세요.

    };
});