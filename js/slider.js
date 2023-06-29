const slider = document.querySelector('.slider');
const sliderItems = document.querySelectorAll('.slider__items');
const sliderLine = document.querySelector('.slider__line');

const sliderBtnNext = document.querySelector('.slider__btn-next');
const sliderBtnPrev = document.querySelector('.slider__btn-prev');

let sliderCount = 0;
// берет значение ширины слайдера которую указали 300px
let sliderWidth = slider.offsetWidth;

// вызов функций для кнопок
sliderBtnNext.addEventListener('click', nextSlide);
sliderBtnPrev.addEventListener('click', prevSlide);

// функция для кнопки next
function nextSlide () {
    sliderCount++;

    if (sliderCount >= sliderItems.length) {
        sliderCount = 0;
    };

    rollSlider();
};

function prevSlide () {
    sliderCount--;

    // чтобы счетчик обнулялся до первого слайда
    if (sliderCount < 0) {
        sliderCount = sliderItems.length - 1;
    };

    rollSlider();
};

// функция листающая слайды
function rollSlider () {
    // транслейт Х ибо перемещаем по горзонтали
    // умножается счетчик чтобы знать на какой слайд переключить
    sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
};

// setInterval (() => {
//     nextSlide();
// }, 3000);