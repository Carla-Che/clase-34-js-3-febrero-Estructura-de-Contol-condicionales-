//Crear un programa que pida al usuario ingresar su año de nacimiento y mostrar en un mensaje a que generación pertenece (baby boomer, gen y, millenial, centennial, o ninguna de ellas).

const userAge = Number(prompt("Por favor, ingrese su anio de nacimiento"));

if (userAge >= 1949 && userAge <= 1968) {
    alert(`Usted pertenece a la generación Baby Boomers`);
} else if (userAge >= 1969 && userAge <= 1980) {
    alert(`Ustede pertenece a la generacion Generacion X`);
} else if (userAge >= 1981 && userAge <= 1993) {
    alert(`Usted pertenece a la generacion Millenial`);
} else if (userAge >= 1994 && userAge <= 2010) {
    alert(`Usted pertenece a la Generacion Z`);
} else{ 
    alert(`Por favor, ingrese anios comprendidos entre 1949 y 2010`);
}