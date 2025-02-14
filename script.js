// Reemplazo del autoplay con carga asincrónica
window.onload = () => {
    const audio = new Audio('musica_romantica.mp3');
    audio.loop = true;
    audio.play();
};

// Mostrar el mensaje de sorpresa
document.getElementById("btnSorprise").addEventListener("click", function() {
    document.getElementById("mensaje").classList.remove("hidden");
    document.getElementById("videoContainer").classList.remove("hidden"); // Muestra el video
    const video = document.getElementById("videoSorpresa");
    video.play(); // Inicia la reproducción del video
});

// Validación y carga del archivo de audio subido
document.getElementById('fileUpload').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file && file.type.startsWith('audio/')) {
        const audioPlayer = document.getElementById('audioPlayer');
        audioPlayer.src = URL.createObjectURL(file);
        audioPlayer.classList.remove('hidden');
    } else {
        alert('Por favor, sube un archivo de audio válido.');
    }
});

let index = 0;
function moveCarousel(step) {
    const carousel = document.getElementById("recuerdosCarousel");
    const items = document.querySelectorAll(".carousel-item");
    index = (index + step + items.length) % items.length;
    carousel.style.transform = `translateX(-${index * 100}%)`;
}
// Función para mover el carrusel de recuerdos
function moveCarousel(direction) {
    const carousel = document.getElementById("recuerdosCarousel");
    const slideWidth = carousel.querySelector("img").clientWidth;
    let currentTransform = parseInt(window.getComputedStyle(carousel).transform.split(',')[4]) || 0;

    if (direction === 'left') {
        if (currentTransform < 0) {
            carousel.style.transform = `translateX(${currentTransform + slideWidth}px)`;
        }
    } else if (direction === 'right') {
        if (Math.abs(currentTransform) < (carousel.scrollWidth - carousel.clientWidth)) {
            carousel.style.transform = `translateX(${currentTransform - slideWidth}px)`;
        }
    }
}

// Función para abrir el modal de imagen
function openImageModal(image) {
    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");
    
    modalImage.src = image.src;
    modal.classList.remove("hidden");
}

// Función para cerrar el modal
document.getElementById("closeModal").addEventListener("click", function() {
    document.getElementById("imageModal").classList.add("hidden");
});
