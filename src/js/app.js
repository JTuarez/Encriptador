// Textarea
const encriptar = document.querySelector(".user-text");
const copiar = document.querySelector(".inputCopy");

// boton
const texto = document.querySelector(".text-found");
const notFound = document.querySelector(".not-found");

// mensaje
let mensaje;

document.addEventListener("keyup", () => {
  let de = "ÁÃÀÄÂÉËÈÊÍÏÌÎÓÖÒÔÚÜÙÛÑÇáãàäâéëèêíïìîóöòôúüùûñç´",
    a = "AAAAAEEEEIIIIOOOOUUUUNCaaaaaeeeeiiiioooouuuunc",
    re = new RegExp("[" + de + "]", "ug");

  encriptar.value = encriptar.value.replace(re, (match) =>
    a.charAt(de.indexOf(match))
  );

  encriptar.value = encriptar.value.toLowerCase();
});

function encrypt() {
  if (encriptar.value) {
    mensaje = encriptar.value
      .replaceAll("e", "enter")
      .replaceAll("i", "imes")
      .replaceAll("a", "ai")
      .replaceAll("u", "ufat")
      .replaceAll("o", "ober");

    copiar.value = mensaje;
    encriptar.value = "";
    texto.classList.remove("display-none");
    notFound.classList.add("display-none");
  } else {
    texto.classList.add("display-none");
    notFound.classList.remove("display-none");
  }
}

function decrypt() {
  if (encriptar.value) {
    mensaje = encriptar.value
      .replaceAll("ai", "a")
      .replaceAll("imes", "i")
      .replaceAll("enter", "e")
      .replaceAll("ober", "o")
      .replaceAll("ufat", "u");

    copiar.value = mensaje;
    encriptar.value = "";
    texto.classList.remove("display-none");
    notFound.classList.add("display-none");
  } else {
    texto.classList.add("display-none");
    notFound.classList.remove("display-none");
  }
}

function copy() {
  copiar.select();
  copiar.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copiar.value);
}
