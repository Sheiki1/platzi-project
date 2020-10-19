
var peruvianSoles;
var mexicanPesos;
var chileanPesos;
function coinConverter(usDollars){
  var arr = [];
  peruvianSoles = usDollars*3.25;
  mexicanPesos = usDollars*18;
  chileanPesos = usDollars*660;
  arr.push(peruvianSoles);
  arr.push(mexicanPesos);
  arr.push(chileanPesos);
  return arr;
}
console.log(coinConverter(50));
console.log(coinConverter(85));
console.log(coinConverter(100));
