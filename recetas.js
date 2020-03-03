///Crear un programa que pregunte por separado si tiene 5 ingredientes. Según los ingredientes que tenga, mostrar un mensaje con todas las comidas que puede cocinar. Debe haber opciones para 5, 4, 3 y 2 ingredientes. Para cada cantidad, debe haber al menos 2 comidas/recetas posibles (excepto para la de 5). Se deben mostrar todas las posibles, incluyendo las que requieran menos ingredientes que las que se tienen (por ejemplo, si se tienen 4 ingredientes, se pueden hacer las de 3 y 2). Si no hay ninguna que pueda hacerse también debe mostrarse un mensaje.

const tieneHuevo = confirm("Tiene Huevos?");
const tieneManteca = confirm("Tiene Manteca?");
const tienePapa = confirm("Tiene Papa?");
const tieneQueso = confirm("Tiene Queso?");
const tieneCarne = confirm("Tiene Carne?");

const superMix = tieneCarne && tieneQueso && tieneHuevo && tienePapa && tieneManteca

const carneConPapayHuevo = tieneCarne && tieneHuevo && tienePapa && tieneManteca
const carneConPureYQueso = tieneCarne && tieneQueso && tienePapa && tieneManteca

const tortillaPapa = tieneHuevo && tienePapa && tieneQueso
const carneConPure = tienePapa && tieneCarne && tieneManteca

const omelette = tieneHuevo && tieneQueso; 
const pastelPapas = tienePapa && tieneCarne;

if (superMix){
    alert('Ustede puede hacer la receta SuperMix');
}
if (tortillaPapa){
    alert('Ustede puede hacer la receta Tortilla de Papa');
}

if(omelette){
    alert('Ustede puede hacer la receta Omelette');
}
if(pastelPapas){
    alert('Ustede puede hacer la receta para un Pastel de papas');
}
if(carneConPure){
    alert('Ustede puede hacer la receta Carne con Pure');
}
if(carneConPureYQueso){
    alert('Ustede puede hacer la receta para un Carne con Pure y Queso');
}
if(carneConPapayHuevo){
    alert('Ustede puede hacer la receta para un Carne con Papa y Huevo');
}
else{
    alert('Usted no puede realizar ninguna receta. Vaya al super!');
}
    


