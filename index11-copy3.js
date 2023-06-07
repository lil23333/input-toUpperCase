let inp = document.querySelector('#inp');


function func () {
	let arr = inp.value.split(' ');
	let result = arr.map(upPer);
	function upPer (value) {
		return value[0].toUpperCase() + value.substr(1);
	}
inp.value = result;

}


inp.addEventListener('blur',func );



