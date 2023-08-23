/* Calculos CPM */

const botonCalcular = document.getElementById('calcular');
const impresiones = document.getElementById('impresiones');

/* Tarifario */
botonCalcular.addEventListener('click', () => {
let cpmTarifario = parseFloat(impresiones.value);
cpmTarifario = ((cpmTarifario * 80) / 1000).toLocaleString();

const resultado1 = document.getElementById('cpmTarifario');
resultado1.textContent = cpmTarifario;

/* Piso */
let cpmPiso = parseFloat(impresiones.value);
cpmPiso = ((cpmPiso * 25) / 1000).toLocaleString();

const resultado2 = document.getElementById('cpmPiso');
resultado2.textContent = cpmPiso;
});

/* Libre */

/* Porcentaje */