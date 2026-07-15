/* ==========================================================
   Villa Plateau Caillou
   gallery.js
========================================================== */

const gallery = [

/* ==========================================================
   HERO
========================================================== */

{
    image:"images/hero.jpg",
    title:"Villa Plateau Caillou",
    category:"hero",
    featured:true
},

/* ==========================================================
   PISCINE
========================================================== */

{
    image:"images/piscine1.jpg",
    title:"Piscine",
    category:"Piscine",
    featured:true
},

{
    image:"images/piscine2.jpg",
    title:"Piscine",
    category:"Piscine",
    featured:true
},

{
    image:"images/piscine3.jpg",
    title:"Piscine de nuit",
    category:"Piscine"
},

/* ==========================================================
   TERRASSE
========================================================== */

{
    image:"images/terrasse1.jpg",
    title:"Terrasse",
    category:"Terrasse",
    featured:true
},

{
    image:"images/terrasse2.jpg",
    title:"Terrasse",
    category:"Terrasse"
},

/* ==========================================================
   SALON
========================================================== */

{
    image:"images/salon.jpg",
    title:"Salon",
    category:"Salon"
},

/* ==========================================================
   CUISINE
========================================================== */

{
    image:"images/cuisine.jpg",
    title:"Cuisine équipée",
    category:"Cuisine"
},

/* ==========================================================
   CHAMBRES
========================================================== */

{
    image:"images/chambre1.jpg",
    title:"Suite parentale",
    category:"Chambre"
},

{
    image:"images/chambre2.jpg",
    title:"Chambre 2",
    category:"Chambre"
},

{
    image:"images/chambre3.jpg",
    title:"Chambre 3",
    category:"Chambre"
},

/* ==========================================================
   JARDIN
========================================================== */

{
    image:"images/jardin1.jpg",
    title:"Jardin",
    category:"Jardin"
},

{
    image:"images/jardin2.jpg",
    title:"Jardin tropical",
    category:"Jardin"
},

/* ==========================================================
   VUE MER
========================================================== */

{
    image:"images/vue1.jpg",
    title:"Vue Océan",
    category:"Vue",
    featured:true
},

{
    image:"images/vue2.jpg",
    title:"Coucher de soleil",
    category:"Vue"
}

];


/* ==========================================================
   Génération de la galerie
========================================================== */

const galleryGrid = document.getElementById("galleryGrid");

gallery.forEach((photo,index)=>{

    const card=document.createElement("div");

    card.className="gallery-item fade";

    card.dataset.index=index;

    card.innerHTML=`
        <img
            src="${photo.image}"
            alt="${photo.title}"
            loading="lazy">

        <div class="gallery-caption">

            <strong>${photo.title}</strong><br>

            ${photo.category}

        </div>
    `;

    card.addEventListener("click",()=>{

        openLightbox(index);

    });

    galleryGrid.appendChild(card);

});


/* ==========================================================
   Lightbox
========================================================== */

let currentIndex=0;

const lightbox=document.getElementById("lightbox");
const lightboxImage=document.getElementById("lightboxImage");

function openLightbox(index){

    currentIndex=index;

    lightbox.classList.add("active");

    updateLightbox();

}

function updateLightbox(){

    lightboxImage.src=gallery[currentIndex].image;

    lightboxImage.alt=gallery[currentIndex].title;

}

function nextImage(){

    currentIndex++;

    if(currentIndex>=gallery.length)
        currentIndex=0;

    updateLightbox();

}

function previousImage(){

    currentIndex--;

    if(currentIndex<0)
        currentIndex=gallery.length-1;

    updateLightbox();

}


/* ==========================================================
   Boutons
========================================================== */

document.querySelector(".next")
.addEventListener("click",nextImage);

document.querySelector(".previous")
.addEventListener("click",previousImage);

document.querySelector(".close")
.addEventListener("click",()=>{

    lightbox.classList.remove("active");

});


/* ==========================================================
   Clavier
========================================================== */

document.addEventListener("keydown",(e)=>{

    if(!lightbox.classList.contains("active"))
        return;

    switch(e.key){

        case "ArrowRight":
            nextImage();
            break;

        case "ArrowLeft":
            previousImage();
            break;

        case "Escape":
            lightbox.classList.remove("active");
            break;

    }

});


/* ==========================================================
   Bouton "Voir toutes les photos"
========================================================== */

const showAll=document.getElementById("showAll");

if(showAll){

    showAll.addEventListener("click",()=>{

        openLightbox(0);

    });

}