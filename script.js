// Obtener los elementos del menú con submenús
const submenus = document.querySelectorAll('.submenu');

// Agregar eventos de escucha para mostrar/ocultar los submenús
submenus.forEach(submenu => {
  const link = submenu.parentElement.querySelector('a');
  link.addEventListener('mouseenter', () => {
    submenu.style.display = 'inline-block';
  });

  link.addEventListener('mouseleave', () => {
    submenu.style.display = 'none';
  });
});


// Obtener la URL actual
      var currentURL = window.location.href;

      // Obtener todos los enlaces del menú
      var menuLinks = $('.submenu li a');

      // Iterar sobre los enlaces del menú
      menuLinks.each(function() {
        // Obtener la URL del enlace
        var linkURL = this.href;

        // Comparar la URL actual con la URL del enlace
        if (currentURL === linkURL) {
          // Agregar la clase "active" al enlace padre
          $(this).parent().addClass('active');
          
          // Mostrar el menú desplegable correspondiente
          $(this).closest('.submenu').addClass('active');
        }
      });
    });



const contenedor = document.querySelector('.contenedor');
const texto = document.querySelector('.nombre');

if (texto.scrollWidth > contenedor.offsetWidth) {
  texto.classList.add('responsive');
} else {
  texto.classList.remove('responsive');
}

