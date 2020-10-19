function restaurantBill(bill){
  var tax = bill*0.01;
  var total = "$"+(bill + tax )/5;
  return total;
}
console.log(restaurantBill(50));
