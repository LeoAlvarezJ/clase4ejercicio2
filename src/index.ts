let dato1 = document.getElementById("dato1");
let dato2 = document.getElementById("dato2");

let btnEnviar = document.getElementById("enviar");
let rotulo1 = document.getElementById("rotulo1");
let rotulo2 = document.getElementById("rotulo2");

rotulo1.innerHTML = "Ingrese la cantidad de productos";
rotulo2.innerHTML = "Ingrese el precio del producto";

btnEnviar.addEventListener("click", () => {
  let cantidad: number = Number(dato1.value);
  let precio: number = Number(dato2.value);

  let compra: number = precio * cantidad;

  if (compra > 1000) {
    compra = compra * 0.9;

    console.log("Felicitaciones! Obtuviste un descuento : $ ", compra);
  } else {
    console.log("El total de su compra es : $", compra);
  }
});
