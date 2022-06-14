// PROYECTO CARRITO DE COMPRAS


let compra = 0
let remera = 2000;
let musculosa = 3000;
let pantalon = 4000;
let campera = 5000;
let corset = 6000;
let user = 1
let resumenDeCompra = []

function carrito (compra){
	while (user >= 1 && user <=6 ){
		let user = prompt("Seleccione el numero asignado al producto y v vaya sumando al carrito: \n 1)Remera \n 2)Musculosa \n 3)Pantalon \n 4)Campera \n 5)Corset \n Presione 6 para finalizar la compra");
			if(user == 1){
				compra += remera;
				resumenDeCompra.push("Remera ($2000)")
				alert("Se ha sumado Remera ($2000) al carrito. El total por ahora es de: $" +compra+".");
			}else if (user == 2){
				compra += musculosa;
				resumenDeCompra.push("Musculosa ($3000)")
				alert("Se ha sumado Musculosa ($3000) al carrito. El total por ahora es de: $" +compra+".");
			}else if (user == 3){
				compra += pantalon;
				resumenDeCompra.push("Pantalon wave ($4000).")
				alert("Se ha sumado Pantalon ($4000) al carrito. El total por ahora es de: $" +compra+".");
			}else if (user == 4){
				compra += campera;
				resumenDeCompra.push("Puffer stardust ($5000).")
				alert("Se ha sumado Campera ($5000) al carrito. El total por ahora es de: $" +compra+".");
			} else if (user == 5){
				compra += corset;
				resumenDeCompra.push("Corset dulapeep ($6000).")
				alert("Se ha sumado Corset ($6000) al carrito. El total por ahora es de: $" +compra+".");
			} else if (user == 6){
				alert("Se ha completado la compra. El monto a pagar es: $"+ compra +". Este es el resumen de compra: \n"+resumenDeCompra);
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






// borrador

// let resumenCompra = []
// let Productos = 
// [
//     {id: 1, nombre: "Remera bicolor", tipo: "remera", desc: "Remera blanca y negra con cut-outs", precio: 2000},
//     {id: 2, nombre: "Musculosa", tipo: "remera", desc: "Musculosa estampada con flores", precio: 3000},
//     {id: 3, nombre: "Pantalon wave", tipo: "pantalon", desc: "Pantalon de corderoy tiro alto con recortes", precio: 4000},
//     {id: 4, nombre: "Puffer stardust", tipo: "campera", desc: "Campera puffer de matelasse holográfico ", precio: 5000},
//     {id: 5, nombre: "Corset dulapeep", tipo: "corset", desc: "Corset de creppe satinado sastrero y lurex ", precio: 6000},
// ]