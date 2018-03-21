function validarCedula(){

	var cedulaIngresada=document.getElementById("input_cedula").value;
	cedulaIngresada=cedulaIngresada.toUpperCase();
	var longitud= cedulaIngresada.length;
	var prefijo=valPrefijo(cedulaIngresada);
	var fecha= valFecha(cedulaIngresada);
	var sufijo=valSufijo(cedulaIngresada);
	var letraIngresada=cedulaIngresada.substring(13,14);
	var letraEncotrada=obtenerLetra(cedulaIngresada);

	if(!cedulaIngresada){
		alert("Debe ingresar una cedula");
		return;	}
	if(cedulaIngresada.length!=14){
		alert("La cedula Ingresada no cumple con la longitud correcta");
		return;	}
	if(prefijo==false){
		alert("El prefijo no es valido");		
		return ;}
	if (fecha==false){
		alert("La fecha ingresa no es valida");
		return;	}
	if (letraIngresada!=letraEncotrada){
		alert("La cedula no es valida");
		return;	}

alert("la cedula es valida")
document.getElementById('men').innerHTML ="La cedula "+cedulaIngresada+" es valida";
 //document.getElementById('mensaje').innerHTML = "<strong>La cedula " + cedulaIngresada +" Es valida </strong>";


}

function valPrefijo(cedulaIngresada){
	var pref=cedulaIngresada.substring(0,3);
	var re = new RegExp("^[0-9]{3}$");
	if (pref.search(re) == -1)
            return false;
			
        return true;
}

function valFecha(cedulaIngresada){
	var fec=cedulaIngresada.substring(3,9);
	var re = new RegExp("^(0[1-9]|[12][0-9]|3[01])(0[1-9]|1[012])([0-9]{2})$");
	if (fec.search(re) == -1)
        	return false;
            
        return true;
            
}
function valSufijo(cedulaIngresada){
	var suf=cedulaIngresada.substring(9,14);
	var re = new RegExp("^[0-9]{4}[A-Y]$");
	if (suf.search(re) == -1)
       	 return false;
        
        return true;
}


function cedSinLentra(cedulaIngresada){
	return cedulaIngresada.substring(0,13);
}

function obtenerLetra(cedulaIngresada){
	var letras="ABCDEFGHJKLMNPQRSTUVWXY";
	var posicion=0;
	var cedulaSinLetra=cedSinLentra(cedulaIngresada);
	var numCedula=cedulaSinLetra;

	posicion=(numCedula - Math.floor(numCedula/23.0)*23);
			
	var letraEncontrada=letras.charAt(posicion);	

	return letraEncontrada;

}