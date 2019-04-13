

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
        if (target.tagName != "LI") {return};

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
        //   $('.close').toggleClass('activeMenu');
          $('.header-main__wrapper--float').toggleClass('activeContent');
       });
       $('.close').on('click', function(e) {
        e.preventDefault();
       $('.container-menu').toggleClass('activeMenu');
     //   $('.close').toggleClass('activeMenu');
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
    // var username = document.getElementsByClassName('input-button__user')[0];
    // var username = document.forms.vform[0];
    // console.log(username);
    
    // // var email = document.getElementsByClassName('input-button__email')[0];

    // var email = document.forms.vform[1];
    // console.log(email);
    
    // // var number = document.getElementsByClassName('input-button__number')[0];
    // var number = document.forms.vform[2];
    // console.log(number);
    

    // username.addEventListener('blur', nameVerify, true);
    // email.addEventListener('blur', emailVerify, true);
    // number.addEventListener('blur', numberVerify, true);
    
    // function validate() {
    //     if (username.value == "") {
    //     username.style.border = "1px solid red";
    //     username.focus();
    //     return false;
    //     }
    //     if (email.value == "") {
    //     email.style.border = "1px solid red";
    //     email.focus();
    //     return false;
    //     }
    //     if (number.value == "") {
    //         number.style.border = "1px solid red";
    //         number.focus();
    //         return false;
    //     }
    //     if (number.value.length >= 11) {
    //         alert("Введіть повний номер мобільного");
    //         number.focus();
    //         return false;
    //     }
    //         return !isNaN(parseFloat(number)) && isFinite(number);
    //     };
    
    // function nameVerify() {
    //     if (username.value != "") {
    //     username.style.border = "1px solid #5e6e66";
    //     name_error.innerHTML = "";
    //     return true;
    //     }
    // }

    // function emailVerify() {
    //     if (email.value != "") {
    //         email.style.border = "1px solid #5e6e66";
    //         email_error.innerHTML = "";
    //         return true;
    //     }
    //     var r = /^\w+@\w+\.\w{2,4}$/i;
    //     if (!r.test(document.email.value)) {
    //         alert("Введіть правильний емейл");
    //     }
    // }

    // function numberVerify() {
    //     if (number.value != "") {
    //         number.style.border = "1px solid #5e6e66";
    //         email_error.innerHTML = "";
    //         return true;
    //     }
    // };

    // var name_error = document.getElementsByClassName('error-user')[0];
    // console.log(name_error);
    
    // var number_error = document.getElementsByClassName('error-number')[0];
    // console.log(number_error);

    // var email_error = document.getElementsByClassName('error-email')[0];
    // console.log(email_error);

    var forms = document.forms[0];
    var elemForms = forms.elements;

    console.log(forms);
    console.log(elemForms);
    
    var selectedElementForms;
    var indexElements = 1;

    var callbackValidate = function(indexElements) {

        return function(event) {
            event.preventDefault();
            var target = event.target;
            
            if (target.tagName != "INPUT") {return};

            // light(target);
            // console.log(light(target));

            // if (target === elemForms.id){
            //     if (elemForms.id.value == "") {

            //         elemForms.username.nextSibling.nextSibling.innerHTML = "Невведено ім'я";

            //         elemForms.username.style.border = "1px solid tomato";
            //         elemForms.username.focus();
            //         return true;
            //         } else {
            //             elemForms.username.nextSibling.nextSibling.innerHTML = "";
            //             elemForms.username.style.border = "1px solid black";
            //         }
            // }

        //     if (target === elemForms.username ) {
        //         if (elemForms.username.value == "") {

        //             elemForms.username.nextSibling.nextSibling.innerHTML = "Невведено ім'я";

        //             elemForms.username.style.border = "1px solid tomato";
        //             elemForms.username.focus();
        //             return true;
        //             } else {
        //                 elemForms.username.nextSibling.nextSibling.innerHTML = "";
        //                 elemForms.username.style.border = "1px solid black";
        //             }
                
        //     }

        //     if (target === elemForms.email) {
        //         if (elemForms.email.value == "") {

        //             elemForms.email.nextSibling.nextSibling.innerHTML = 'Невведено email';

        //             elemForms.email.style.border = "1px solid tomato";
        //             elemForms.email.focus();
        //             return true;
        //             } else {
        //                 elemForms.email.nextSibling.nextSibling.innerHTML = '';
        //                 elemForms.email.style.border = "1px solid black";
        //             }

        //            
        //     }

        //     if (target === elemForms.number) {
        //         if (elemForms.number.value == "") {
        //             elemForms.number.style.border = "1px solid tomato";

        //             elemForms.number.nextSibling.nextSibling.innerHTML = 'Невведено телефон';

        //             elemForms.number.focus();
        //             return true;
        //             } else {
        //                 elemForms.number.style.border = "1px solid black";

        //                 elemForms.number.nextSibling.nextSibling.innerHTML = '';
        //             }
                    

        //             if (elemForms.number.value.length > 11 || elemForms.number.value.length < 11) {
        //                 alert('Введіть повний номер телефону');
        //                 return true;
        //             } 
                        // if (!EMAIL.test(elemForms.email.value)) {
                        //     alert("Введіть правильний емейл");
                        // }
        //     }
            
        //         return !isNaN(parseFloat(number)) && isFinite(number);
        }
    };

    // function light(indexElements) {
    //     for (let i = 0; i < elemForms.length; i++) {
    //         indexElements[i] = elemForms[i];
    //         return indexElements[i];
    //     }
    // }

    forms.addEventListener('submit', callbackValidate(index));

    forms.addEventListener('blur', callbackValidate(index), true);


    var selectedTd;
    function EVENT(event) {
            var target = event.target; // где был клик?

            if (target.tagName != 'INPUT') return; // не на TD? тогда не интересует

            highlight(target); // подсветить TD
            };

            function highlight(node) {
            if (selectedTd) {
                selectedTd.classList.remove('highlight');
            }
            selectedTd = node;
            selectedTd.classList.add('highlight');

            if (selectedTd.value == '') {
                selectedTd.classList.add('highlight1')
            } else {
                selectedTd.classList.remove('highlight1')
            }


            if (selectedTd.value == "") {

                selectedTd.nextSibling.nextSibling.innerHTML = "Невведено ім'я";

                selectedTd.style.border = "1px solid tomato";
                selectedTd.focus(); // не працює фокус
                return true;
                } else {
                    selectedTd.nextSibling.nextSibling.innerHTML = "";
                    selectedTd.style.border = "1px solid black";
                }

                var EMAIL = /^\w+@\w+\.\w{2,4}$/i;
                if (!EMAIL.test(selectedTd.email.value)) {
                    alert("Введіть правильний емейл");
                }

                if (selectedTd.number.value.length > 11 || selectedTd.number.value.length < 11) { // не працює цей участок коду
                    console.log(selectedTd.number.value.length);
                    
                        alert('Введіть повний номер телефону');
                        return true;
                    } 
                    return !isNaN(parseFloat(number)) && isFinite(number);
                    
            }

        forms.addEventListener('click', EVENT);

    // function light(index) {
          
    //     // selectedElementForms = index;
    // };
    // var callback = function(index) {
    //     return function(event) {
          
    //       var target = event.target;
    //       if (target.tagName != "LI") {return}; // Why don`t working?
  
    //       highlight(target);
    //       console.log(event);
          
    //   }
    //   }
    //   allDot.addEventListener('click', callback(index));
    
    
    
   

    
    

    // function rec(num) {
    //     console.log(num)
    //     if (num > 1) {
    //        rec(num - 1)
    //     }   
       
    // }
    
    // rec(5)



    // function rec(num) {
    //     if (num > 1) {
    //        console.log(num);
    //     }  else {
    //         rec(num - 1);
    //     }
    // }
    
    // rec(5);

    // function rec(num) {
        
    //    for (var i = num; i > 0; i--) {
    //         console.log(i);
    //    }
    // };
    
    // rec(5);


    // function rec(num) {
    //     if (num > 1)  {
    //         for (var i = num; i > 0; i--) {
    //             console.log(rec(num - 1));
    //         }
    //     } 
    // };
    
    // rec(5);




    // function min(a, b) {
    //     // if (a < b) {
    //     //     return console.log(a);
    //     // } else {
    //     //     return console.log(b);
    //     // }
    //     return (a < b) ?  console.log(a) : console.log(b);
    // };

    // min(2, 5);
    // min(3, -1);
    // min(1, 1);

    // function pow(x,n) {
    //     var result = x;
    //     // if (n === 1) {
    //     //     console.log(x);
    //     // }
    //     for (var i = 1; i < n; i++) {
    //         result = result * x;
    //         // 3 = 3 * 3 = 9;
    //         // 9 = 9 * 3;
    //     }       
    //     return console.log(result);
            
    // };

    // pow(3, 2);
    // pow(3, 3);
    // pow(3, 4);
    // pow(1, 100);


    // function pow(x, n) {
    //     var result = x;
    //     if (n > 1) {
    //         x * pow(x, n-1);
    //     }

    // }

  

    // function pow(x, n) {
    //     if (n != 1) {
    //       return x * pow(x, n - 1);
    //     } else {
    //       return x; 
    //     }
    //   }

    //   alert (pow(2, 3));

    // function sumTo(n) {
    //     var result = n;
    //     for (var i = 0; i < n; i++) {
    //         result = result + i;
    //     }
    //     return result;
    // }

    // console.log(sumTo(100));
    
    // сума всіх попередніх членів
    // function sumTo(n) {
        
    //     if (n>1) {
    //        return n + sumTo(n-1);
    //     }
    //     return n;
    // }
    
    // console.log(sumTo(3));

    // факторіал
    // function factorial(n) {
    //     if (n!=1) {
    //         return n * factorial(n - 1);
    //     }
    //     return n;
    // }
    // alert( factorial(5) );
    
    // function fib(n) {
    //     var z = [];
        
    //     var a = 1;
    //     var b = 1;
    //     z.push(a, b);

    //     for (var i = 2; i <= n; i++) {
    //         var c = a + b;
    //         a = b;
    //         b = c;
    //         z.push(b);
    //     }
    //     return a, z;
    // }

    // console.log(fib(6));
   

    // function isArray(arr) {
    //    var ARRAY = [];
    // //    console.log(arr.isArray(arr));
    //         for (var i = 0; i < arr.length; i++) {
    //             if (arr[i] != 'Array')
    //                 ARRAY.push(arr[i]);
                    
    //                 console.log(arr);
                    
    //                 // if (Array.isArray(arr)) {
    //                 //     arr.next().push(arr[i]);
    //                 // }
                 
    //         }
    //     return ARRAY;
    // };

    // var newArray = [1,2,3, [1]];
    // isArray(newArray);
    // console.log(newArray);

    // function newFunc(resultArray) {
        // debugger;
        var resultArray = [];
        function toGet(arr) {
   
        for (let i = 0; i < arr.length; i++) {
            
            if (Array.isArray(arr[i])) {
                console.log((arr));
                
                toGet(arr[i]);
            } else {
                resultArray.push(arr[i]);
            }
        }
        return resultArray;
    };
    // }
    

      let newArray = [1, 3 , 4 ,5 , [5, 6, [6, 90]]];
      console.log(toGet(newArray));
       
      
    
   
      