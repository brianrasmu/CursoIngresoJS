/*Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'MOSTRAR'*/
function Mostar()
{
	//esto es un comentario
	//alert("anda");
	//toda linea de instruccion, termina con punto y coma (;)
	var nombre; 
	/*
	es en bloque
	alert("nombre");
	alert(nombre);
	nombre="Brian";
	alert(nombre);
	*/
	nombre=prompt("Ingrese su nombre","natalia natalia");
	/*
	alert("Su nombre es:");
	alert(nombre);
	*/
	alert("Su nombre es: "+nombre);
	//var person = prompt("Please enter your name", "Harry Potter");
}

