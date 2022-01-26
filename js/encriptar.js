function encriptar() {



    var texto = document.getElementById("textoEncriptar").value.toLowerCase();
    var replace = texto.replace(/e/gi, 'enter').replace(/i/gi, 'imes').replace(/a/gi, 'ai').replace(/o/gi, 'ober').replace(/u/gi, 'ufat');

    var resultado = document.getElementById("texto-resultado");

    resultado.value = replace
    formulario1.reset();

}

var boton = document.getElementById("encriptar");
boton.onclick = encriptar;



function copy() {
    var copyText = document.getElementById("texto-resultado");
    copyText.select();
    document.execCommand("copy");
    formulario.reset();
}

var botonCopy = document.getElementById("copiar");
botonCopy.onclick = copy;