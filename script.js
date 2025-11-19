function abrirCupon() {
          document.getElementById("overlayCupon").classList.add("active");
          document.getElementById("modalCupon").classList.add("active");
      }

      function cerrarCupon() {
          document.getElementById("overlayCupon").classList.remove("active");
          document.getElementById("modalCupon").classList.remove("active");
      }

      // Cerrar al tocar fuera del cupón
      document.getElementById("overlayCupon").addEventListener("click", cerrarCupon);
  