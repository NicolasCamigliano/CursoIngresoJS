function mostrar()
{
	//tomo la edad  
	/*var edad;
	edad=document.getElementById('edad').value;
	if (edad > 17){
	alert("Es mayor de edad");
	}
	
	if (edad > 12 && edad < 18){
	alert("Es un adolescente");
	}
	
	if (edad < 13){
	alert("Es un niño");
	}*/ /*Version Disney FUNCIONA (Utiliza mas procesador)*/
	
	var edad;
	edad=document.getElementById('edad').value;
	if (edad < 13){
	alert("Es un niño");
	}else
	if(edad > 17){
	alert("Es mayor de edad");
	}else
	alert("Es un adolescente");
	/*Version simplificada, que utiliza menos procesador
	MAYOR Y MENOR SIEMPRE SON LAS MAS FACILES, 
	sino tendria que utilizar && u || dependiendo el caso
	OBVIAMOS LA MAS DIFICIL*/

}//FIN DE LA FUNCIÓN