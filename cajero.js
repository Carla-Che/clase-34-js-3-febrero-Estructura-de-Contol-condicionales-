///Crear un programa que muestre el dinero inicial, y que permita retirar dinero hasta 3 veces preguntando cuánto se desea retirar, y mostrando el dinero restante a continuación. Si se intenta retirar más dinero del disponible, o no cuenta con dinero disponible, debe mostrar un mensaje alertándolo e impedir seguir retirando.


let dineroInicial = 10000;

let extraccion = confirm(`Usted tiene ${dineroInicial} pesos. ¿Desea retirar dinero?`);

if (extraccion) {
    monto = Number(prompt(`Le quedan 3 extracciones.
    Cuanto desea extraer?`));
    if (dineroInicial>= monto) {
        dineroInicial-= monto;
        extraccion = confirm(`Usted tiene ${dineroInicial} pesos.Quiere extraer dinero?`);
        if (withdrawal) {


            ////SIN TERMINAR POR FRITURA DE NEURONAS///
           