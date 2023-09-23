const fullImgBox = document.getElementById("fullImgBox");
const fullImg = document.getElementById("fullImg");
const closeBtn = document.querySelector(".close i");


const images = document.querySelectorAll('.img-gallery img');

images.forEach(image => {
    image.addEventListener('click', () => {
        openImgBox(image.src);
    });
});

//functionality to open the full width image on click
openImgBox = (source) => {
    fullImgBox.classList.add("open-fullImgBox");
    fullImg.src = source;
}
// close button functionality
closeBtn.addEventListener('click', () => {
    fullImgBox.classList.remove('open-fullImgBox');
})

