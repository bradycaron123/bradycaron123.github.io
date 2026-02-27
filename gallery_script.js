const imageGallery = [
    "https://images.unsplash.com/photo-1666616343677-bd7a7941c849?q=80&w=3027&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://cdn.shopify.com/s/files/1/1623/9935/files/AdobeStock_206937573_1_1024x1024.jpg?v=1651604195",
    "https://media.istockphoto.com/id/2229758992/photo/small-waterfall-and-river.jpg?s=1024x1024&w=is&k=20&c=cKWoVYwUtuwU-Zlqlb5tUFj7LKYnO7d_FGjGSOSx3dQ="
];

const imageElement = document.getElementById('gallery-image');
const prevButton = document.getElementById('prev-btn');
const nextButton = document.getElementById('next-btn');

let currentImageIndex = 0;

function updateImage() {
    imageElement.src = imageGallery[currentImageIndex];
}

updateImage();
 
nextButton.addEventListener('click', function() {
    currentImageIndex = (currentImageIndex + 1) % imageGallery.length;
    updateImage();
});

