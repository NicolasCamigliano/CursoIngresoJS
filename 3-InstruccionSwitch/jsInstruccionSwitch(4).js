function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
switch(mesDelAño)
{case "Febrero":
	alert("Tiene más de 28 días.");
	break;
case "Abril":
case "Junio":
case "Septiembre":	
case "Noviembre":
	alert("Tiene más de 30 días.");
	break;
default:
alert("Tiene 31 dias");
}

}//FIN DE LA FUNCIÓN