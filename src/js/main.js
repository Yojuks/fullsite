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
            
            
             // якщо нема елемента як зробити щоб в консолі помилок не було?
             
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
    }

    backLink.addEventListener('click', goPrev);
    nextLink.addEventListener('click', goNext);
    
    var selectedLi;
    var selectedSlide;

    var allDot = document.getElementsByTagName('ul')[1];
    var index = 1;
    var callback = function(index) {

      return function(event) {
        
        var kids = document.getElementsByClassName('slider-item');
        function elementIsActive() {
            for (var i = 0; i < kids.length; i++) {
                if (kids[i].classList.contains('slider-item')) {
                    return kids[i].getAttribute('data-pos');
                } 
            }
        }
        var activeElement = elementIsActive();

        
        // if (target.tagName != 'li') return;
        var target = event.target;
        
        target.event = activeElement;
        

        if (activeElement.classList.contains('slider-item__active')) {
            target.event.classList.remove('slider-item__active');
        }

        for (var j=0; j<event.target.length; j++) {
            if(event.target) {
                event.target[i] = kids[i];
            } 
        }
       
        console.log(index);
        console.log("target", event.target)
        // event.target = goNext()
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



        var kids = document.getElementsByClassName('slider-item');
        console.log(kids);
        
        
        function elementIsActive() {
            for (var i = 0; i < kids.length; i++) {
                if (kids[i].classList.contains('slider-item__active')) {
                    return kids[i].getAttribute('data-pos');
                } 
            }
        }

        var activeElement = elementIsActive();

        selectedLi = activeElement;

        }
    
        