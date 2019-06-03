
     // Slider on header2

    $('.menu-short').on('click', function(e) {
        e.preventDefault();
        $('.container-menu').toggleClass('container-menu__active');
        $('.header-main__wrapper--float').toggleClass('active-content');
        
    })
    $('.close').on('click', function(e) {
        e.preventDefault();
        $('.container-menu').toggleClass('container-menu__active');
        $('.header-main__wrapper--float').toggleClass('activeMenu');
    });
        
    //    for header1
        var selectedLi2;
        var allDot2 = document.getElementsByTagName('ul')[3];
        var index1 = 1;

        var callback1 = function(index1) {
            return function(event) {
              
            
              var target = event.target;
              if (target.tagName != "LI") {return};

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