// PROYECTO CARRITO DE COMPRAS


let productos = 
[
    {id: 1, nombre: "Remera bicolor", tipo: "remera", desc: "Remera blanca y negra con cut-outs", precio: 2000},
    {id: 2, nombre: "Musculosa", tipo: "remera", desc: "Musculosa estampada con flores", precio: 3000},
    {id: 3, nombre: "Pantalon wave", tipo: "pantalon", desc: "Pantalon de corderoy tiro alto con recortes", precio: 4000},
    {id: 4, nombre: "Puffer stardust", tipo: "campera", desc: "Campera puffer de matelasse holográfico ", precio: 5000},
    {id: 5, nombre: "Corset dulapeep", tipo: "corset", desc: "Corset de creppe satinado sastrero y lurex ", precio: 6000},
]


function carrito (productos){


	let userInput = true
	let selectedProducts = []



	while (userInput){
		userInput = prompt("Seleccione el numero asignado al producto y v vaya sumando al carrito: \n 1)Remera \n 2)Musculosa \n 3)Pantalon \n 4)Campera \n 5)Corset \n Presione 6 para finalizar la compra");
		if (userInput == 6) break;
		gettedProduct = productos.find ( (producto) => producto.id == userInput);
		if (gettedProduct!=undefined){
			selectedProducts.push(gettedProduct);
			alert(`Se ha añadido el producto ${gettedProduct.nombre} con un precio de $${gettedProduct.precio} ARS`)	 
		}
		else alert("El producto seleccionado no es válido");

	}
	let totalPrice = 0;
	let purchaseDetail = "";

	for (const product of selectedProducts){
		const productPrice = product.precio;
		const productName = product.nombre
		totalPrice += productPrice;
		purchaseDetail += `${productName} - $${productPrice}\n`
	}
	if (selectedProducts.length <= 0){
		return alert("No hay productos en el carrito");
	}else{	
		alert(`${purchaseDetail}El monto total es de $${totalPrice} ARS`)
	}
	console.log(selectedProducts);
}

carrito(productos)