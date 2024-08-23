const textArea = document.querySelector (".text-area");
const mensaje = document.querySelector (".mensaje");

//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

function btnEncriptar(){
 const textoEncriptado = encriptar(textArea.value)  
 mensaje.value = textoEncriptado
 textArea.value = "";
 mensaje.style.backgroundImage = "none"
}

function encriptar(stringEncriptada){
    let matrzCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i <matrzCodigo.length; i++) {
    if (stringEncriptada.includes(matrzCodigo[i][0])){
       stringEncriptada = stringEncriptada.replaceAll(matrzCodigo[i][0],matrzCodigo[i][1])

    }
    }

return stringEncriptada
}
function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)  
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage="none";
   }

   function desencriptar(stringDesencriptada){
       let matrzCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
       stringDesencriptada = stringDesencriptada.toLowerCase()
   
       for(let i = 0; i <matrzCodigo.length; i++) {
       if (stringDesencriptada.includes(matrzCodigo[i][1])){
          stringDesencriptada = stringDesencriptada.replaceAll(matrzCodigo[i][1],matrzCodigo[i][0])
   
       }
       }
   
   return stringDesencriptada
   }


   function copiarTexto() {
    mensaje.select();
    navigator.clipboard.writeText("copy")
        .then(() => {
            alert("Texto copiado ");
            textArea.value = mensaje.value;
            }
        )}
        
