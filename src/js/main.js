var backLink = document.getElementsByClassName('back__link')[0];
var nextLink = document.getElementsByClassName('next__link')[0];
var kid = document.getElementsByClassName('slider-item');


// $(function() {}();
    function goPrev(e) {
        e.preventDefault();
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
    function goNext(e) {
        e.preventDefault();
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



    var forms = document.forms[0];
    var elemForms = forms.elements;

    var callbackValidateBlur = function(e) {
        e.target.style.background = 'white';

        if (e.target.value !== "") {
            e.target.style.border = "1px solid black";            
        }

        var EMAIL = /^\w+@\w+\.\w{2,4}$/i;
        if (e.target.getAttribute('id') === 'email' && !EMAIL.test(e.target.email)) {
            e.target.nextSibling.nextSibling.innerHTML = "Email is not correct"    
        } else {
            e.target.nextSibling.nextSibling.innerHTML = ""
        }

        if (e.target.getAttribute('id') === 'number' && e.target.value.length > 10) {
            e.target.nextSibling.nextSibling.innerHTML = '';
            console.log('lenght is 11');
            
        } else if (e.target.getAttribute('id') === 'number' && e.target.value.length < 12) {
            console.log('менше 12');
            e.target.nextSibling.nextSibling.innerHTML = 'Lenght of number is not correct';
        } 
        //     return !isNaN(parseFloat(number)) && isFinite(number);
    }
    
    
    // blur

    var selectInputandColoredItClick= function(e) {
    
        var target = e.target;

        var inputIsHere = e.target.value;
          
        if (inputIsHere === "") {
            target.nextSibling.nextSibling.innerHTML = "Name is required"
            target.style.border = "1px solid tomato"
            target.focus()
            target.nextSibling.nextSibling.classList.add('font')
        } else {
            target.nextSibling.nextSibling.innerHTML = ""
        };

        var atr = e.target.getAttribute('email');
    
    }
    

    for (let input of elemForms) {
        if(input.getAttribute('type') !== 'submit') {
            input.addEventListener('click', selectInputandColoredItClick)
            input.addEventListener('blur', callbackValidateBlur)
        }
    }

    // form.addEventListener('submit',submitValidate)

    //validateinput(input)

    //hightlightInput(node)

    var submitValidate = function() {
        // var errors = [];
        // validateinput(input) // error(input)
        // click button submit  // if error -> prevent, !error -> success
    }



    
// slider on servise 1
var servise1Slides = document.getElementsByClassName('middle-servises__wrap');
for (let i = 0; i < servise1Slides.length; i++) {
    console.log(servise1Slides.length);
    
    servise1Slides[i].style.zIndex = servise1Slides.length - i;            
};
    const PREW = document.getElementById('image-prev');

    const NEXT = document.getElementById('image-next');

    NEXT.addEventListener('click', nextOnServise1);

    function nextOnServise1() {
        function activeElement() {
            for (let i = 0; i < servise1Slides.length; i++) {
                if (servise1Slides[i].classList.contains('active')) {
                    return servise1Slides[i];
                }
            }
        };

        var activeElement = activeElement();
        
        if (activeElement.nextElementSibling) {
            activeElement.classList.add('transform');
            activeElement.nextElementSibling.classList.add('active');
            activeElement.classList.remove('active');
        }
        if (!activeElement.nextElementSibling) {
            for (let i=0; i<servise1Slides.length; i++) {
                servise1Slides[i].classList.remove('transform');
                servise1Slides[i].classList.remove('active');
            }
            servise1Slides[servise1Slides.length - 1].classList.remove('active');
            servise1Slides[0].classList.add('active');
            return;
    }
};

PREW.addEventListener('click', prewOnServise1);

function prewOnServise1() {
    function activeElement() {
        for (let i = 0; i < servise1Slides.length; i++) {
            if (servise1Slides[i].classList.contains('active')) {
                return servise1Slides[i];
            }
        }
    };

    var activeElement = activeElement();
    console.log(activeElement);

    if (activeElement.previousElementSibling) {
        activeElement.classList.remove('active');
        activeElement.previousElementSibling.classList.remove('transform');
        activeElement.previousElementSibling.classList.add('active');
    }

    if (!activeElement.previousElementSibling) {
        for (let i=0; i<servise1Slides.length; i++) {
            servise1Slides[i].classList.add('transform');
        }
        servise1Slides[0].classList.remove('active');
        servise1Slides[servise1Slides.length - 1].classList.add('active');
        servise1Slides[servise1Slides.length - 1].classList.remove('transform');
        return;
}
};


// slider at team 2

var servise1SlidesTeam2 = document.getElementsByClassName('middle-servises__slider-item');

for (let i = 0; i < servise1SlidesTeam2.length; i++) {
    servise1SlidesTeam2[i].style.zIndex = servise1SlidesTeam2.length - i;            
};
    const PREWSLIDER = document.getElementById('image-prev-slider');
  
    const NEXTSLIDER = document.getElementById('image-next-slider');

    NEXTSLIDER.addEventListener('click', nextOnServiseTeam2);

    function nextOnServiseTeam2() {
        function activeElement() {
            for (let i = 0; i < servise1SlidesTeam2.length; i++) {
                if (servise1SlidesTeam2[i].classList.contains('active')) {
                    return servise1SlidesTeam2[i];
                }
            }
        };

        var activeElement = activeElement();
        console.log(activeElement);
        
        if (activeElement.nextElementSibling) {
            activeElement.classList.add('active-slide');
            activeElement.nextElementSibling.classList.add('active');
            activeElement.classList.remove('active');
        }
        if (!activeElement.nextElementSibling) {
            for (let i=0; i<servise1SlidesTeam2.length; i++) {
                servise1SlidesTeam2[i].classList.remove('active-slide');
                servise1SlidesTeam2[i].classList.remove('active');
            }
            servise1SlidesTeam2[servise1SlidesTeam2.length - 1].classList.remove('active');
            servise1SlidesTeam2[0].classList.add('active');
            return;
    }
};

PREWSLIDER.addEventListener('click', prewOnServiseTeam2);

function prewOnServiseTeam2() {
    function activeElement() {
        for (let i = 0; i < servise1SlidesTeam2.length; i++) {
            if (servise1SlidesTeam2[i].classList.contains('active')) {
                return servise1SlidesTeam2[i];
            }
        }
    };

    var activeElement = activeElement();
    
    if (activeElement.previousElementSibling) {
        activeElement.classList.remove('active');
        activeElement.previousElementSibling.classList.remove('active-slide');
        activeElement.previousElementSibling.classList.add('active');
    }


    if (!activeElement.previousElementSibling) {
        for (let i=0; i<servise1SlidesTeam2.length; i++) {
            servise1SlidesTeam2[i].classList.add('active-slide');
        }
        servise1SlidesTeam2[0].classList.remove('active');
        servise1SlidesTeam2[servise1SlidesTeam2.length - 1].classList.add('active');
        servise1SlidesTeam2[servise1SlidesTeam2.length - 1].classList.remove('active-slide');
        return;
}
};

const hoverIMG = document.getElementsByClassName('middle-servises__hover');

for(var i = 0; i < hoverIMG.length; i++) {
    hoverIMG[i].addEventListener('click', clicckedImg);
};


function clicckedImg(e) {

    var target = e.target;

    console.log(target);
    

    if (target.classList.contains('middle-servises__hover')) {
        e.target.nextElementSibling.children[0].classList.add('active-slideeee');
    };
    
    
    if (e.target.nextElementSibling.children[0].classList.contains('active-slideeee')) {
        const hover = document.getElementsByClassName('middle-servises__hoverrrr');
        for(let i = 0; i < hover.length; i++) {
            hover[i].addEventListener('click', function (e) {
                console.log(e.target);
                e.target.classList.remove('active-slideeee');
            });
        };
    };

    e.preventDefault();
};

      

        var counter1 = document.getElementById('counter1').getContext('2d');     
        var counter2 = document.getElementById('counter2').getContext('2d');
        var counter3 = document.getElementById('counter3').getContext('2d');
        var counter4 = document.getElementById('counter4').getContext('2d');
        

        var no1 = 0;
        var no2 = 0;
        var no3 = 0;
        var no4 = 0;

        var pointToFill = 4.72;  
        var cw = counter1.canvas.width;  
        var ch = counter1.canvas.height;
        var diff;   

        // $(window).scroll(function() {
        //     var scrollCanvas = $('#canvas').offset().top;
        //     console.log('scrollCanvas -->', scrollCanvas);

        //    var win = $(this).scrollTop() + 300;
        //     console.log('win --> ', win);
            
        //     if ( win >= scrollCanvas) {
        //         var fill1 = setInterval(fillCounter(no1, 90, counter1, 1), 50);  
        //         var fill2 = setInterval(fillCounter(no2, 75, counter2, 2), 50);  
        //         var fill3 = setInterval(fillCounter(no3, 80, counter3, 3), 50);  
        //         var fill4 = setInterval(fillCounter(no4, 70, counter4, 4), 50); 
        //     }
        // });

        function fillCounter(no, num, argCounter, interval) {
            // Lexical Enviroment
            return function() {
            diff = ((no/100) * Math.PI*2*10);
            argCounter.clearRect(0,0,cw,ch);  
            argCounter.lineWidth = 10;     
            argCounter.fillStyle = 'black';     
            argCounter.strokeStyle = '#498af3';    
            argCounter.textAlign = 'center';
            argCounter.font = "25px Titillium Web";   
            argCounter.fillText(no+'%',75,80);       
            argCounter.beginPath();
            argCounter.arc(75,75,70,pointToFill,diff/10+pointToFill);    
            argCounter.stroke();

           
            if(no >= num) {
                clearInterval(intervals[`fill${interval}`]); // ES6 intervals[`fill${interval}`] -> itervals.fill1
            }
            no++;
            }
        };
         
         var fill1 = setInterval(fillCounter(no1, 90, counter1, 1), 50);  
         var fill2 = setInterval(fillCounter(no2, 70, counter2, 2), 50);  
         var fill3 = setInterval(fillCounter(no3, 30, counter3, 3), 50);  
         var fill4 = setInterval(fillCounter(no4, 50, counter4, 4), 50);  
       
     var intervals = {
            fill1,
            fill2,
            fill3,
            fill4
        };

        //= require slider.js;





        // var counterLine1 = document.getElementById('line1');
        // var counterLine2 = document.getElementById('line2');
        // var counterLine3 = document.getElementById('line3');
        // var counterLine4 = document.getElementById('line4');

        
        // console.log($('.line-blue').css('width'));
        
        // var percent1 = document.getElementById('percent1');
        // var percent2 = document.getElementById('percent2');
        // var percent3 = document.getElementById('percent3');
        // var percent4 = document.getElementById('percent4');
        
        // console.log('Чого тут пусто? --->', counterLine1.style.width);
        
        // counterLine1.style.width = "100px";
        
        // counterLine2.style.width = "100px";
        
        // counterLine3.style.width = "100px";
        
        // counterLine4.style.width = "100px";
        // function lineI() {
            //     for (var i = 0; i < line.length; i++) {
                //         line[i].style.width = '100px';
                //         return line[i].style.width;
                //     }
                // }
                
                // var newEnement = lineI();
                
                // function lineI() {
                //     for (var i = 0; i < line.length; i++) {
                //             line[i].style.width = '100px';
                //             return line[i].style.width;
                //     }
                // };
        
    //     var line = document.getElementsByClassName('blue-line');
        
    //     function frame(num, counterLine, interval) {
            

    //         return function () { // толком не працює 

    //             var NUM = counterLine.style.width;

    //             counterLine.style.width = '100px';            
               
    //             var newWid = parseInt(NUM);
                            
    //             if (newWid >= num) {
    //                 clearInterval(intervaLs[`intrVal${interval}`]); // зачищає не правильно

    //             } else {
    //             newWid = newWid + 50 + "px";    

    //             counterLine.style.width = newWid;  

    //             console.log(counterLine.style.width);
                
    //             counterLine.innerHTML = (newWid/1280) * 100 * 2 + "%";                   
    //         }
    //     }  
    // };
            
    //     var intrVal1 = setInterval(frame(500, line[0], 1), 500);
    //     var intrVal2 = setInterval(frame(300, line[1], 2), 50);
    //     var intrVal3 = setInterval(frame(400, line[2], 3), 50);
    //     var intrVal4 = setInterval(frame(500, line[3], 4), 50);

    //     var intervaLs = {
    //         intrVal1,
    //         intrVal2,
    //         intrVal3,
    //         intrVal4
    //     };

       
    
       
      
        
    
    
    // (function() {
        //     animate(function(timePassed) {
            //         line.style.left = timePassed / 5 + 'px';
            //         console.log("timePassed", timePassed);
            //         duration: 500;
            //     }, 2000);
            //   })();
            
            //   // Рисует функция draw
            //   // Продолжительность анимации duration
            //   function animate(draw, duration) {
                //     var start = performance.now();
                
                //     requestAnimationFrame(function animate(time) {
                    //       // определить, сколько прошло времени с начала анимации
                    //       var timePassed = time - start;
                    
                    //       console.log(time, start)
                    //         // возможно небольшое превышение времени, в этом случае зафиксировать конец
                    //       if (timePassed > duration) timePassed = duration;
                    
                    //       // нарисовать состояние анимации в момент timePassed
                    //       draw(timePassed);
                    
                    //       // если время анимации не закончилось - запланировать ещё кадр
                    //       if (timePassed < duration) {
                        //         requestAnimationFrame(animate);
                        //       }
                        //     });
                        //   }
        var line1 = document.getElementById('line1');
        var line2 = document.getElementById('line2');
        var line3 = document.getElementById('line3');
        var line4 = document.getElementById('line4');
    
        var percent1 = document.getElementById('percent1');
        var percent2 = document.getElementById('percent2');
        var percent3 = document.getElementById('percent3');
        var percent4 = document.getElementById('percent4');

          function animate(options) {
           
            var start = performance.now();
          
            requestAnimationFrame(function animate(time) {
              // timeFraction от 0 до 1
              var timeFraction = (time - start) / options.duration;
              if (timeFraction > 1) timeFraction = 1;
          
              // текущее состояние анимации
              var progress = options.timing(timeFraction)
          
              options.draw(progress);
          
              if (timeFraction < 1) {
                requestAnimationFrame(animate);
              }
          
            });
          }


          animate({
            duration: 2000,
            timing: function(timeFraction) {
              return timeFraction;
            },
            draw: function(progress) {
                line1.style.width = ((progress * 360)/400)*100 + '%';
                line2.style.width = ((progress * 280)/400)*100 + '%';
                line3.style.width = ((progress * 300)/400)*100 + '%';
                line4.style.width = ((progress * 340)/400)*100 + '%';

                percent1.innerHTML = line1.style.width;
                percent2.innerHTML = line2.style.width;
                percent3.innerHTML = line3.style.width;
                percent4.innerHTML = line4.style.width; //100 elements
            }
          });