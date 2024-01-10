document.addEventListener('DOMContentLoaded', function() {
    const smoothScrollLinks = document.querySelectorAll('.smooth-scroll');

    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            
            const targetSection = document.querySelector(event.target.getAttribute('href'));
            const scrollToPosition = targetSection.offsetTop;
            
            window.scrollTo({
                top: scrollToPosition,
                behavior: 'smooth'
            });
        });
    });
});
