// Get all clickable images
const clickableImages = document.querySelectorAll('.clickable');

// Get the modal and its components
const imageModal = document.getElementById('imageModal');
const modalImage = imageModal.querySelector('.modal-body img');
const closeModalButton = imageModal.querySelector('.close');

// Create a background overlay element
const overlay = document.createElement('div');
overlay.classList.add('overlay');

// Add click event listeners to each clickable image
clickableImages.forEach(image => {
    image.addEventListener('click', () => {
        // Get the data-image attribute to determine the large image URL
        const imageUrl = image.getAttribute('data-image');

        // Update the modal's image source with the large image URL
        modalImage.setAttribute('src', imageUrl);

        // Show the modal
        imageModal.classList.add('show');
        imageModal.style.display = 'block';
        document.body.classList.add('modal-open');

        // Check if the image's width is smaller than the maximum original width
        if (modalImage.naturalWidth <= window.innerWidth) {
            // If smaller, add the overlay to the body
            document.body.appendChild(overlay);
        }
    });
});

// Add click event listener to close the modal
closeModalButton.addEventListener('click', () => {
    // Hide the modal
    imageModal.classList.remove('show');
    imageModal.style.display = 'none';
    document.body.classList.remove('modal-open');

    // Check if the overlay is in the document body before attempting to remove it
    if (document.body.contains(overlay)) {
        // Remove the overlay
        document.body.removeChild(overlay);
    }
});