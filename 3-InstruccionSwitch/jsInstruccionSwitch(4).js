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
	alert("Tiene más de 30 días.");
case "Junio":
	alert("Tiene más de 30 días.");
case "Septiembre":
	alert("Tiene más de 30 días.");
case "Noviembre":
	alert("Tiene más de 30 días.");
	break;
default:
alert("Tiene 31 dias");
}

}//FIN DE LA FUNCIÓN