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
        if (activeDot.nextSibling.nextSibling === null) {
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
        
        var target = event.target;
        if (target.tagName != "LI") {return}; // Why don`t working?

        highlight(target);
        console.log(event);
        
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

        
        // получаем все элементы
        var videoElement = document.getElementsByTagName('video')[0],
            playBtn = document.getElementById('play-btn'),
            playBtnControl = document.getElementById('playBtn'),
            vidControls = document.getElementById('controls'),
            hiddenDiv = document.getElementsByClassName('video-item')[0],
            volumeControl = document.getElementById('volume'),
            timePicker = document.getElementById('timer');
            console.log(playBtn);
            console.log(hiddenDiv);
            console.log(volumeControl.value);
            

        // если браузер может воспроизводить видео удаляем класс
        playBtn.addEventListener('click', function() {
            hiddenDiv.classList.add('hidden');
            vidControls.classList.remove('hidden');
            videoElement.classList.remove('hidden');
        });
        
        videoElement.addEventListener('canplaythrough', function () {
            volumeControl.classList.remove('hidden');
            videoElement.volume = volumeControl.value;
        });
        console.log(videoElement.volume);
       
        // запускам или останавливаем воспроизведение
        playBtnControl.addEventListener('click', function () {
            
            if (videoElement.paused) {
                videoElement.play();
            } else {
                videoElement.pause();
            }
        });
         
        videoElement.addEventListener('play', function () {

            playBtnControl.innerText = "Play";
        });
         
        videoElement.addEventListener('pause', function () {
         
            playBtnControl.innerText = "Pause";
        });
         

        volumeControl.addEventListener('input', function () {

            videoElement.volume = volumeControl.value;
        });
         
        videoElement.addEventListener('ended', function () {

            videoElement.currentTime = 0;
        });
         
        videoElement.addEventListener('timeupdate', function () {
            timePicker.innerHTML = secondsToTime(videoElement.currentTime);
        });

        // рассчет отображаемого времени
        function secondsToTime(time){
             
            var h = Math.floor(time / (60 * 60)),
                dm = time % (60 * 60),
                m = Math.floor(dm / 60),
                ds = dm % 60,
                s = Math.ceil(ds);
            if (s === 60) {
                s = 0;
                m = m + 1;
            }
            if (s < 10) {
                s = '0' + s;
            }
            if (m === 60) {
                m = 0;
                h = h + 1;
            }
            if (m < 10) {
                m = '0' + m;
            }
            if (h === 0) {
                fulltime = m + ':' + s;
            } else {
                fulltime = h + ':' + m + ':' + s;
            }
            return fulltime;
        }




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
        console.log(activeImage[0]);
        
        
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

        // for (var i = 0; i < activeImage.length; i++) {            
        //     // if (activeImage[length-1]) {
        //     //     activeImage[length-1] = activeImage[0];
        //     // }
        // }
        
       
    }
    
    btnRight.addEventListener('click', goNextHeader3);
    btnLeft.addEventListener('click', goPrevHeader3);



// forms validate 
    var username = document.getElementsByClassName('input-button__user')[0];
    var email = document.getElementsByClassName('input-button__email')[0];
    var number = document.getElementsByClassName('input-button__number')[0];

    var name_error = document.getElementById('name_error');
    var email_error = document.getElementById('email_error');
    var email_error = document.getElementById('number_error');

    username.addEventListener('blur', nameVerify, true);
    email.addEventListener('blur', emailVerify, true);
    number.addEventListener('blur', numberVerify, true);

    function validate() {
        if (username.value == "") {
        username.style.border = "1px solid red";
        username.focus();
        return false;
        }
        if (email.value == "") {
        email.style.border = "1px solid red";
        email.focus();
        return false;
        }
        if (number.value == "") {
            number.style.border = "1px solid red";
            number.focus();
            return false;
        }
        if (number.value.length >= 11) {
            alert("Введіть повний номер мобільного");
            number.focus();
            return false;
        }
            return !isNaN(parseFloat(number)) && isFinite(number);
        };
    

    function nameVerify() {
        if (username.value != "") {
        username.style.border = "1px solid #5e6e66";
        name_error.innerHTML = "";
        return true;
        }
    }
    function emailVerify() {
        if (email.value != "") {
            email.style.border = "1px solid #5e6e66";
            email_error.innerHTML = "";
            return true;
        }
        var r = /^\w+@\w+\.\w{2,4}$/i;
        if (!r.test(document.email.value)) {
            alert("Введіть правильний емейл");
        }
    }
    function numberVerify() {
        if (number.value != "") {
            number.style.border = "1px solid #5e6e66";
            email_error.innerHTML = "";
            return true;
        }
    }
    