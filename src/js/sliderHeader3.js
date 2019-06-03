        // slider for header3

        var btnLeft = document.getElementById('image-left');
        var btnRight = document.getElementById('image-right');
      
        function goNextHeader3() {
            // визначимо який активний слайд
            var activeImage = document.getElementsByClassName('slide-image__item--image');
            console.log(activeImage[activeImage.length - 1]);
            
            function active() {
                for (var i=0; i<activeImage.length; i++) {
                    if (activeImage[i].classList.contains('slide-image__item--active')) {
                        return activeImage[i];
                   } 
                }
            }
            var activeElement = active();
            
            if (activeElement.nextSibling.nextSibling === null) {
                activeImage[activeImage.length - 1].classList.remove('slide-image__item--active');
                activeImage[0].classList.add('slide-image__item--active');
            }
    
            if (activeElement.nextSibling) {
                activeElement.nextSibling.nextSibling.classList.add('slide-image__item--active');
                activeElement.classList.remove('slide-image__item--active');
            }
        }
    
        function goPrevHeader3() {
            var activeImage = document.getElementsByClassName('slide-image__item--image');
        
            function active() {
                for (var i=0; i<activeImage.length; i++) {
                    if (activeImage[i].classList.contains('slide-image__item--active')) {
                        return activeImage[i];
                   } 
                }
            }
    
            var activeElement = active();
        
                if (activeElement.previousSibling.previousSibling === null) {
                    activeImage[0].classList.remove('slide-image__item--active');
                    activeImage[activeImage.length - 1].classList.add('slide-image__item--active');
                }
        
            if (activeElement.previousSibling) {
                activeElement.classList.remove('slide-image__item--active');
                activeElement.previousSibling.previousSibling.classList.add('slide-image__item--active');
            } 
        }
        
        btnRight.addEventListener('click', goNextHeader3);
        btnLeft.addEventListener('click', goPrevHeader3);