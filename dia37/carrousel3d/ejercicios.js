const carrousel = document.querySelector('.carrousel');

const items = document.querySelectorAll('.carrousel-item');
const numItems = items.length;
const angle = 360 / numItems;

items.forEach((item, index) => {
    item.style.transform = `rotateY(${index * angle}deg) translateZ(250px)`;
});

let rotationDegree = 0;
setInterval(() => {
    rotationDegree += angle;
    carrousel.style.transform = `rotateY(${rotationDegree}deg)`;
}, 3000); 
