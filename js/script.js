//Get the current date and year
const currentDate = new Date();
const year = currentDate.getFullYear();
const date = currentDate.toLocaleDateString();

// Display the date and year in the footer
document.getElementById("footer-info").innerText = `Today's date: ${date} | Year: ${year}`;

//Image Gallery Script
const gallery = document.getElementById("gallery");
const images = [
    "img/product18.png.png",
    "https://via.placehold.com/600x400?text=Image+2",
    "https://via.placehold.com/600x400?text=Image+3",
    "https://via.placehold.com/600x400?text=Image+4",
    "https://via.placehold.com/600x400?text=Image+5",
    "https://via.placehold.com/600x400?text=Image+6"
];

// Load gallery images
images.forEach((src, index) => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = `Image $(index + 1)`;
    img.addEventListener("click", () => openLightbox(index));
    gallery.appendChild(img);
});

//Lightbox functionality
let currentIndex = 0;
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const caption = document.getElementById("caption");

function openLightbox(index) {
    currentIndex = index;
    lightboxImg.src = images[currentIndex];
    caption.textContent = `Image $(currentIndex + 1) of $(images.length)`;
    lightbox.style.display = "flex";
}

function closeLightbox() {
    lightbox.style.display = "none";
}

function changeImage (direction) {
    currentIndex += direction;
    if (currentIndex < 0) currentIndex = images.length - 1;
    if (currentIndex >= images.length) currentIndex = 0;
    openLightbox(currentIndex);
}

function updateCaption() {
    caption.textContent = `Image $(currentIndex + 1) of $(images.length)`;
}

//Close the lightbox when clicking the X
document.querySelector(".close").addEventListener("click", closeLightbox);

//Navigate through images
document.querySelector(".prev").addEventListener("click", () => changeImage (-1));
document.querySelector(".next").addEventListener("click", () => changeImage(1));

//Close lightbox when clicking outside the image
lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
});