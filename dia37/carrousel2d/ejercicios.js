const carrousel = document.querySelector('.carrousel');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

let currentIndex = 0;
const items = document.querySelectorAll('.carrousel-item');
const totalItems = items.length;

function moveToPrev() {
    console.log("Mario")
    if (currentIndex === 0) {
        currentIndex = totalItems - 1;
    } else {
        currentIndex--;
    }
    updateCarrousel();
}

function moveToNext() {
    if (currentIndex === totalItems - 1) {
        currentIndex = 0;
    } else {
        currentIndex++;
    }
    updateCarrousel();
}

function updateCarrousel() {
    const offset = -currentIndex * 100;
    carrousel.style.transform = `translateX(${offset}%)`;
}

prevBtn.addEventListener('click', moveToPrev);
nextBtn.addEventListener('click', moveToNext);
