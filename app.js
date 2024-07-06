// Referencias a elementos del DOM
const resultadoImagen = document.querySelector(".resultado__imagen");
const resultadosAviso = document.querySelector(".mostrar__resultados__aviso");
const resultadoTexto = document.querySelector(".resultado");
const copiarBoton = document.querySelector("#copiarBoton");

// Función para encriptar el texto
function encriptarTexto(texto) {
  let textoEncriptado = "";

  for (let i = 0; i < texto.length; i++) {
    switch (texto[i]) {
      case "e":
        textoEncriptado += "enter";
        break;
      case "i":
        textoEncriptado += "imes";
        break;
      case "a":
        textoEncriptado += "ai";
        break;
      case "o":
        textoEncriptado += "ober";
        break;
      case "u":
        textoEncriptado += "ufat";
        break;
      default:
        textoEncriptado += texto[i];
    }
  }
  return textoEncriptado;
}

// Función para desencriptar el texto
function desencriptarTexto(textoEncriptado) {
  let textoOriginal = textoEncriptado;
  textoOriginal = textoOriginal.replace(/enter/g, "e");
  textoOriginal = textoOriginal.replace(/imes/g, "i");
  textoOriginal = textoOriginal.replace(/ai/g, "a");
  textoOriginal = textoOriginal.replace(/ober/g, "o");
  textoOriginal = textoOriginal.replace(/ufat/g, "u");
  return textoOriginal;
}

//Funcion para el boton encriptar
function encriptar() {
  let textoEntrada = document.querySelector("#texto__ingresado").value;
  if (textoEntrada.trim() === "") {
    mostrarImagenNoMensaje();
  } else {
    let textoEncriptado = encriptarTexto(textoEntrada);
    mostrarResultado(textoEncriptado);
  }
}

//Funcion para el boton Desencriptar
function desencriptar() {
  let textoEntrada = document.querySelector("#texto__ingresado").value;
  if (textoEntrada.trim() === "") {
    mostrarImagenNoMensaje();
  } else {
    let textoDesencriptado = desencriptarTexto(textoEntrada);
    mostrarResultado(textoDesencriptado);
  }
}

function mostrarResultado(resultado) {
  // Ocultar la imagen y el aviso
  resultadoImagen.classList.add("oculto");
  resultadosAviso.classList.add("oculto");
  // Mostrar el resultado
  resultadoTexto.innerText = resultado;
  // Mostrar el botón de copiar
  copiarBoton.classList.remove("oculto");
}

function mostrarImagenNoMensaje() {
  // Mostrar la imagen y el aviso
  resultadoImagen.classList.remove("oculto");
  resultadosAviso.classList.remove("oculto");
  // Limpiar el resultado de texto
  resultadoTexto.innerText = "";
  // Ocultar el botón de copiar
  copiarBoton.classList.add("oculto");
}

function copiarTexto() {
  const texto = resultadoTexto.innerText;
  navigator.clipboard
    .writeText(texto)
    .then(() => {
      alert("Texto copiado al portapapeles");
    })
    .catch((err) => {
      console.error("Error al copiar el texto: ", err);
    });
}
