const imageGallery = [
    "https://images.unsplash.com/photo-1666616343677-bd7a7941c849?q=80&w=3027&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/flagged/photo-1575555201693-7cd442b8023f?q=80&w=2232&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1542737579-ba0a385f3b84?q=80&w=3088&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    "https://i.pinimg.com/736x/c2/24/50/c2245051be2e36408757aa1a4ff1dcf1.jpg"
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

prevButton.addEventListener('click', function() {
    currentImageIndex = (currentImageIndex - 1 +imageGallery.length) % imageGallery.length;
    updateImage();
});