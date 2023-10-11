const smallImages = document.querySelectorAll('#small-imgs-container img');
const bigImage = document.querySelector('.big-img img');

smallImages.forEach((item) => {
    // console.log(item.src);
    item.addEventListener('click', () => {
        changeBigImage(item.src);
        smallImages.forEach((item) => item.classList.remove("active"));
        item.classList.add('active');
    });
})


function changeBigImage(imageSource) {
    // console.log(imageSource);
    bigImage.src = imageSource;
}