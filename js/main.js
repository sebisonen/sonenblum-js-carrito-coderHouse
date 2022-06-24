// PROYECTO CARRITO DE COMPRAS
let products = 
[
    {id: 1, name: "Polo Sunchaser", talle: "xs", stock: 5, garment: "remera", desc: "Remera blanca y negra con cut-outs", price: 5000, image: "../fotos/producto-top2.webp"},
    {id: 2, name: "Top MoonDragon", talle: "xs", stock: 5, garment: "top", desc: "Top de saten de seda estampado dragon", price: 3500, image: "../fotos/producto-top.webp"},
    {id: 3, name: "Body WaterDragon", talle: "xs", stock: 5, garment: "Bodysuite", desc: "Body de microtul estampado dragon", price: 4000, image: "../fotos/producto-body.webp"},
	{id: 4, name: "Polo Sunchaser", talle: "s", stock: 5, garment: "remera", desc: "Remera blanca y negra con cut-outs", price: 5000, image: "../fotos/producto-top2.webp"},
    {id: 5, name: "Top MoonDragon", talle: "s", stock: 5, garment: "top", desc: "Top de saten de seda estampado dragon", price: 3500, image: "../fotos/producto-top.webp"},
    {id: 6, name: "Body WaterDragon", talle: "s", stock: 5, garment: "Bodysuite", desc: "Body de microtul estampado dragon", price: 4000, image: "../fotos/producto-body.webp"},
	{id: 7, name: "Polo Sunchaser", talle: "m", stock: 5, garment: "remera", desc: "Remera blanca y negra con cut-outs", price: 5000, image: "../fotos/producto-top2.webp"},
    {id: 8, name: "Top MoonDragon", talle: "m", stock: 5, garment: "top", desc: "Top de saten de seda estampado dragon", price: 3500, image: "../fotos/producto-top.webp"},
    {id: 9, name: "Body WaterDragon", talle: "m", stock: 5, garment: "Bodysuite", desc: "Body de microtul estampado dragon", price: 4000, image: "../fotos/producto-body.webp"},
	{id: 10, name: "Polo Sunchaser", talle: "l", stock: 5, garment: "remera", desc: "Remera blanca y negra con cut-outs", price: 5000, image: "../fotos/producto-top2.webp"},
    {id: 11, name: "Top MoonDragon", talle: "l", stock: 5, garment: "top", desc: "Top de saten de seda estampado dragon", price: 3500, image: "../fotos/producto-top.webp"},
    {id: 12, name: "Body WaterDragon", talle: "l", stock: 5, garment: "Bodysuite", desc: "Body de microtul estampado dragon", price: 4000, image: "../fotos/producto-body.webp"},
	{id: 13, name: "Polo Sunchaser", talle: "xl", stock: 5, garment: "remera", desc: "Remera blanca y negra con cut-outs", price: 5000, image: "../fotos/producto-top2.webp"},
    {id: 14, name: "Top MoonDragon", talle: "xl", stock: 5, garment: "top", desc: "Top de saten de seda estampado dragon", price: 3500, image: "../fotos/producto-top.webp"},
    {id: 15, name: "Body WaterDragon", talle: "xl", stock: 5, garment: "Bodysuite", desc: "Body de microtul estampado dragon", price: 4000, image: "../fotos/producto-body.webp"},
]

function arrayOfProductForCards (products){
	for (let product = 0; product < products.length; product++) {
		let comparedProduct = 0
		while(comparedProduct<products.length){
			if((products[comparedProduct].name == products[product].name)&&(comparedProduct!=product)){
				products.splice([comparedProduct],1);
			}else{
				comparedProduct++;
			}
		}
	};
}




// ENTREGA DOM Y EVENTOS
const catalogo = document.getElementById("catalogo")
const productPage = document.getElementById("productPage")

let listOfProductCards= []
function createCards (products){
	
	products.forEach(el => {
		arrayOfProductForCards(products)
		let figure = document.createElement("figure");
		figure.className = "productoContenedor"
		figure.innerHTML = `
		<img class= "tamañoFoto" src=${el.image} alt=${el.desc}>
		<figcaption class="producto__descripcion--tipografia">
			<a href="producto.html" class="correctorVinculos producto__descripcion--tipografia">${el.name}</a>
			<p>$${el.price}</p>
		</figcaption>`
		listOfProductCards.push(el);
		catalogo.appendChild(figure);
		
})};

createCards(products)

// TERMINA ENTREGA DOM Y EVENTOS

// BOTON MAS Y MENOS
// const contador = document.getElementById("contador"),
// 	btnMas = document.getElementById("aumentar"),
// 	btnMenos = document.getElementById("disminuir");

// let cont = 0;
// function goUpAndDown(num){
// 	cont += num;
// 	contador.innerHTML = cont;
// }
// btnMas.addEventListener("click", () => {

// })







// FUNCION CARRITOS ALERT
// function carrito (products){
// 	let userInput = true
// 	let selectedProducts = []
// 	while (userInput){
// 		userInput = prompt("Seleccione el numero asignado al producto y v vaya sumando al carrito: \n 1)Remera \n 2)Musculosa \n 3)Pantalon \n 4)Campera \n 5)Corset \n Presione 6 para finalizar la compra");
// 		if (userInput == 6) break;
// 		gettedProduct = products.find ( (product) => product.id == userInput);
// 		if (gettedProduct!=undefined){
// 			selectedProducts.push(gettedProduct);
// 			alert(`Se ha añadido el producto ${gettedProduct.name} con un precio de $${gettedProduct.price} ARS`)	 
// 		}
// 		else alert("El producto seleccionado no es válido");
// 	}
// 	let totalPrice = 0;
// 	let purchaseDetail = "";
// 	for (const product of selectedProducts){
// 		const productPrice = product.price;
// 		const productName = product.name
// 		totalPrice += productPrice;
// 		purchaseDetail += `${productName} - $${productPrice}\n`
// 	}
// 	if (selectedProducts.length <= 0){
// 		return alert("No hay productos en el carrito");
// 	}else{	
// 		alert(`${purchaseDetail}El monto total es de $${totalPrice} ARS`)
// 	}
// 	console.log(selectedProducts);
// }

