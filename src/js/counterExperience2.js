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


              /* этот код помечает картинки, для удобства разработки */
    // var lis = document.getElementsByTagName('li');
    // for (var i = 0; i < lis.length; i++) {
    //   lis[i].style.position = 'relative';
    //   var span = document.createElement('span');
    //   // обычно лучше использовать CSS-классы,
    //   // но этот код - для удобства разработки, так что не будем трогать стили
    //   span.style.cssText = 'position:absolute;left:0;top:0';
    //   span.innerHTML = i + 1;
    //   lis[i].appendChild(span);
    // }

    // debugger;

    /* конфигурация */
    var width = 130; // ширина изображения
    var count = 3; // количество изображений

    var carousel = document.getElementById('carousel');

    var list = carousel.querySelector('ul');
    var listElems = carousel.querySelectorAll('li');

    var position = 0; // текущий сдвиг влево
          
    carousel.querySelector('.prev').onclick = function() {
      // сдвиг влево
      // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
      position = Math.min(position + width * count, 0)
      list.style.marginLeft = position + 'px';
    };

    carousel.querySelector('.next1').onclick = function() {
      // сдвиг вправо
      // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
      position = Math.max(position - width * count, -width * (listElems.length - count));
      list.style.marginLeft = position + 'px';
    };
    
    var middleServisesSlider = document.getElementsByClassName('middle-servises')[1];

    var rightButton = document.getElementsByClassName('slide-image__right')[1];

    var leftButton = document.getElementsByClassName('slide-image__left')[1];

    console.log(leftButton);
    
    var currWidthSlider = middleServisesSlider.offsetWidth;

    console.log(currWidthSlider);
    
    var count = 3;
    
    var position = 0;
    
    rightButton.onclick = function() {
      position = Math.min(position + currWidthSlider, 0);
      console.log(position);
      
      middleServisesSlider.style.marginLeft = position + 'px';
      console.log(middleServisesSlider.style.marginLeft);
      
      console.log(true);
    };

    leftButton.onclick = function() {
      position = Math.max(position - currWidthSlider, -width * (listElems.length - count));
      list.style.marginLeft = position + 'px';
    };