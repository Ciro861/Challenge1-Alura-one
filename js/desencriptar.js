function desencriptar() {



    var texto = document.getElementById("textoEncriptar").value;
    var replace = texto.replace(/enter/gi, 'e').replace(/imes/gi, 'i').replace(/ai/gi, 'a').replace(/ober/gi, 'o').replace(/ufat/gi, 'u');

    var resultado = document.getElementById("texto-resultado");

    resultado.value += replace;
    formulario1.reset();


}
var boton = document.getElementById("desencriptar");
boton.onclick = desencriptar;