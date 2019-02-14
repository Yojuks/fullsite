var backLink = document.getElementsByClassName('back__link')[0];
var nextLink = document.getElementsByClassName('next__link')[0];
var parent = document.getElementById('slider');
var kid = document.getElementsByClassName('slider-item');


// $(function() {
    function goPrev() {
        var kids = document.getElementsByClassName('slider-item');
        console.log(kids);
        
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

    var allDot = document.getElementsByTagName('ul')[1];
    var index = 1;
    var callback = function(index) {
      return function(event) {
        // if (target.tagName != 'li') return;
        var target = event.target;
        console.log(index);
        console.log("target", event.target)
        // event.target = goNext()
        highlight(target);
    }
}
   
    function highlight(node) {
        if (selectedLi) {
            selectedLi.classList.remove('slider__list-active');
        }
        selectedLi = node;
        selectedLi.classList.add('slider__list-active');
      }

    allDot.addEventListener('click', callback(index));

   

    // var myFunc = function(goNext) {goNext()}

    // var allDot = document.querySelectorAll('ul.slider__item > li');
    
    // console.log(allDot);
    
    // allDot.addEventListener('click', checkDot(goNext, goPrev)); 


    // var menu = document.getElementsByTagName('ul')[0]



    // var allDot = document.getElementsByTagName('ul')[1];
    
    // var callback = function(event, goNext) {
    // console.log("target", event.target);
    // event.target.classList.toggle('slider__list-active');
    // if (event.target.classList.toggle('slider__list-active')) {
        
    // }
    // console.log(goNext());
    
    // }

    // allDot.addEventListener('click', callback);
    


    // function name (event) {
    //     console.log(event);
        
    // }
    // function checkDot(goNext, goPrev) {
    //     var a = 5;
    //       console.log(a);
          
        // var a = goNext(); 
        // function First() {
        //     if (allDot[d].classList.contains('slider__list-active')) {
        //         return allDot[d];
        //     }
        // }
        // var Name = First();
        //     var kids = document.getElementsByClassName('slider-item');
        //     function ActiveDot() {
        //         for(var j=0; j<allDot.length; j++) {
        //             if (allDot[j].classList.contains('slider__list-active')) {
        //                 return allDot[j];
        //             }
        //         }
        //     }
        //     var currentActiveDot = ActiveDot();
        // }

    //!!!!!Uncaught RangeError: Maximum call stack size exceeded
            // function Click() {
            //     for (var d=0; d<allDot.length; d++) {
            //         allDot[d].addEventListener('click', checkDot(goNext, goPrev));
            //     }
            // }
            
            // var currentClick = Click();

            // if (currentClick) {
            //     currentActiveDot.classList.remove('slider__list-active');
            // }                                                          


        
       
            
        

        
        
    
    //     
    //      var activeElement = elementIsActive();
     
    
    // });
    

// for (var key in kid) {
//     console.log(key); // 0, 1, 2, length, item - неможна перебирати - а що використати? перетворити в масив?
  

    // var slideIndex = 1;
    // showSlides(slideIndex);
    
    // // Next/previous controls
    // function plusSlides(n) {
    //   showSlides(slideIndex += n);
    // }
    
    // // Thumbnail image controls
    // function currentSlide(n) {
    //   showSlides(slideIndex = n);
    // }
    
    // function showSlides(n) {
    //   var i;
    //   var slides = document.getElementsByClassName("slider-item");
    //   var dots = document.getElementsByClassName("slider__list");
    //   if (n > slides.length) {slideIndex = 1} 
    //   if (n < 1) {slideIndex = slides.length}
    //   for (i = 0; i < slides.length; i++) {
    //       slides[i].style.display = "none"; 
    //   }
    //   for (i = 0; i < dots.length; i++) {
    //       dots[i].className = dots[i].className.replace(" active", "");
    //   }
    //   slides[slideIndex-1].style.display = "block"; 
    //   dots[slideIndex-1].className += " active";
    // }
    