// Menu -------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav');

    hamburger.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
});

// LightBox -------------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll('.lightbox-img');

    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.getElementById('close-btn');

    images.forEach(function (image) {
        image.addEventListener('click', function () {
            lightboxImg.src = image.src;
            lightbox.style.display = 'flex';
        });
    });

    closeBtn.addEventListener('click', function () {
        lightbox.style.display = 'none';
    });
});