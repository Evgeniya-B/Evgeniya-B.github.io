/* Это объявление переменной, мы наши кнопку по тегу */
const button = document.querySelector('button');

/* Тут на кнопку навешиваем обрабочик, который ждёт клика и тогда запустит логику */
button.addEventListener('click', function() {
	alert('"Деньги-это побочный продукт того,что вы любите делать" - Стив Джобс');
	image.src = 'money.jpg'; // Замените на URL вашего изображения
    image.style.display = 'block';
})