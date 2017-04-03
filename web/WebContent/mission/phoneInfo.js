//이름, 전화번호 => set get toString 

	function phoneInfo(name, tel){
		var n = name;
		var t = tel;
		
		this.setName = function(name){
			n = name;
		}
		this.getName = function(){
			return n;
		}
		
		this.setTel = function(tel){
			t= tel;
		}
		this.getTel = function(){
			return t;
		}
		
	}
	
	phoneInfo.prototype = {
		toString :  function(){
			return "이름 : " + this.getName() + "전화번호 : " + this.getTel() ;
		}
	}