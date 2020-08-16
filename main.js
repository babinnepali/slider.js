// Car.js code
window.alert(car1.motor.horsePower);
car1.start();
window.alert(car1.motor.horsePower);


// find elements
var buttonPrev = document.getElementById('slider-prev-btn');
var buttonNext = document.getElementById('slider-next-btn');
var sliderImage = document.getElementById('slider-img');

// AddListener
buttonNext.addEventListener('click', onClickNextBtn);
buttonPrev.addEventListener('click', onClickPrevBtn);



//Images URL in Array
var ImageUrl = [];
ImageUrl.push('https://www.diveriksperformance.com/images/uploader/bm/bmw-e46-m3-coupe-frp-lightweight-front-fenders-pair-kopija-2-1.jpg');
ImageUrl.push('https://wideest.ee/wp-content/uploads/2019/02/bagged-bimmerworld-phoenix-yellow-bmw-e46-m3-pandem-rocketbunny-widebody-kit-ccw-wheels-n.jpg');
ImageUrl.push('https://s.auto.drom.ru/i24212/c/photos/fullsize/bmw/m5/bmw_m5_749014.jpg');
ImageUrl.push('https://img.drive.ru/i/0/599be0ebec05c4d870000050.jpg');
//Image source
var currentImageIndex = 0;
sliderImage.src=ImageUrl[currentImageIndex]; 
buttonPrev.disabled = true;

// function defenition
function onClickNextBtn() {
    currentImageIndex++;
    buttonPrev.disabled = false;
    if (currentImageIndex === (ImageUrl.length-1)) {
        buttonNext.disabled = true;
    }
    sliderImage.src=ImageUrl[currentImageIndex];
}

function onClickPrevBtn() {
    currentImageIndex--;
    buttonNext.disabled = false;
    if (currentImageIndex === 0) {
        buttonPrev.disabled = true;
    } else {
        
    }
    sliderImage.src=ImageUrl[currentImageIndex];
}