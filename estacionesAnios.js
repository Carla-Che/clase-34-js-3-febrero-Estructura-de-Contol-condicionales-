///Crear un programa que pida una estación del año y mostrar en un mensaje la fecha en la que comienza y termina

const estacionesAnios = prompt("Ingrese una estacion del anio");

switch(estacionesAnios){
    case "Primavera":
       alert("Desde el 21 de Septiembre hasta el 21 de Diciembre") 
       break;
    case "Verano":
        alert("Desde el 21 de Diciembre hasta el 21 de Marzo") 
        break;
    case "Otoño":
       alert("Desde el 21 de Marzo hasta el 21 de Junio" )  
       break;
    case "Invierno":
        alert("Desde el 21 de Junio hasta el 21 de Septiembre")
        break; 
    default:
        alert("elegir una estacion correcta");
}