document.addEventListener("DOMContentLoaded", () => {
    const servicesListItems = document.querySelectorAll('#services-list li');
    const serviceTitle = document.getElementById('service-title');
    const serviceDescription = document.getElementById('service-description');
    const serviceImage = document.querySelector('.photos-gallery .filter-image');

    // Check if elements are present
    if (!servicesListItems || !serviceTitle || !serviceDescription || !serviceImage) {
        console.error("One or more elements are missing from the DOM.");
        return;
    }

    servicesListItems.forEach(item => {
        item.addEventListener('click', () => {
            // Remove active class from all items
            servicesListItems.forEach(i => i.classList.remove('active'));
            // Add active class to the clicked item
            item.classList.add('active');
            
            // Update the title, description, and image based on the clicked item
            const title = item.textContent;
            const description = item.getAttribute('data-description');
            const image = item.getAttribute('data-image');

            if (title && description && image) {
                serviceTitle.textContent = title;
                serviceDescription.textContent = description;
                serviceImage.src = image;
            } else {
                console.error("Missing data attributes for the clicked item.");
            }
        });
    });
});
