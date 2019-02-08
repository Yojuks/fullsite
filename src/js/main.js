var backLink = document.getElementsByClassName('back__link')[0];
var nextLink = document.getElementsByClassName('next__link')[0];



function slider() {
    var parent = document.getElementById('parent');
    console.log(parent);
    var kid = document.getElementsByClassName('slider-item');
    console.log(kid);
    for (var j=0; j< kid.length; j++) {
        kid[j].classList.add('slider-item__active');
        kid[length + j].classList.add('slider-item__hidden');
        nextLink.removeEventListener('click', slider);
        nextLink.addEventListener('click', slider);
    }
}

nextLink.addEventListener('click', slider);




// var i = 0;
// var ru = ['идти','бежать', 'спать'];
// var p = document.getElementById('ru')
// function f1() {
//       p.innerHTML = ru[i++];
//       i = i % 3
//   }
// <p id="ru"> </p>
// <button onclick="f1()">Push</button>








