// let mouseDownTime;
// let mouseUpTime;

// const button = document.getElementById("svg-aux"); // Reemplaza "miBoton" con el ID de tu botón

// button.addEventListener("mousedown", function(event) {
//   mouseDownTime = new Date().getTime();
// });

// button.addEventListener("mouseup", function(event) {
//   mouseUpTime = new Date().getTime();
//   const tiempoTranscurrido = mouseUpTime - mouseDownTime;

//   if (tiempoTranscurrido >= 1000) { // Cambia 1000 por la duración en milisegundos que desees
//     console.log("Botón mantenido durante un segundo o más");
//     // Realiza aquí la acción que desees cuando el botón se mantiene presionado.
//   }
// });

// document.getElementById("menu-aux").addEventListener("mousedown", function () {
//     var menu = document.getElementById("menu");
//     menu.style.display = "block";
    
//     // Ocultar el menú después de 5 segundos (5000 milisegundos)
//     setTimeout(function () {
//         menu.style.display = "none";
//     }, 5000);
// });
// Define la cantidad de segundos antes de que se muestre el menú
// const segundosParaMostrarMenu = 5;

// // Función para mostrar el menú después de ciertos segundos
// function mostrarMenu() {
//   const menu = document.getElementById('menu');
//   menu.classList.remove('hidden');
// }

// // Espera el tiempo especificado antes de mostrar el menú
// setTimeout(mostrarMenu, segundosParaMostrarMenu * 1000);

const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
    button.addEventListener("click", () =>{
        const offset = button.dataset.carouselButton === "next" ? 1 : -1
        const slides = button.closest("[data-carousel]").querySelector('[data-slides]')

        const activeSlide = slides.querySelector("[data-active]")
        let newIndex = [...slides.children].indexOf(activeSlide) + offset
        if(newIndex < 0) newIndex = slides.children.length - 1
        if(newIndex >= slides.children.length) newIndex = 0

        slides.children[newIndex].dataset.active = true
        delete activeSlide.dataset.active
    })
})
document.querySelector('.carousel').addEventListener('mouseover', function () {
    document.querySelector('.carousel-button.prev').style.display = 'block';
    
  });
  document.querySelector('.carousel').addEventListener('mouseout', function () {
    document.querySelector('.carousel-button.prev').style.display = 'none';
    
}); 
  document.querySelector('.carousel').addEventListener('mouseover', function () {
    document.querySelector('.carousel-button.next').style.display = 'block';
  });

document.querySelector('.carousel').addEventListener('mouseout', function () {
    document.querySelector('.carousel-button.next').style.display = 'none';
});