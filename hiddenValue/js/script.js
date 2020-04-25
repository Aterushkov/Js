
window.onload = function(e) {
	
	
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
	
	var button = document.getElementById('myButton');
	addEvent(button,'click',handler);
	
	var chars = new Array();
	
	function handler (e) {
		e = e || window.event;
		var target = e.target || e.srcElement;
		var id = e.target.getAttribute('value');
		if(id) {
			var div = document.querySelector('.extraFields');
			var divs = div.children;
			for(var i = 0; i < divs.length; i++) {
				
				if(divs[i].lastElementChild.getAttribute('id') == id) {
					console.log(divs[i]);
					divs[i].className = 'active';
				}
				else {
					divs[i].className = 'hidden';
				}

			}	
			parent.className = 'active';
		}
		return false
	}
	

	var inputs = document.getElementsByTagName('input');
	for(var i = 0; i < inputs.length; i++) {
		var el = inputs[i];
		
		if(el.type == 'radio') {
			addEvent(el,'change',handler);
		}
	}
	addEvent(input,'keypress',handler);
	
	
	
	

}

		



	

	