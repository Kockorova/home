document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registration-form');
    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('phone');
    
    form.addEventListener('submit', function(event) {
        if (nameInput.value.trim() === '') {
            alert('Введите ваше имя');
            event.preventDefault();
        }

        const phonePattern = /^\+7\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}$/;
        if (!phonePattern.test(phoneInput.value)) {
            alert('Введите корректный номер телефона в формате +7 (xxx) xxx-xx-xx');
            event.preventDefault();
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registration-form');
    
    form.addEventListener('submit', function(event) {
        const agreeCheckbox = document.getElementById('agree');
        if (!agreeCheckbox.checked) {
            alert('Для продолжения необходимо дать согласие на обработку данных');
            event.preventDefault();
        }
    });
});

