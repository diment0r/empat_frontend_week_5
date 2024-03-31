document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('burger').addEventListener('click', function () {
        document.querySelector('header').classList.toggle('active');
    });

    let url = window.location.href;
    if(url.split('/')[url.split('/').length - 1] == 'programs-page.html') {
        document.querySelectorAll('.header__menu-item a')[0].classList.toggle('red');
    } else if(url.split('/')[url.split('/').length - 1] == 'contacts-page.html') {
        document.querySelectorAll('.header__menu-item a')[1].classList.toggle('red');
    }
});