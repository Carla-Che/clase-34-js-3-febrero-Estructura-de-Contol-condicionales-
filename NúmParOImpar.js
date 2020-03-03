//Crear un programa que pida al usuario ingresar un numero y mostrar en un mensaje si el valor ingresado es par o impar
const numeroAIngresar = Number(prompt("Por favor ingrese un numero"));
if ((numeroAIngresar % 2) == 0) {
    alert(`El número ${numeroAIngresar} es par`);
} else {
    alert(`El número ${numeroAIngresar} es impar`)
};

