var backLink = document.getElementsByClassName('back__link')[0];
console.log(backLink);

var nextLink = document.getElementsByClassName('next__link')[0];
console.log(nextLink);

var parent = document.getElementById('parent');
console.log(parent.children.length-2);

function slider() {
    for (var i = 0; i < parent.children.length-2; i++) {
        console.log(parent.children.length-2);
        
        parent.children.length[i].classList.add('slider-item__active');

        console.log(parent.children.length[i]);
    }
}

nextLink.addEventListener('click', slider);



    


