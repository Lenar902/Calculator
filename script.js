window.onload = function() {
	let ch = '';
	let a1 = 0;
	let a2 = 0;
	let click_result = false;
	let btnbool = false;
	
	let ms = 0;
	
	let inputNumber = document.querySelector("#inputNumber");
	let inputChar = document.querySelector("#inputChar");
	
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
	
	const sinus = document.querySelector("#sinus");
	const cosinus = document.querySelector("#cosinus");
	const tangens = document.querySelector("#tangens");
	const sqr = document.querySelector("#sqr");
	const cubsqrt = document.querySelector("#cubsqrt");
	
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
			if (inputNumber.textContent.length < 20) {
				inputNumber.textContent = inputNum(i, inputNumber.textContent, btnbool);
				btnbool = false;
			}
		}
	}	
	
	comma.onclick = () => inputNumber.textContent = isPoint(inputNumber.textContent);
	
	
	window.onkeydown = (event) => {
		event.preventDefault();
		if (event.keyCode >= 48 && event.keyCode <= 57) {
			if (inputNumber.textContent.length < 20) {
				inputNumber.textContent = inputNum(event.keyCode - 48, inputNumber.textContent, btnbool);
				btnbool = false;
			}
		}
		else if (event.keyCode == 188 || event.keyCode == 190) {
			inputNumber.textContent = isPoint(inputNumber.textContent, btnbool);
			btnbool = false;
		}
		else if (event.keyCode == 189) {
			inputNumber.textContent = signs(inputNumber.textContent, btnbool);
			btnbool = false;
		}
		else {
			console.log('Error type');
		}			
	}
	
	add.onclick = function() {
		scanf();	
		ch = '+';
		inputChar.textContent = ch;
	}

	sub.onclick = function() {
		scanf();	
		ch = '-';
		inputChar.textContent = ch;
	}

	mul.onclick = function() {
		scanf();	
		ch = '*';
		inputChar.textContent = ch;
	}

	div.onclick = function() {
		scanf();	
		ch = '/';
		inputChar.textContent = ch;
	}
	
	equally.onclick = function() {			
		if (click_result) {
			a2 = inputNumber.textContent;
			if (isFinite(a2)) {
				a2 = parseFloat(a2);
			}
			else alert("???? ?????????? ???? ??????????!");
		}
		switch (ch) {
			case '+': a1 = a1 + a2; break;
			case '-': a1 = a1 - a2; break;
			case '*': a1 = a1 * a2; break;
			case '/': a1 = a1 / a2; break;			
		}		
		inputNumber.textContent = a1;		
		click_result = false;
		btnbool = false;
	}
	
	divreverse.onclick = function() {
		if (inputNumber.textContent != 0) {
			inputNumber.textContent = 1 / parseFloat(inputNumber.textContent);	
			inputChar.textContent = '1/x';
		}	
		else {
			alert('?????????????? ???? ????????');
		}	
	}
	
	percent.onclick = function() {
		inputNumber.textContent = inputNumber.textContent / 100 * a1;
		inputChar.textContent = '%';
	}	
	
	backspace.onclick = function() {
		inputNumber.textContent = backsp(inputNumber.textContent);
		inputChar.textContent = '???';
	}
	
	clearentry.onclick = function() {
		inputNumber.textContent = 0;
		inputChar.textContent = 'CE';
	}
	
	clear.onclick = function() {
		inputChar.textContent = '';
		inputNumber.textContent = 0;
		click_result = false;
		btnbool = false;
		a1 = 0;
		a2 = 0;
	}
	
	sign.onclick = function() {
		inputNumber.textContent = signs(inputNumber.textContent);
		inputChar.textContent = '??';
	}
	
	sqroot.onclick = function() {
		inputNumber.textContent = Math.sqrt(parseFloat(inputNumber.textContent));
		inputChar.textContent = '???';
	}	
	
	mclear.onclick = function() {
		ms = 0;
		inputChar.textContent = 'MC';
	}
	
	mread.onclick = function() {
		inputNumber.textContent = ms;
		inputChar.textContent = 'MR';
	}
	
	msave.onclick = function() {
		ms = parseFloat(inputNumber.textContent);
		inputChar.textContent = 'MS';
	}
	
	madd.onclick = function() {
		ms += parseFloat(inputNumber.textContent);
		inputChar.textContent = 'M+';
	}
	
	msub.onclick = function() {
		ms -= parseFloat(inputNumber.textContent);
		inputChar.textContent = 'M-';
	}	
	
	sinus.onclick = function() {
		inputNumber.textContent = Math.sin(radindeg(inputNumber.textContent));
		inputChar.textContent = 'sin';
	}
	
	cosinus.onclick = function() {
		inputNumber.textContent = Math.cos(radindeg(inputNumber.textContent));
		inputChar.textContent = 'cos';
	}
	
	tangens.onclick = function() {
		inputNumber.textContent = Math.tan(radindeg(inputNumber.textContent));
		inputChar.textContent = 'tg';
	}
	
	sqr.onclick = function() {
		inputNumber.textContent = Math.pow(inputNumber.textContent, 2);
		inputChar.textContent = 'sqr';
	}
	
	cubsqrt.onclick = function() {
		inputNumber.textContent = Math.pow(inputNumber.textContent, 1/3);
		inputChar.textContent = '3???';
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
			a1 = inputNumber.textContent;
			if (isFinite(a1)) {
				a1 = parseFloat(a1);				
				click_result = true;	
				btnbool = true;
			}
			else alert("???? ?????????? ???? ??????????!");
		}
		catch (exc) {
			alert("????????????: " + exc);
		}
	}
	
	function radindeg(angle) {
		return angle * Math.PI / 180;
	}
}


