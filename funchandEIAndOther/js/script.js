

window.onload = function(e) {		
	var button = document.getElementById("myButton");

	
	document.forms.myForm.elements.exampleInputEmail.onkeypress = function(e) {
		if(e.charCode == 100) {
			return false;
		}
		else {
			return true;
		}
	}
	

	var hello = 'World';
	
	function handler (e) {
		
		e = e || window.event;
		
		console.log(hello);
		
		if(e.preventDefault) {
			e.preventDefault();
			console.log(e.defaultPrevented);
		}
		else if(e.returnValue) e.returnValue = false;
		else return false; 
	}
	
	function addEvent(target,type,hendler) {
		if(target.addEventListener) {
			target.addEventListener(type,hendler,false)
		}
		else {
			target.attachEvent("on" + type,function (e) {
				return hendler.call(target,e);
			});
		}
	}
	
	addEvent(button,'click',handler);
	
}


	

	