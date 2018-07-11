function mostrar()
{
//tomo la edad  
var edad;
var estado civil;
edad=document.getElementById('edad').value;
if (edad < 18) {
document.getElementById("estadoCivil").value=estadoCivil;
alert("Es muy pequeño para NO ser soltero");
}


}//FIN DE LA FUNCIÓN