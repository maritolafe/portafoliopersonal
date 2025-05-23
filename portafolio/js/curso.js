var foto = document.getElementById("segunda");
var dato = document.getElementsByTagName("dato");
var tabla1 = document.getElementById("tabla1");
var tabla2 = document.getElementById("tabla2");
var checkCarrera = document.getElementById("checkcarrera");
var checkCurso = document.getElementById("checkcurso");

foto.style.transition = "height 2s ease-in-out";

function cursos() {
  if (tabla1.style.display == "block") {
    tabla1.style.display = "none";
    checkCarrera.checked = false;
    foto.style.height = "100px";
  } else {
    tabla1.style.display = "block";
    tabla2.style.display = "none";
    foto.style.height = "200px";

    checkCarrera.checked = true;
    checkCurso.checked = false;
  }
}

function cursos2() {
  if (tabla2.style.display == "block") {
    foto.style.height = "100px";
    tabla2.style.display = "none";
    checkCurso.checked = false;
  } else {
    foto.style.height = "200px";
    tabla2.style.display = "block";
    tabla1.style.display = "none";

    checkCurso.checked = true;
    checkCarrera.checked = false;
  }
}

window.onload = function () {
  /*var foto = document.getElementById("segunda");
  var tabla1 = document.getElementById("tabla1");
  var tabla2 = document.getElementById("tabla2");
  var checkCarrera = document.getElementById("checkcarrera");
  var checkCurso = document.getElementById("checkcurso");*/

  foto.style.height = "100px";
  tabla1.style.display = "none";
  tabla2.style.display = "none";

  checkCarrera.checked = false;
  checkCurso.checked = false;
  /* checkbox.checked = false;
  checkbox1.checked = false;
  checkbox2.checked = false;
  checkbox3.checked = false;
  elementosTabla.style.display = "none";
  elementosTabla1.style.display = "none";
  elementosTabla2.style.display = "none";
  elementosTabla3.style.display = "none";*/
};
