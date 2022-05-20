function is_prime(num) {
	if(num < 2) {
		return 0;
	} else {
		let i;
		for(i = 2; i < parseInt(Math.sqrt(num)) + 1; i++) {
			if (num % i == 0) {
				return 0;
			}
		}
	}
	return 1;
}

document.addEventListener('DOMContentLoaded', () => {
	document.querySelector('#button').onclick = () => {
		let input = document.getElementById('number')
		let number = parseInt(input.value);
		input.value = ""
		
		result = document.querySelector('#result')
		if (!isNaN(number)) {
			if (is_prime(number)) {
				result.innerHTML = number + " é primo!";
			} else {
				result.innerHTML = number + " não é primo!";
			}
		} else {
			result.innerHTML = "Número inválido!";
		}
	}                       
});

