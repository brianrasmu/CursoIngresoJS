/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var uno;
	var dos;
	var resultado;

	uno=document.getElementById('numeroUno').value;
	dos=document.getElementById('numeroDos').value;

	resultado=parseInt(uno)+parseInt(dos);

	alert("la Suma es "+resultado);
}

function restar()
{
	var uno;
	var dos;
	var resultado;

	uno=document.getElementById('numeroUno').value;
	dos=document.getElementById('numeroDos').value;

	resultado=parseInt(uno)-parseInt(dos);

	alert("la Resta es "+resultado);
}

function multiplicar()
{ 
	var uno;
	var dos;
	var resultado;

	uno=document.getElementById('numeroUno').value;
	dos=document.getElementById('numeroDos').value;

	resultado=parseInt(uno)*parseInt(dos);

	alert("la Multiplicacion es "+resultado);
}

function dividir()
{
	var uno;
	var dos;
	var resultado;

	uno=document.getElementById('numeroUno').value;
	dos=document.getElementById('numeroDos').value;

	resultado=parseInt(uno)/parseInt(dos);

	alert("la Division es "+resultado);
}

