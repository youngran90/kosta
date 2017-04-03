var phoneArr = [];
var result;

function Manager() {
	// CRUD 작업 함수
	this.addInfo = function() {
		var name = prompt('이름');
		var tel = prompt('전화번호');

		phoneArr.push(new phoneInfo(name, tel));
	}
	this.printInfo = function() {
		for ( var i in phoneArr)
			result.innerHTML += phoneArr[i].toString() + "<br>";
	}

	this.serch = function() {
		var serchName = prompt('찾을 이름');
		for ( var i in phoneArr)
			if (serchName == (phoneArr[i].getName())) {
				alert(phoneArr[i].toString());
			}
	}

	this.update = function() {
		var update = prompt('수정할 이름');
		var index = -1;
		for ( var i in phoneArr) {
			if (update == (phoneArr[i].getName())) {
				index = i;
			}
		}

		if(index < 0){
			alert("수정대상이 존재하지 않습니다.");
		}else{
			var tel = prompt('전화번호');	
			phoneArr[index].setTel(tel);
		}	}
	
	this.del = function() {
		var del = prompt('삭제할 이름');
		var index = -1;
		for ( var i in phoneArr) {
			if (del == (phoneArr[i].getName())) {
				index = i;
			}
		}

		if(index < 0){
			alert("삭제대상이 존재하지 않습니다.");
		}else{
			phoneArr.splice(index, 1);
		}	}
};

var m = new Manager();

window.onload = function() {
	result = document.getElementById("result");
	// div 태크 객제를 가져옴 dom API

	// result.innerHTML = 내용

	while (true) {
		var menu = Number(prompt('1.입력 2.출력 3.검색 4.수정 5.삭제 6.종료'));

		switch (menu) {

		case 1:
			m.addInfo();
			break;

		case 2:
			m.printInfo();

			break;

		case 3:
			m.serch();
			break;

		case 4:
			m.update();
			break;

		case 5:
			m.del();
			break;

		case 6:
			alert('종료');
			return;
		}
	}
}
