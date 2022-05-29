window.onload = function() {
	let ch = '';
	let a1 = 0;
	let a2 = 0;
	let click_result = false;
	let btnbool = false;
	
	let ms = 0;
	
	let inputText = document.querySelector("#inputText");
	
	const mclear = document.querySelector("#mclear");
	const mread = document.querySelector("#mread");
	const msave = document.querySelector("#msave");
	const madd = document.querySelector("#madd");
	const msub = document.querySelector("#msub");
	
    const backspace = document.querySelector("#backspace");
	const clearentry = document.querySelector("#clearentry");
	const clear = document.querySelector("#clear");
	const sign = document.querySelector("#sign");
	const sqroot = document.querySelector("#sqrt");	
	
	const num7 = document.querySelector("#num7");
	const num8 = document.querySelector("#num8");
	const num9 = document.querySelector("#num9");
	const div = document.querySelector("#div");
	const percent = document.querySelector("#percent");
    
    const num4 = document.querySelector("#num4");
	const num5 = document.querySelector("#num5");
	const num6 = document.querySelector("#num6");
	const mul = document.querySelector("#mul");
	const divreverse = document.querySelector("#divreverse");
	
    const num1 = document.querySelector("#num1");
	const num2 = document.querySelector("#num2");
	const num3 = document.querySelector("#num3");
	const sub = document.querySelector("#sub");
	const equally = document.querySelector("#equally");
	
	const num0 = document.querySelector("#num0");
	const comma = document.querySelector("#comma");
	const add = document.querySelector("#add");
	
	const numbersBtn = [num0, num1, num2, num3, num4, num5, num6, num7, num8, num9];
	for (let i = 0; i < numbersBtn.length; i++) {
		numbersBtn[i].onclick = () => {
			inputText.textContent = inputNum(i, inputText.textContent, btnbool);
			btnbool = false;
		}
	}	
	
	comma.onclick = () => inputText.textContent = isPoint(inputText.textContent);
	
	
	window.onkeydown = (event) => {
		event.preventDefault();
		if (event.keyCode >= 48 && event.keyCode <= 57) {
			inputText.textContent = inputNum(event.keyCode - 48, inputText.textContent, btnbool);
			btnbool = false;
		}
		else if (event.keyCode == 188 || event.keyCode == 190) {
			inputText.textContent = isPoint(inputText.textContent, btnbool);
			btnbool = false;
		}
		else if (event.keyCode == 189) {
			inputText.textContent = signs(inputText.textContent, btnbool);
			btnbool = false;
		}
		else {
			console.log('Error type');
		}			
	}
	
	add.onclick = function() {
		scanf();	
		ch = '+';
	}

	sub.onclick = function() {
		scanf();	
		ch = '-';
	}

	mul.onclick = function() {
		scanf();	
		ch = '*';
	}

	div.onclick = function() {
		scanf();	
		ch = '/';
	}
	
	equally.onclick = function() {			
		if (click_result) {
			a2 = inputText.textContent;
			if (isFinite(a2)) {
				a2 = parseFloat(a2);
			}
			else alert("Вы ввели не число!");
		}
		switch (ch) {
			case '+': a1 = a1 + a2; break;
			case '-': a1 = a1 - a2; break;
			case '*': a1 = a1 * a2; break;
			case '/': a1 = a1 / a2; break;			
		}		
		inputText.textContent = a1;
		click_result = false;
		btnbool = false;
	}
	
	percent.onclick = function() {
		inputText.textContent = inputText.textContent / 100 * a1;
	}	
	
	backspace.onclick = function() {
		inputText.textContent = backsp(inputText.textContent);
	}
	
	clearentry.onclick = function() {
		inputText.textContent = 0;
	}
	
	clear.onclick = function() {
		inputText.textContent = 0;
		click_result = false;
		btnbool = false;
		a1 = 0;
		a2 = 0;
	}
	
	sign.onclick = function() {
		inputText.textContent = signs(inputText.textContent);
	}
	
	sqroot.onclick = function() {
		inputText.textContent = Math.sqrt(parseFloat(inputText.textContent));
	}
	
	divreverse.onclick = function() {
		if (inputText.textContent != 0) {
			inputText.textContent = 1 / parseFloat(inputText.textContent);	
		}	
		else {
			alert('Деление на нуль');
		}	
	}
	
	mclear.onclick = function() {
		ms = 0;
	}
	
	mread.onclick = function() {
		inputText.textContent = ms;
	}
	
	msave.onclick = function() {
		ms = parseFloat(inputText.textContent);
	}
	
	madd.onclick = function() {
		ms += parseFloat(inputText.textContent)
	}
	
	msub.onclick = function() {
		ms -= parseFloat(inputText.textContent);
	}	
	
	
	function signs(str) {
		let sg = str.indexOf("-") === -1;
		return sg ? '-' + str : str.substring(1);	
	}
	
	function backsp(str) {
		return str.length == 1 ? str = 0 : str.substring(0, str.length - 1);
	}
	
	function isPoint(str) {
		let isP = str.indexOf(".") === -1;
		return isP ? str += '.' : str += '';		
	}
	
	function inputNum(nums, fromstr, isOtherNum) {	
		let isP = fromstr.indexOf(".") === -1;	
		return ((fromstr[0] == '0' && isP)||(isOtherNum)) ? fromstr = nums : fromstr += nums;
	}
	
	
	function scanf() {
		try {	
			a1 = inputText.textContent;
			if (isFinite(a1)) {
				a1 = parseFloat(a1);				
				click_result = true;	
				btnbool = true;
			}
			else alert("Вы ввели не число!");
		}
		catch (exc) {
			alert("Ошибка: " + exc);
		}
	}
}


