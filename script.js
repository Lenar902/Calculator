window.onload = function() {
	let inputText = document.querySelector("#inputText");
	
	let mclear = document.querySelector("#mclear");
	let mread = document.querySelector("#mread");
	let msave = document.querySelector("#msave");
	let madd = document.querySelector("#madd");
	let msub = document.querySelector("#msub");
	
    let backspace = document.querySelector("#backspace");
	let clearentry = document.querySelector("#clearentry");
	let clear = document.querySelector("#clear");
	let sign = document.querySelector("#sign");
	let sqroot = document.querySelector("#sqrt");
	
	let num7 = document.querySelector("#num7");
	let num8 = document.querySelector("#num8");
	let num9 = document.querySelector("#num9");
	let div = document.querySelector("#div");
	let percent = document.querySelector("#percent");
    
    let num4 = document.querySelector("#num4");
	let num5 = document.querySelector("#num5");
	let num6 = document.querySelector("#num6");
	let mul = document.querySelector("#mul");
	let divreverse = document.querySelector("#divreverse");
	
    let num1 = document.querySelector("#num1");
	let num2 = document.querySelector("#num2");
	let num3 = document.querySelector("#num3");
	let sub = document.querySelector("#sub");
	let equally = document.querySelector("#equally");
	
	let num0 = document.querySelector("#num0");
	let comma = document.querySelector("#comma");
	let add = document.querySelector("#add");

	num1.onclick = () => inputNum(1);
	num2.onclick = () => inputNum(2);
	num3.onclick = () => inputNum(3);
	num4.onclick = () => inputNum(4);
	num5.onclick = () => inputNum(5);
	num6.onclick = () => inputNum(6);
	num7.onclick = () => inputNum(7);
	num8.onclick = () => inputNum(8);
	num9.onclick = () => inputNum(9);
	num0.onclick = () => inputNum(0);
	comma.onclick = () => inputNum('.');
	
	window.onkeydown = (event) => {
		event.preventDefault();
		switch (event.keyCode) {
			case 48: inputNum(0); break;
			case 49: inputNum(1); break;
			case 50: inputNum(2); break;
			case 51: inputNum(3); break;
			case 52: inputNum(4); break;
			case 53: inputNum(5); break;
			case 54: inputNum(6); break;
			case 55: inputNum(7); break;
			case 56: inputNum(8); break;
			case 57: inputNum(9); break;			
			case 188: inputNum('.'); break;	
			case 189: inputText.textContent = signs(inputText.textContent); break;			
			case 190: inputNum('.'); break;			
			default: console.log('Error type');
		}		
	}

	
	function signs(str) {
		let sg = str.indexOf("-") === -1;
		return sg ? '-' + str : str.substring(1);	
	}
	
	function inputNum(nums) {
		
		let isComma = inputText.textContent.indexOf(".") === -1;
		if (inputText.textContent[0] == '0' && nums == 0 && isComma) {
			console.log('error 0');
		}		
		else if (inputText.textContent[0] == '0' && !(nums == '.') && isComma) {			
			inputText.textContent = nums;
		}
		else if (nums == '.' && !isComma) {
			console.log('error .');
		}
		else {
			inputText.textContent += nums;
		}		
	}
}


