
  const checkbox = document.getElementById('ct1');
  const elementosTabla = document.querySelectorAll('.si1');

  // Agregar un evento al checkbox
  checkbox.addEventListener('change', function() {
    // Iterar sobre los elementos de la tabla
    elementosTabla.forEach(elemento => {
      // Verificar si el checkbox está marcado
      if (checkbox.checked) {
        // Mostrar los elementos de la tabla
        elemento.style.display = 'table-cell';
      } else {
        // Ocultar los elementos de la tabla
        elemento.style.display = 'none';
      }
    });
  });
    const checkbox1 = document.getElementById('ci1');
  const elementosTabla1 = document.querySelectorAll('.no1');

  // Agregar un evento al checkbox
  checkbox1.addEventListener('change', function() {
    // Iterar sobre los elementos de la tabla
    elementosTabla1.forEach(elemento => {
      // Verificar si el checkbox está marcado
      if (checkbox1.checked) {
        // Mostrar los elementos de la tabla
        elemento.style.display = 'table-cell';
      } else {
        // Ocultar los elementos de la tabla
        elemento.style.display = 'none';
      }
    });
  });

// segunda tabla

  const checkbox2 = document.getElementById('ct');
  const elementosTabla2 = document.querySelectorAll('.si');

  // Agregar un evento al checkbox
  checkbox2.addEventListener('change', function() {
    // Iterar sobre los elementos de la tabla
    elementosTabla2.forEach(elemento => {
      // Verificar si el checkbox está marcado
      if (checkbox2.checked) {
        // Mostrar los elementos de la tabla
        elemento.style.display = 'table-cell';
      } else {
        // Ocultar los elementos de la tabla
        elemento.style.display = 'none';
      }
    });
  });
    const checkbox3 = document.getElementById('ci');
  const elementosTabla3 = document.querySelectorAll('.no');

  // Agregar un evento al checkbox
  checkbox3.addEventListener('change', function() {
    // Iterar sobre los elementos de la tabla
    elementosTabla3.forEach(elemento => {
      // Verificar si el checkbox está marcado
      if (checkbox3.checked) {
        // Mostrar los elementos de la tabla
        elemento.style.display = 'table-cell';
      } else {
        // Ocultar los elementos de la tabla
        elemento.style.display = 'none';
      }
    });
  });
