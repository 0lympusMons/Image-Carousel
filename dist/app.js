/* eslint linebreak-style: ["error", "windows"] */

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

// let images = document.querySelector("");

const images = {
    img1: document.querySelector('#img1'),
    img2: document.querySelector('#img2'),
    img3: document.querySelector('#img3'),
};

// converting it to an array
const imagesArr = Object.values(images);

let prevImgIndex;
let nextImgIndex;
let activeImgIndex;

const navLinks = document.querySelectorAll('.nav-circle');
navLinks.forEach((link, index) => {
    link.addEventListener('click', () => {
        setActive(imagesArr[[index]], index);
    });
});

function navLinkSetActive(index) {
    // take index to set navLinks[index] to active
    navLinks[index].classList.add('active');

    // remove active class to other links
    navLinks.forEach((link, _index) => {
        if (index !== _index) link.classList.remove('active');
    });
}

function setActive(img, index) {
    if (imagesArr[activeImgIndex] !== undefined) imagesArr[activeImgIndex].className = '';

    // update index
    // add constraint
    activeImgIndex = index;
    prevImgIndex = (activeImgIndex - 1 !== -1) ? activeImgIndex - 1 : imagesArr.length - 1; // constraint: preImgIndex will not go lower 0, else it will loop
    nextImgIndex = (activeImgIndex + 1 >= imagesArr.length) ? 0 : activeImgIndex + 1; // constraint: nextImgIndex will not go higher than imagesArr.length - 1, else it will loop

    img.className = 'active';
    navLinkSetActive(index);

    // put images to left if their index is less than activeImageIndex, and to right if it is greater.
    imagesArr.forEach((image, _index) => {
        if (_index < activeImgIndex) {
            image.className = 'to-left';
        } else if (_index > activeImgIndex) {
            image.className = 'to-right';
        }
    });
}

// initialize
setActive(imagesArr[0], 0);

function slideNext() {
    setActive(imagesArr[nextImgIndex], nextImgIndex);
}

function slidePrev() {
    setActive(imagesArr[prevImgIndex], prevImgIndex);
}

const carouselContainer = document.querySelector('.image-carousel');

function handleWindowResize() {
    // Get the current window width
    const windowWidth = window.innerWidth;

    // You can now use 'windowWidth' in your code to react to the window width change
    const { height } = imagesArr[activeImgIndex];

    carouselContainer.style.height = `${height}px`;
    console.log(`Window width is now ${windowWidth}px`);
}

// Add the event listener
window.addEventListener('resize', handleWindowResize);

// initialize window width
setTimeout(handleWindowResize, 0);

prevBtn.onclick = () => {
    slidePrev();
};

nextBtn.onclick = () => {
    slideNext();
};

setInterval(() => {
    slideNext();
}, 5000);
