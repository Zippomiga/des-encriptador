const encryptBox = document.querySelector('#area-texto')
const decryptBox = document.querySelector('#area-texto2')

function encrypt() {
	let regExp = /[^a-z\s\n]/
	let invalid = regExp.test(encryptBox.value)
	let invCh = regExp.exec(encryptBox.value)

	if(invalid) {
		encryptBox.style.border = "1px solid darkred"
		decryptBox.style.border = "1px solid darkred"
		decryptBox.value = `Caracter "${invCh[0]}" inválido`
	} else {
		encryptBox.style.border = "1px solid green"
		decryptBox.style.border = "1px solid green"
		decryptBox.value = encryptBox.value
			.replaceAll('e', 'enter')
			.replaceAll('i', 'imes')
			.replaceAll('a', 'ai')
			.replaceAll('o', 'ober')
			.replaceAll('u', 'ufat')
	}
}

function decrypt() {
	encryptBox.value = encryptBox.value
		.replaceAll('enter', 'e')
		.replaceAll('imes', 'i')
		.replaceAll('ai', 'a')
		.replaceAll('ober', 'o')
		.replaceAll('ufat', 'u')
	decryptBox.value = ''
}

function copyText() {
	navigator.clipboard.writeText(decryptBox.value)
}

document.querySelector('.botonEncriptar').addEventListener('click', encrypt)
document.querySelector('.botonDesencriptar').addEventListener('click', decrypt)
document.querySelector(".botonCopiar").addEventListener('click', copyText)