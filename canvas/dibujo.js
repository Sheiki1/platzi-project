var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
console.log(lienzo);

dibujarLinea("red", 150 , 150 , 150 , 15 );
dibujarLinea("red", 150 , 15 , 250 , 25 );
dibujarLinea("red", 250 , 25 , 150 , 50 );
dibujarLinea("red", 15 , 150 , 275 , 150 );
dibujarLinea("red", 15 , 150 , 75 , 275 );
dibujarLinea("red", 75 , 275 , 225 ,275  );
dibujarLinea("red", 225 , 275 , 275 ,150  );

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
lienzo.beginPath();
lienzo.strokeStyle = color;
lienzo.moveTo( xinicial, yinicial);
lienzo.lineTo( xfinal, yfinal);
lienzo.stroke();
lienzo.closePath();
}
