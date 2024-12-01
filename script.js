document.addEventListener('DOMContentLoaded', function () {
 
const images = document.querySelectorAll('#imageContainer img');
    let currentImage = 0;

    function changeImage(n) {
        currentImage = (currentImage + n + images.length) % images.length;
        updateImageTransform();
    }

    function updateImageTransform() {
        const translation = -currentImage * 310;
        document.getElementById('imageContainer').style.transform = 'translateX(' + translation + 'px)';

    }

    // تغيير خلفية الصفحة
    function changeBackground(imageUrl) {
        document.body.style.backgroundImage = 'url(' + imageUrl + ')';
    }

    // تغيير خلفية الصفحة بين الصور
    setInterval(function () {
        const backgrounds =['i4.jpg','i1.jpg','i2.jpg'];
        const randomIndex = Math.floor(Math.random() * backgrounds.length);
        changeBackground(backgrounds[randomIndex]);
    }, 3000);
    window.addEventListener("resize", function () {
            document.getElementById('imageContainer').style.transform = 'translateX(' + (-currentImage * 310) + 'px)';
        });
const initSlider = () => {
  const imageList = document.querySelector(".slider-wrapper .image-list");
  const slideButtons = document.querySelectorAll(".slider-wrapper .slider-button");
  const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

  slideButtons.forEach(button => {
    button.addEventListener("click", () => {
      const direction = button.id === "prev-slide" ? -1 : 1;
      const scrollAmount = imageList.clientWidth * direction;
      imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
  });

  const handleSlideButtons = () => {
    slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "block";
    slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "block";
  };

  imageList.addEventListener("scroll", () => {
    handleSlideButtons();
  });
};

window.addEventListener("resize", initSlider);

// Call the function to initialize the slider
initSlider();
});
