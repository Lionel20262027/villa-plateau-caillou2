/* ==========================================================
   Villa Plateau Caillou - Galerie
========================================================== */

const GALLERY = {
    hero:    ["images/hero/001.jpg"],
    piscine: ["images/piscine/001.jpg", "images/piscine/002.jpg", "images/piscine/003.jpg",
              "images/piscine/004.jpg", "images/piscine/005.jpg"],
    terrasse:["images/terrasse/001.jpg", "images/terrasse/002.jpg"],
    salon:   ["images/salon/001.jpg", "images/salon/002.jpg"],
    cuisine: ["images/cuisine/001.jpg"],
    chambre1:["images/chambre1/001.jpg", "images/chambre1/002.jpg",
              "images/chambre1/003.jpg", "images/chambre1/004.jpg"],
    chambre2:["images/chambre2/001.jpg", "images/chambre2/002.jpg"],
    chambre3:["images/chambre3/001.jpg", "images/chambre3/002.jpg",
              "images/chambre3/003.jpg", "images/chambre3/004.jpg"],
    jardin:  ["images/jardin/001.jpg", "images/jardin/002.jpg", "images/jardin/003.jpg",
              "images/jardin/004.jpg", "images/jardin/005.jpg", "images/jardin/006.jpg"],
    vue:     ["images/vue/001.jpg", "images/vue/002.jpg", "images/vue/003.jpg",
              "images/vue/004.jpg", "images/vue/005.jpg"]
};

/* Liste complète de toutes les photos */
const ALL_PHOTOS = [];

Object.entries(GALLERY).forEach(([category, photos]) => {

    if (category === "hero") return;

    photos.forEach(photo => {
        ALL_PHOTOS.push({
            src: photo,
            category: category
        });
    });

});
let currentImageIndex = 0;

/* ==================== LIGHTBOX ==================== */
function openLightbox(src) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    lightboxImage.src = src;
    lightbox.style.display = 'flex';
    currentImageIndex = ALL_PHOTOS.findIndex(photo => photo.src === src);
    updateCounter();
}

function updateCounter(){

    document.getElementById("lightboxCounter").textContent =
        (currentImageIndex + 1) + " / " + ALL_PHOTOS.length;

}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % ALL_PHOTOS.length;
    document.getElementById('lightboxImage').src = ALL_PHOTOS[currentImageIndex].src;
    updateCounter();
}

function showPreviousImage() {
    currentImageIndex = (currentImageIndex - 1 + ALL_PHOTOS.length) % ALL_PHOTOS.length;
    document.getElementById('lightboxImage').src = ALL_PHOTOS[currentImageIndex].src;
    updateCounter();
}

/* ==================== INITIALISATION ==================== */
document.addEventListener('DOMContentLoaded', function() {
    const galleryGrid = document.getElementById('galleryGrid');
    const showAllBtn = document.getElementById('showAll');

    // Afficher les premières photos
    galleryGrid.innerHTML = '';
    ALL_PHOTOS.slice(0, 12).forEach(photo => {
        const img = document.createElement('img');
        img.src = photo.src;
        img.alt = photo.category;
        img.loading = "lazy";
        img.addEventListener('click', () => openLightbox(photo.src));
        galleryGrid.appendChild(img);
    });

    // Bouton "Voir toutes les photos"
    if (showAllBtn) {
        showAllBtn.addEventListener('click', function() {
            galleryGrid.innerHTML = '';
            ALL_PHOTOS.forEach(photo => {
                const img = document.createElement('img');
                img.src = photo.src;
                img.alt = photo.category;
                img.loading = "lazy";
                img.addEventListener('click', () => openLightbox(photo.src));
                galleryGrid.appendChild(img);
            });
            showAllBtn.style.display = 'none';
            galleryGrid.scrollIntoView({ behavior: "smooth" });
        });
    }

    // Lightbox controls
    const closeBtn = document.querySelector('.close');
    const prevBtn = document.querySelector('.previous');
    const nextBtn = document.querySelector('.next');

    if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
    if (prevBtn) prevBtn.addEventListener('click', showPreviousImage);
    if (nextBtn) nextBtn.addEventListener('click', showNextImage);

    // Fermer en cliquant dehors
    document.getElementById('lightbox').addEventListener('click', function(e) {
        if (e.target === this) closeLightbox();
    });

    // Navigation clavier
    document.addEventListener('keydown', function(e) {
        const lightbox = document.getElementById('lightbox');
        if (lightbox.style.display === 'flex') {
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowRight') showNextImage();
            if (e.key === 'ArrowLeft') showPreviousImage();
        }
    });
});