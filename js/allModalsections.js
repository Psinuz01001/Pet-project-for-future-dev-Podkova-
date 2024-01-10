document.addEventListener("DOMContentLoaded", function() {
    // Get all modals
    const allModals = document.querySelectorAll('.flowers-modal, .decor-modal, .gifts-modal');

    // Get all modal open buttons
    const allModalButtons = document.querySelectorAll('.flowers-product-button, .decor-product-button, .gifts-product-button');

    // Get all modal close buttons
    const allCloseButtons = document.querySelectorAll('.close-modal, .close-decor-modal, .close-gifts-modal, .close-btn');

    // Function to close a specific modal
    function closeModal(modal) {
        modal.classList.remove('show');
        setTimeout(function() {
            modal.style.display = "none";
            document.body.style.overflow = '';  // Restore page scroll
        }, 300);
    }

    // Function to open a specific modal
    function openModal(modal) {
        if (!modal) {
            console.error("Modal element is not provided!");
            return;
        }
        modal.style.display = "block";
        document.body.style.overflow = 'hidden';  // Block page scroll
        setTimeout(function() {
            modal.classList.add('show');
        }, 10);
    }

    // Attach click events to all modal buttons
    allModalButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            const modalId = button.getAttribute('data-modal-target') || button.getAttribute('href').slice(1);
            const modal = document.getElementById(modalId);
            openModal(modal);
        });
    });

    // Attach click events to all close buttons
    allCloseButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.flowers-modal, .decor-modal, #contactModal');
            closeModal(modal);
        });
    });

    // Close modal when clicking outside of it
    window.addEventListener('click', (event) => {
        allModals.forEach(modal => {
            if (event.target === modal) {
                closeModal(modal);
            }
        });
    });
});
