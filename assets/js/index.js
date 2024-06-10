const precioBase = 400000;
const cantidadSpan = document.querySelector(".cantidad");
const precioInicialSpan = document.querySelector(".precio-inicial");
const totalSpan = document.querySelector(".valor-total");
const btnSuma = document.getElementById("suma");
const btnResta = document.getElementById("resta");

precioInicialSpan.innerHTML = precioBase;
let cantidad = 0;
cantidadSpan.innerHTML = cantidad;
totalSpan.innerHTML = precioBase * cantidad;

function actualizarTotal() {
  totalSpan.innerHTML = precioBase * cantidad;
}

btnSuma.onclick = function () {
  cantidad++;
  cantidadSpan.innerHTML = cantidad;
  actualizarTotal();
};

btnResta.onclick = function () {
  cantidad--;
  cantidadSpan.innerHTML = cantidad;
  actualizarTotal();
};
