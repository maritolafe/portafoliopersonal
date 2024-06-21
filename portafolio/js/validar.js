function iniciar(){
	
    document.formu.addEventListener("invalid",validacion, true);
    document.getElementById("enviar").addEventListener("click",enviar, false);}
function validacion(e){

var elemento=e.target;
elemento.style.background='#FFDDDD';
var parrafo=document.getElementById("parrafo");
parrafo.innerHTML='falta rellenar el campo';

}

function enviar(){


	var valido=document.formu.checkValidity();
if(valido){
document.formu.submit();


}
}
window.addEventListener("load", iniciar, false);
 //window.location.replace("gracias.php");

	const from=document.getElementById("comentario");
from.addEventListener("submit",function(event){ 
event.preventDefault();
return;
})





