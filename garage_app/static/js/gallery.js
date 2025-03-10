// Select gallery and images
const gallery = document.querySelector('.gallery');
const galleryImages = document.querySelectorAll('.gallery span img');
const modal = document.getElementById('imageModal');
const fullScreenImage = document.getElementById('fullScreenImage');
const closeModal = document.querySelector('.close');

// Open modal and stop gallery rotation
galleryImages.forEach((img) => {
    img.addEventListener('click', (e) => {
        modal.style.display = 'flex'; // Show modal
        fullScreenImage.src = img.src; // Set modal image to clicked image source
        gallery.style.animation = 'none'; // Stop gallery rotation
    });
});

// Close modal and restore gallery rotation
closeModal.addEventListener('click', () => {
    modal.style.display = 'none'; // Hide modal
    gallery.style.animation = ''; // Resume gallery rotation
});

// Close modal when clicking outside the image
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
        gallery.style.animation = ''; // Resume gallery rotation
    }
});
