function encriptarTexto () {
    var texto = document.querySelector('#area-texto').value;

    if (validarCaracteres(texto) == true) {
        var textoEncriptado = texto.replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/a/g, 'ai').replace(/o/g, 'ober').replace(/u/g, 'ufat');
        document.querySelector('#area-texto').style.border = "1px solid green";
        document.querySelector('#area-texto2').style.border = "1px solid green";
    } 

    else {
        textoEncriptado = "Caracter inválido";
        document.querySelector('#area-texto').style.border = "1px solid darkred";
        document.querySelector('#area-texto2').style.border = "1px solid darkred";
    }
    
    document.querySelector('#area-texto2').value = textoEncriptado;
}

var botonEncriptar = document.querySelector('.botonEncriptar');
botonEncriptar.onclick = encriptarTexto;

function desencriptarTexto () {
    var texto = document.querySelector('#area-texto').value;

    if (validarCaracteres(texto) == true) {
        var textoDesencriptado = texto.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ai/g, 'a').replace(/ober/g, 'o').replace(/ufat/g, 'u');
    }
    
    else {
        textoDesencriptado = "Caracter inválido";
    }

    document.querySelector('#area-texto2').value = textoDesencriptado;
}

var botonDesencriptar = document.querySelector('.botonDesencriptar');
botonDesencriptar.onclick = desencriptarTexto;


function copiarTexto () {
    var texto = document.querySelector('#area-texto2').value;
    navigator.clipboard.writeText(texto);
}

var botonCopiar = document.querySelector(".botonCopiar");
botonCopiar.onclick = copiarTexto;


function validarCaracteres (textoAValidar) {
    var filtro = "abcdefghijklmnñopqrstuvwxyz "; //<--Caracteres únicamente válidos

    for (var i = 0; i < textoAValidar.length; i++) {

        var caracterValido = false;
        for (var j = 0; j < filtro.length; j++) {

            if (textoAValidar[i] == filtro[j]) {
                caracterValido = true;
                break;
            }
        }
        if (caracterValido == false) {
            return false;
        } 
    }
    return true;
}