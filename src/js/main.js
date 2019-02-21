var backLink = document.getElementsByClassName('back__link')[0];
var nextLink = document.getElementsByClassName('next__link')[0];
var parent = document.getElementById('slider');
var kid = document.getElementsByClassName('slider-item');


// $(function() {
    function goPrev() {
        var kids = document.getElementsByClassName('slider-item');
        
        function elementIsActive() {
            for (var i = 0; i < kids.length; i++) {
                if (kids[i].classList.contains('slider-item__active')) {
                     return kids[i];
                } 
            }
        }
        var activeElement = elementIsActive();
        if (activeElement.previousSibling.previousSibling == null) {
            return;
         }
        if (activeElement.previousSibling) {
            activeElement.classList.remove('slider-item__active');
            activeElement.previousSibling.previousSibling.classList.add('slider-item__active');

        }
        var dots = document.getElementsByClassName('slider__list');
      
        function dotsIsActive() {
            for (var i = 0; i < dots.length; i++) {
                if (dots[i].classList.contains('slider__list-active')) {
                    return dots[i];
                } 
            }
        }

        var activeDot = dotsIsActive();

        if (activeDot.previousSibling.previousSibling == null) {
            return;
        }
        if (activeDot.previousSibling) {
            activeDot.previousSibling.previousSibling.classList.add('slider__list-active');
            activeDot.classList.remove('slider__list-active');
        }
    }

    function goNext() {
        // отримати всю колекцію елементів 'slider-item'
        var kids = document.getElementsByClassName('slider-item');
        //взнати елемент який зараз активний
        function elementIsActive() {
            for (var i = 0; i < kids.length; i++) {
                if (kids[i].classList.contains('slider-item__active')) {
                    return kids[i];
                } 
            }
        }
        var activeElement = elementIsActive();
        
        if (activeElement.nextSibling.nextSibling == null) {
            return;
         }
        // дати наступному елементу активний клас а всім іншим прибрати його
        if (activeElement.nextSibling) {
            activeElement.nextSibling.nextSibling.classList.add('slider-item__active');
            activeElement.classList.remove('slider-item__active');
        }

        // highlight();
        // задача вирішена
        var dots = document.getElementsByClassName('slider__list');
      
        function dotsIsActive() {
            for (var i = 0; i < dots.length; i++) {
                if (dots[i].classList.contains('slider__list-active')) {
                    return dots[i];
                } 
            }
        }

        var activeDot = dotsIsActive(); 

        if (activeDot.nextSibling.nextSibling == null) {
            return;
        }
        if (activeDot.nextSibling) {
            activeDot.nextSibling.nextSibling.classList.add('slider__list-active');
            activeDot.classList.remove('slider__list-active');
        }
    }

    backLink.addEventListener('click', goPrev);
    nextLink.addEventListener('click', goNext);
    var selectedLi;
    var selectedSlide;
    var allDot = document.getElementsByTagName('ul')[1];
    var index = 1;

    var callback = function(index) {
      return function(event) {
        // if (target.tagName != 'li') return;
        var target = event.target;
        // if (activeElement.classList.contains('slider-item__active')) {
        //     target.event.classList.remove('slider-item__active');
        // }
        for (var j=0; j<event.target.length; j++) {
            if(event.target) {
                event.target[i] = kids[i];
                console.log(kids[i]);
                
            } 
        }
        highlight(target);
    }
}

    allDot.addEventListener('click', callback(index));
   
    function highlight(index) {
        var kids = document.getElementsByClassName('slider-item');

        var allDot = document.getElementsByTagName('ul')[1].children[0];
        
        allDot.classList.remove('slider__list-active');
    
        if (selectedLi) {
            selectedLi.classList.remove('slider__list-active');
        }
        selectedLi = index;
        selectedLi.classList.add('slider__list-active');


        function activeSlider(index) {
                for (var i = 0; i < kids.length; i++) {
                    if (kids[i].classList.contains('slider-item__active')) {
                        return kids[i];
                    } 
                }
            }
            var activeSlider = activeSlider();
        
            var dots = document.getElementsByClassName('slider__list');

            for (var i = 0; i < kids.length; i++) {
                index =  kids[i].dataset.pos;
            }

        }

        
       
        
        



