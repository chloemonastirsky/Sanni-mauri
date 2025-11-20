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
  // MODAL RESTRICCIONES
const modalRestriccion = document.getElementById('modalRestriccion');
const openModalRestriccion = document.getElementById('openModalRestriccion');
const closeModalRestriccion = document.getElementById('closeModalRestriccion');

openModalRestriccion.onclick = () => modalRestriccion.classList.add('active');
closeModalRestriccion.onclick = () => modalRestriccion.classList.remove('active');

// MODAL CATEGORÍAS
const modalCategoria = document.getElementById('modalCategoria');
const openModalCategoria = document.getElementById('openModalCategoria');
const closeModalCategoria = document.getElementById('closeModalCategoria');

openModalCategoria.onclick = () => modalCategoria.classList.add('active');
closeModalCategoria.onclick = () => modalCategoria.classList.remove('active');

// Cerrar al tocar fuera (opcional)
window.onclick = (e) => {
  if (e.target.classList.contains('modal-restriccion')) {
    e.target.classList.remove('active');
  }
}