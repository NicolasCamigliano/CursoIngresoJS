function mostrar()
{
	//tomo la edad  
	var edad;
	edad=document.getElementById('edad').value;

	/*if (edad > 12) 
	{
	alert("No es adolescente");
	}
	if (edad < 17) 
	{
	alert("No es adolescente");
	}*/

	if(edad < 12 || edad > 17){
	alert("No es adolescente");
	}


}//FIN DE LA FUNCIÓN