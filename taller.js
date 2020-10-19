//if(condicion){
//	instrucciones 
//}

 //let age=102;
 //let name = "Chabelo";
 //if(name === Chabelo){
 //	console.log("Bienvenido "+" name");
 //}
 //else{
 //	console.log("Bienvenidx");
 //}
// > Mayor que 
// < Menor que 
// >= Mayor o igual 
// <= Menor o igual
// || OR
// && AND
// ! NOT

// if(age >= 100){
// 	alert("Si que es grande");
// }
// else if(name == "Chabelo"){
// 	alert("Bienvenida "+ name);
// }
//let hour = prompt("¿A que hora nos vemos ?");
//switch(hour){
//	case " 5 ":
//		alert("Es muy tarde");
//		break ;

//	case "1":
//		alert("Estamos a tiempo")
//		break;

//	default:
//		alert("Mejor otro dia")
//		break;
//}

function saludoConInput() {
  // document.getElementById consigue un elemento del DOM por su identificador (id)
  var nameInput = document.getElementById("nameInput");
  // De esta forma obtenemos el texto colocado dentro del input
  var name = nameInput.value;
  
  // Object.innerHTML = ... inserta elemento html o texto dentro del objeto
  var element = document.getElementById("resultado");
  element.innerHTML = "Hola " + name + '... Bienvenidx!'
}

function(){
  var contador1 = 0;
  
  document.getElementById('primerOpcion').addEventListener('click',
    function(){
      if (contador === 1){
        document.write('elegiste iniciar con historia');
        contador = 0;
      }
      else{
        contador++;
      }
    });
}();

function(){
  var contador2 = 0;
document.getElementById('segundaOpcion').addEventListener('click',
    function(){
      if (contador === 1){
        document.write('elegiste iniciar con historia');
        contador = 0;
      }
      else{
        contador++;
      }
    });
}();