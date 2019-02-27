var backLink = document.getElementsByClassName('back__link')[0];
var nextLink = document.getElementsByClassName('next__link')[0];
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
    var allDot = document.getElementsByTagName('ul')[1];
    var index = 1;

    var callback = function(index) {
      return function(event) {
        // if (target.tagName != 'li') return;
        var target = event.target;
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

        var sliders = document.getElementsByClassName('slider-item');

            for (var i = 0; i < sliders.length; i++) {
                if (selectedLi.dataset.pos === sliders[i].dataset.pos) {
                    
                    sliders[i].classList.add('slider-item__active');
                } else {
                    sliders[i].classList.remove('slider-item__active');
                }
            }
            
        }

        // Slider on header1
        // for short menu - block is hidden
       $('.menu-short').on('click', function(e) {
           e.preventDefault();
          $('.container-menu').toggleClass('activeMenu');
          $('.header-main__wrapper--float').toggleClass('activeContent');
       });
        
    //    for header1
        var selectedLi2;
        var allDot2 = document.getElementsByTagName('ul')[3];
        var index1 = 1;

        var callback1 = function(index1) {
            return function(event) {
              // if (target.tagName != 'li') return;
              var target = event.target;
              highlight1(target);
          }
      }

      allDot2.addEventListener('click', callback1(index1));
   
    function highlight1(index1) {
        

        var allDot3 = document.getElementsByTagName('ul')[3].children[0];
       
         allDot3.classList.remove('slider__list-active');
    
        if (selectedLi2) {
            selectedLi2.classList.remove('slider__list-active');
        }
        selectedLi2 = index1;
        selectedLi2.classList.add('slider__list-active');

        var sliders1 = document.getElementsByClassName('slider-item1');

            for (var i = 0; i < sliders1.length; i++) {
                if (selectedLi2.dataset.pos === sliders1[i].dataset.pos) {
                    sliders1[i].classList.add('slider-item__active');
                } else {
                    sliders1[i].classList.remove('slider-item__active');
                }
            }
            
        }