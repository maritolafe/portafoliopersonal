// Sección del DOM
const dato1 = document.querySelectorAll(".dato1"); // En proceso
const dato2 = document.querySelectorAll(".dato2"); // Terminadas
const dato3 = document.querySelectorAll(".dato3"); // En proceso
const dato4 = document.querySelectorAll(".dato4"); // Terminadas
function actualizarVista() {
  const terminado = document.getElementById("ct1").checked; // TERMINADA
  const proceso = document.getElementById("ci1").checked; // EN PROCESO

  // Mostrar u ocultar "en proceso"
  dato1.forEach((fila) => {
    fila.style.display = proceso ? "table-row" : "none";
  });

  // Mostrar u ocultar "terminada"
  dato2.forEach((fila) => {
    fila.style.display = terminado ? "table-row" : "none";
  });
  document.getElementById("segunda").style.height = "auto";
}
function actualizarVista2() {
  const terminado = document.getElementById("ct").checked; // TERMINADA
  const proceso = document.getElementById("ci").checked; // EN PROCESO

  // Mostrar u ocultar "en proceso"
  dato3.forEach((fila) => {
    fila.style.display = proceso ? "table-row" : "none";
  });

  // Mostrar u ocultar "terminada"
  dato4.forEach((fila) => {
    fila.style.display = terminado ? "table-row" : "none";
  });
  document.getElementById("segunda").style.height = "auto";
}
