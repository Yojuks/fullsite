var backLink = document.getElementsByClassName('back__link')[0];
var nextLink = document.getElementsByClassName('next__link')[0];

var parent = document.getElementById('parent');
var kid = document.getElementsByClassName('slider-item');

function slider() {
   for (var j=0; j< kid.length; j++) {
        kid[j].classList.add('slider-item');
        kid[0].classList.add('slider-item__active');

        // я хочу щоб якщо є вже один клас то обнулити всі елементи(їх класи) і вивести вже 2ий елемент
        if (kid[0].classList.contains('slider-item__active')) { 
            nextLink.removeEventListener('click', slider);  // а поки виводиться 2 відразу
            nextLink.addEventListener('click', slider);     
            kid[j].classList.add('slider-item');
            kid[1].classList.add('slider-item__active');
        }
    }
}

nextLink.addEventListener('click', slider);


function slider1() {
    for (var i=0; i< kid.length; i++) {
        kid[i].classList.remove('slider-item__active');
     }
 }

 backLink.addEventListener('click', slider1);






