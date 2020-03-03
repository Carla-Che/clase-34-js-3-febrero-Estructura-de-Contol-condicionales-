///Crear un programa que pida por un mes y devuelva la cantidad de días que ese mes tiene.

const month = prompt("ingrese un mes del anio");

if (month === "enero" || month === "marzo" || month === "mayo" || month === "julio" || month === "agosto" || month === "octubre" || month === "diciembre") {
    alert(`${month} tiene 31 días`);
} else if (month === "abril" || month === "junio" || month === "septiembre" || month === "noviembre") {
    alert(`${month} tiene 30 días`);
} else if (month === "febrero") {
    alert("El mes ingresado tiene 29 días");
} else {
    alert("Escriba un mes del anio")
};



