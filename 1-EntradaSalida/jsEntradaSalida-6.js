/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
var numeroUno; 
var numeroDos;
var resultado;
resultado=66;

numeroUno=document.getElementById('numeroUno').value;
numeroUno=parseInt(numeroUno);
numeroDos=document.getElementById('numeroDos').value;
numeroDos=parseInt(numeroDos);
resultado= numeroUno+numeroDos

alert("El resultado de la suma es " + resultado);

/*Todo lo que obtenga del prompt, es texto.
Todo lo que obtenga de getelementbyid. es una palabra
para tomar el document.g (by id) va primero el nombre de la variable,
para mostrar al reves
Siempre que haya dos palabras la segunda va en mayuscula EJEMPLO: "numeroUno"
PARSEINT retorna un valor. Le paso un numero me devuelve un numero. 
SI O SI EL SIGNO DE = Adelante y con un numero que le proceda.*/
/*EL ID EN HTML SE ENCUENTRA POSICIONANDOTE EN EL CUADRO CLICK DERECHO INSPECCIONAR*/

}