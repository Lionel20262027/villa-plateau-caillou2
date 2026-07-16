/* ==========================================================
   Villa Plateau Caillou
   gallery.js
========================================================== */

const GALLERY = {

    hero : [
        "images/hero/001.jpg"
    ],

    piscine : [
        "images/piscine/001.jpg",
        "images/piscine/002.jpg",
        "images/piscine/003.jpg",
        "images/piscine/004.jpg",
        "images/piscine/005.jpg",
        "images/piscine/006.jpg"
    ],

    terrasse : [
        "images/terrasse/001.jpg",
        "images/terrasse/002.jpg"
    ],

    salon : [
        "images/salon/001.jpg",
        "images/salon/002.jpg"
    ],

    cuisine : [
        "images/cuisine/001.jpg"
    ],

    chambre1 : [
        "images/chambre1/001.jpg",
        "images/chambre1/002.jpg",
        "images/chambre1/003.jpg",
        "images/chambre1/004.jpg"
    ],

    chambre2 : [
        "images/chambre2/001.jpg",
        "images/chambre2/002.jpg",
        "images/chambre2/003.jpg"
    ],

    chambre3 : [
        "images/chambre3/001.jpg",
        "images/chambre3/002.jpg",
        "images/chambre3/003.jpg",
        "images/chambre3/004.jpg"
    ],

    jardin : [
        "images/jardin/001.jpg",
        "images/jardin/002.jpg",
        "images/jardin/003.jpg",
        "images/jardin/004.jpg",
        "images/jardin/005.jpg",
        "images/jardin/006.jpg"
    ],

    vue : [
        "images/vue/001.jpg",
        "images/vue/002.jpg",
        "images/vue/003.jpg",
        "images/vue/004.jpg",
        "images/vue/005.jpg"
    ]

};


/* ==========================================================
   Liste complète de toutes les photos
========================================================== */

const ALL_PHOTOS = [];

Object.entries(GALLERY).forEach(([category, photos]) => {

    photos.forEach(photo => {

        ALL_PHOTOS.push({

            src: photo,
            category: category

        });

    });

});
