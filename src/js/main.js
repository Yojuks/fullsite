var backLink = document.getElementsByClassName('back__link')[0];
var nextLink = document.getElementsByClassName('next__link')[0];

var parent = document.getElementById('parent');
var kid = document.getElementsByClassName('slider-item');



function slider() {
   for (var j=0; j< kid.length; j++) {
        kid[j].classList.add('slider-item__active');
        kid[length + j].classList.add('slider-item__hidden');
    }
}

nextLink.addEventListener('click', slider);


function slider1() {
    for (var i=0; i< kid.length; i++) {
        kid[i].classList.remove('slider-item__active');
        kid[i].classList.add('slider-item__hidden');
     }
 }

 backLink.addEventListener('click', slider1);






