document.addEventListener('DOMContentLoaded', () => {
    const listItems = document.querySelectorAll('.product-details ul li');
    let currentIndex = 0;

    function showNextItem() {
        // Remove active class from all items
        listItems.forEach(item => {
            item.classList.remove('active');
        });

        // Add active class to current item
        listItems[currentIndex].classList.add('active');

        // Update index for next iteration
        currentIndex = (currentIndex + 1) % listItems.length;

        // Wait for animation duration (3s) before showing next item
        setTimeout(showNextItem, 3000);
    }

    // Start the animation
    showNextItem();
}); 