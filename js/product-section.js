document.addEventListener('DOMContentLoaded', function() {
    const shopButton = document.querySelector('.shop-button');

    shopButton.addEventListener('click', (event) => {
        event.preventDefault();
        
        const targetSection = document.querySelector(event.target.getAttribute('href'));
        
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'  // плавная прокрутка
        });
    });
});
