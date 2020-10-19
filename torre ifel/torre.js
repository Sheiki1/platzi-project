var d = document.getElementById("TORRE");
var lienzo = d.getContext("2d");
console.log(lienzo);
var xi;
var xf;

while {
  
}

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
lienzo.beginPath();
lienzo.strokeStyle = color;
lienzo.moveTo( xinicial, yinicial);
lienzo.lineTo( xfinal, yfinal);
lienzo.stroke();
lienzo.closePath();
}
