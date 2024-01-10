document.addEventListener('DOMContentLoaded', function() {
    const scrollButtons = document.querySelectorAll('.shop-button, .product-button');
    
    scrollButtons.forEach((btn) => {
        btn.addEventListener('click', (event) => {
            event.preventDefault();
            
            // Получаем ID секции из href атрибута кнопки
            const targetSection = btn.getAttribute('href').substring(1);
            
            window.scrollTo({
                top: document.getElementById(targetSection).offsetTop,
                behavior: 'smooth'  // плавная прокрутка
            });
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const shopLink = document.querySelector('a[href="#price-list"]');
    
    if (shopLink) {
        shopLink.addEventListener('click', function(event) {
            event.preventDefault();
            window.scrollTo({
                top: document.getElementById('price-list').offsetTop,
                behavior: 'smooth'
            });
        });
    }
});

