function Mostrar()
{
//tomo la edad  

	var edad;
	edad=document.getElementById('edad').value;
	if (edad<13) 
	{
		alert("Niño.");
	}
	else
		if (edad>17) 
		{
		alert("Mayor.");
		}
		else
			alert("Adolescente.");

/*
	if (edad>17) 
	{
		alert("Mayor.");
	}
	if(edad>12 && edad<18) 
	{
		alert("Adolescente.");
	}
	if (edad<13) 
	{
		alert("Niño.");
	}
*/

}//FIN DE LA FUNCIÓN