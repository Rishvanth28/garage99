document.addEventListener('DOMContentLoaded', function() {
    const carImage = document.querySelector('.slide.first img');

    // Function to move the image when scrolling
    window.addEventListener('scroll', function() {
        let scrollPos = window.scrollY;

        // Move the image to the left as the user scrolls
        carImage.style.transform = `translateX(-${scrollPos *1.3}px)`; 
        // Moves the image to the left based on scroll position

        // Fade out the image after scrolling a certain distance (e.g., 1200px)
        if (scrollPos > 1200) {
            carImage.style.opacity = '0';  // Fade out the image
        } else {
            carImage.style.opacity = '1';  // Keep the image visible before 1200px scroll
        }
    });
});
  

