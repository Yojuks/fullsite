var backLink = document.getElementsByClassName('back__link')[0];
var nextLink = document.getElementsByClassName('next__link')[0];

var parent = document.getElementById('parent');
var kid = document.getElementsByClassName('slider-item');



var flag = 0;
function slider() {
    if (flag == 0) {
        kid[0].classList.add('slider-item__active');
        flag = 1;
   } else if (flag == 1) {
        kid[0].classList.remove('slider-item__active');
        kid[1].classList.add('slider-item__active');
        flag = 2;
   } else if (flag == 2) {
        kid[2].classList.add('slider-item__active');
        kid[1].classList.remove('slider-item__active');
        flag = 3;
    } else if (flag == 3) {
        kid[3].classList.add('slider-item__active');
        kid[2].classList.remove('slider-item__active');
        flag = 4;
    } else if (flag == 4) {
        kid[4].classList.add('slider-item__active');
        kid[3].classList.remove('slider-item__active');
        flag = 5;
} 
}

nextLink.addEventListener('click', slider, false);


function slider1() {
    for (var i=0; i< kid.length; i++) {
        kid[i].classList.remove('slider-item__active');
     }
 }

 backLink.addEventListener('click', slider1);






