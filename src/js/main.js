var numbetOfSlider1 = document.getElementById('slide1');
var numbetOfSlider2 = document.getElementById('slide2');
var numbetOfSlider3 = document.getElementById('slide3');
var numbetOfSlider4 = document.getElementById('slide4');
var numbetOfSlider5 = document.getElementById('slide5');
    
var backLink = document.getElementsByClassName('back__link')[0];
console.log(backLink);

var nextLink = document.getElementsByClassName('next__link')[0];
console.log(nextLink);

// var array = [];
// function render(arrayLength, listLength) {
//     array.push(numbetOfSlider1, numbetOfSlider2, numbetOfSlider3, numbetOfSlider4, numbetOfSlider5);
// }    


var array = [];
var slider = document.getElementById('slider__text');

    for(var i = 0; i < slider.childNodes.length; i++){
        console.log(slider.childNodes.length);
        
        array.push(slider.childNodes[i]);
}


// var myArray = [];

// $('slider-item').each(function (i){

//     myArray[i]=$(this);

// });


console.log(array);



function slider() {
    if(numbetOfSlider1.classList.contains('slider-item__active')) {
        
        numbetOfSlider1.classList.remove('slider-item__active');
        numbetOfSlider2.classList.add('slider-item__active');
    }
}


// backLink.addEventListener('click', );
nextLink.addEventListener('click', slider());

