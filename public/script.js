/* CALCULOS CPM */
const botonCalcular = document.getElementById("calcular");
const impresiones = document.getElementById("impresiones");
const botonReset = document.getElementById("reset");
const bloqueCalculos = document.getElementById("bloque-calculos");
const contenidoOriginal = bloqueCalculos.innerHTML;

/* Boton reset */
botonReset.addEventListener("click", () => {
  impresiones.value = "";
});

botonReset.addEventListener("click", () => {
  bloqueCalculos.innerHTML = contenidoOriginal;
});

/* Tarifario */
botonCalcular.addEventListener("click", () => {
  let cpmTarifario = parseFloat(impresiones.value);
  cpmTarifario = ((cpmTarifario * 80) / 1000).toLocaleString();

  const resultado1 = document.getElementById("cpmTarifario");
  resultado1.textContent = cpmTarifario;

/* Piso */
  let cpmPiso = parseFloat(impresiones.value);
  cpmPiso = ((cpmPiso * 25) / 1000).toLocaleString();

  const resultado2 = document.getElementById("cpmPiso");
  resultado2.textContent = cpmPiso;
});

/* Libre + porcentaje de diferencia*/
const cpmLibre = document.getElementById('valorinput');
const botonIncrementar = document.getElementById('botonIncrementar');
const botonDecrementar = document.getElementById('botonDecrementar');

botonIncrementar.addEventListener('click', () => {
  cpmLibre.value = parseInt(cpmLibre.value) + 1;
 });

botonDecrementar.addEventListener('click', () => {
  cpmLibre.value = parseInt(cpmLibre.value) - 1;
 });

botonCalcular.addEventListener("click", () => {
  cpmLibre2 = cpmLibre.value;
  resultadoLibre = ((impresiones.value * cpmLibre2) / 1000).toLocaleString();

  const resultado3 = document.getElementById('cpmLibre');
   resultado3.textContent = resultadoLibre;
});