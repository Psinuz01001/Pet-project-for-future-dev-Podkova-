document.addEventListener('DOMContentLoaded', function() {
    let serviceCategories = document.querySelectorAll('.service-category');

    // Открывать меню при клике на заголовок категории
    serviceCategories.forEach(function(category) {
        category.querySelector('.service-title').addEventListener('click', function() {
            let items = this.nextElementSibling;

            // Закрываем все категории
            serviceCategories.forEach(function(innerCategory) {
                innerCategory.querySelector('.service-items').style.display = 'none';
            });

            // Открываем или закрываем текущую категорию в зависимости от её состояния
            if (items.style.display === 'block') {
                items.style.display = 'none';
            } else {
                items.style.display = 'block';
            }
        });
    });

    // Закрывать меню при клике вне его области
    document.addEventListener('click', function(event) {
        let isClickInside = document.querySelector('#price-list .container').contains(event.target);
        if (!isClickInside) {
            serviceCategories.forEach(function(category) {
                category.querySelector('.service-items').style.display = 'none';
            });
        }
    });
});

