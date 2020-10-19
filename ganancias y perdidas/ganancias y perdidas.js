var ingresosUsuario = prompt("Ingrese sus ingresos ");
var costosUsuario = prompt("Ingrese sus costos ");
var impuestosUsuario = prompt("Ingrese el porentaje(%) de sus impuestos ");
var restaCostos = ingresosUsuario-costosUsuario;
var impuestos = restaCostos*impuestosUsuario/100;
var valorNeto = restaCostos - impuestos;
document.write("tu ganacia neta es " + valorNeto );
