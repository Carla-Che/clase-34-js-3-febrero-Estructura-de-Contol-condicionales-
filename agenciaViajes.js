///Hacer un programa que muestre al usuario una lista de destinos con precio por día por persona (ofrecer 3 promos con destinos y precios distintos). Preguntarle cuál desea elegir. Una vez hecho eso, preguntarle cuántas personas y cuántos días desea hospedarse. Mostrarle el precio final y preguntarle si quiere editar algún dato. Si quiere hacerlo, preguntarle cuál de ellos: destino, personas o días, permitirle ingresar un nuevo valor y mostrar un mensaje con las opciones y el precio actualizado.

let precioJujuy = Number('3000');
let precioUsuhaia = Number('5000');
let precioBariloche = Number('4000');

let destinosJujuy = prompt("Quiere viajar a Jujuy x 7 dias a $3000 por persona?");
let destinosUsuhaia = prompt("Quiere viajar a Usuhaia x 7 dias a $5000 por persona");
let destinosBariloche = prompt("Quiere viajar a Bariloche x 7 dias a $4000 por persona");

let cantidadTuristas = Number(prompt('cuantas personas viajaran al destino elegido?'));
let cantidadEstadia = Number(prompt('cuantos dias se quedaran en el destino elegido?'));

let precioFinal = Number(destinosJujuy = precioJujuy * cantidadTuristas * cantidadEstadia);

alert(`El total a abonar es de ${precioFinal}`);

let editarDatos = confirm("Desea editar algun dato?");

if(editarDatos =! alert(`Gracias por elegirnos, un representante se contactara con usted`)){
   
('editarDatos ===' );
     confirm('Modificar cantidad de personas');
     confirm('modificar cantidad de dias?');
}
         








