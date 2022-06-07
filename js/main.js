// PROYECTO CARRITO DE COMPRAS
let compra = 0
let remera = 2000;
let musculosa = 3000;
let pantalon = 4000;
let campera = 5000;
let corset = 6000;
let user = 1

function carrito (compra){
	while (user >= 1 && user <=6 ){
		let user = prompt("Seleccione el numero asignado al producto y v vaya sumando al carrito: \n 1)Remera \n 2)Musculosa \n 3)Pantalon \n 4)Campera \n 5)Corset \n Presione 6 para finalizar la compra");
			if(user == 1){
				compra += remera;
				alert("Se ha sumado Remera ($2000) al carrito. El total por ahora es de: $" +compra+".");
			}else if (user == 2){
				compra += musculosa;
				alert("Se ha sumado Musculosa ($3000) al carrito. El total por ahora es de: $" +compra+".");
			}else if (user == 3){
				compra += pantalon;
				alert("Se ha sumado Pantalon ($4000) al carrito. El total por ahora es de: $" +compra+".");
			}else if (user == 4){
				compra += campera;
				alert("Se ha sumado Campera ($5000) al carrito. El total por ahora es de: $" +compra+".");
			} else if (user == 5){
				compra += corset;
				alert("Se ha sumado Corset ($6000) al carrito. El total por ahora es de: $" +compra+".");
			} else if (user == 6){
				alert("Se ha completado la compra. El monto a pagar es: $"+ compra +".");
				break;
			}
			else{
				alert("Esa no es una opción valida. Vuelva a cargar la página.")
				let user=1
				break
			}

	}
}

console.log(carrito(compra))