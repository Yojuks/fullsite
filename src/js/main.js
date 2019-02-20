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
            //  highlight();
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
            } 
        }

        // event.target = goNext()

        highlight(target);
        // currentSlide(target);
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

        // var kids = document.getElementsByClassName('slider-item');
    
        // function elementIsActive() {
        //     for (var i = 0; i < kids.length; i++) {
        //         if (kids[i].classList.contains('slider-item__active')) {
        //             return kids[i];
        //         } 
        //     }
        // }

        // var activeElement = elementIsActive();
        // activeElement.classList.remove('slider-item__active');
        // activeElement.classList.add('slider-item__active');


        // var slideIndex = 1;
        // showSlide(slideIndex);
    
        // function plusSlides(n){
        // showSlide(slideIndex += n);
        // }
    
        // function currentSlide(n) {
        // showSlide(slideIndex = n);
        // }
        
        // function showSlide(n){
        // var i;
        // var slides = document.getElementsByClassName('slider-item');
        // // var slides = document.getElementsByClassName("myslides");
        // // var dots = document.getElementsByClassName("dots");
        // var dots = document.getElementsByTagName('ul')[1];

        // if (n > slides.length)
        //  { slideIndex = 1};
        // if (n < 1) {
        //      slideIndex = slides.length
        // };
        // for (i=0;i<slides.length;i++) {
        //      slides[i].style.display = "none";
        // };
        // for (i=0;i<dots.length;i++) {
        //     dots[i].className = dots[i].className.replace(" slider__list-active","");
        // };
        //     slides[slideIndex-1].style.display = "block";
        //     dots[slideIndex-1].className += " slider__list-active";
        // }
        }

        
        
        
        
        



let corousels = document.getElementsByClassName('slider');

[].forEach.call(corousels, function (c) {
    let next = c.getElementsByClassName('next__link')[0],
        prev = c.getElementsByClassName('back__link')[0],
        bubblesContainer = c.getElementsByClassName('slider__item')[0],
        inner = c.getElementsByClassName('slider__text')[0],
        imgs = c.getElementsByClassName('slider-item'),
        currentImageIndex = 0,
        width = 1280,
        bubbles = [];
        
        
       
        
        for (let i = 0; i < imgs.length; i++) {
            let b = document.createElement('span');
            b.classList.add('bubble');
            bubblesContainer.appendChild(b);
            bubbles.push(b);
            console.log(bubbles);
            

            b.addEventListener('click', function () {
                currentImageIndex = i;
                switchImg();
            });
        };

        function switchImg() {
            inner.style.left = -width * currentImageIndex + "px";

            bubbles.forEach(function (b, i) {
                if (i === currentImageIndex) {
                    b.classList.add('slider-item__active');
                } else {
                    b.classList.remove('slider-item__active')
                }
            })
        };

        next.addEventListener('click', function () {
            currentImageIndex++;

            if (currentImageIndex >= imgs.length) {
                currentImageIndex = 0;
            }
            switchImg();
        });

        prev.addEventListener('click', function () {
            currentImageIndex--;

            if (currentImageIndex < 0) {
                currentImageIndex = imgs.length - 1;
            }
            switchImg();
        });
})