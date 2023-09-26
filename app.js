let prevBtn = document.querySelector("#prevBtn");
let nextBtn = document.querySelector("#nextBtn");

// let images = document.querySelector("");

let images = {
    img1: document.querySelector("#img1"),
    img2: document.querySelector("#img2"),
    img3: document.querySelector("#img3"),
    // lastCLone: document.querySelector("#lastClone"),
}

//converting it to an array
let imagesArr = Object.values(images);

let navLinks = document.querySelectorAll(".nav-circle");
navLinks.forEach((link, index) => {
    link.addEventListener('click', () => {
        setActive(imagesArr[[index]]);
    })
});

let prevImg;
let nextImg;

let prevActiveImg;
let activeImg;
let activeImgIndex;
activeImg = setActive(imagesArr[0]);



function setActive(img, dir) {

    activeImgIndex = imagesArr.indexOf(img);
    prevImg = imagesArr[activeImgIndex - 1];
    nextImg = imagesArr[activeImgIndex + 1];

    if (activeImg != undefined) {
        prevActiveImg = activeImg
        prevActiveImg.style.zIndex = 1;
    };
    activeImg = img;
    activeImg.style.zIndex = 2;


    img.classList.add("active");
    //remove active class

    if (dir == "left") {
        prevActiveImg.className = '';
        prevActiveImg.classList.add("from-left");
    } else if (dir == "right") {
        prevActiveImg.className = '';
        prevActiveImg.classList.add("from-right");
    }






    imagesArr.forEach(image => {
        if (image != prevActiveImg && image != activeImg) image.classList.remove("active");
    });

    return img;
}

function slideNext() {

    if (nextImg != undefined) {

        nextImg.className = '';
        nextImg.classList.add("from-right");

        setTimeout(function () {
            setActive(nextImg, "left");
        }, 100);
    }

}

function slidePrev() {

    if (prevImg != undefined) {

        prevImg.className = '';
        prevImg.classList.add("from-left");

        setTimeout(function () {
            setActive(prevImg, "right");
        }, 100);
    }


}

const carouselContainer = document.querySelector(".image-carousel");

function handleWindowResize() {
    // Get the current window width
    const windowWidth = window.innerWidth;

    // You can now use 'windowWidth' in your code to react to the window width change
    const height = activeImg.height;


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