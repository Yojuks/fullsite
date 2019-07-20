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
  // middle-servises__item
  
          

    var carousel1 = document.getElementById('corousel1');
    
    var list1 = carousel1.querySelector('ul');
    
    var listElems1 = carousel1.querySelectorAll('li');
 
    var elemLi = document.getElementsByClassName('middle-servises__item')[1];

    var offsetWidth = elemLi.offsetWidth; 
    
    var jqueryWidth = $('.middle-servises__active li').css('width');

    var jqueryMargin = $('.middle-servises__active li').css('margin-right');

    var fullWidthLi = parseInt(jqueryWidth) + parseInt(jqueryMargin);

    Math.round(fullWidthLi);

    console.log('fullWidthLi --->', fullWidthLi);
    

    var rightButton = document.getElementsByClassName('slide-image__right')[1];
 
    var leftButton = document.getElementsByClassName('slide-image__left')[1];
    
    var count1 = 3;

    var position1 = 0;

    console.log('position1 start point----->', position1);

    leftButton.onclick = function() {
      position1 = Math.min(position1 + fullWidthLi * count1, 0)
      console.log(position1)
      list1.style.left = position1 + 'px';
    };
    
    rightButton.onclick = function() {
  
      position1 = Math.max(position1 - fullWidthLi * count1, -fullWidthLi * (listElems1.length - count1));

      console.log(position1);

      list1.style.left = position1 + 'px';
    };





    //   /* конфигурация */
    // var width = 130; // ширина изображения
    // var count = 3; // количество изображений

    // var carousel = document.getElementById('carousel');

    // var list = carousel.querySelector('ul');
    // var listElems = carousel.querySelectorAll('li');

    // console.log('listElems - -- - ->', listElems.length);
    
    // var position = 0; // текущий сдвиг влево

    // console.log('present position --->', position);
    
          
    // carousel.querySelector('.prev1').onclick = function() {
    //   // сдвиг влево
    //   // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
    //   position = Math.min(position + width * count, 0)
    //   console.log('position prev', position);
    //   list.style.marginLeft = position + 'px';
    // };

    // carousel.querySelector('.next1').onclick = function() {
    //   // сдвиг вправо
    //   // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
    //   position = Math.max(position - width * count, -width * (listElems.length - count));
    //   console.log('position next', position);
    //   list.style.marginLeft = position + 'px';
    // };


    $('.single-item').slick({
      arrows: true,
      dots: true,
    });
      
    var slickNext = document.getElementsByClassName('slick-next')[0],
        slickPrev = document.getElementsByClassName('slick-prev')[0],
        slickUl = document.getElementsByClassName('slick-dots')[0];

    console.log(slickUl);

    slickNext.className += " next-slick";
    slickPrev.className += " prev-slick";
    slickUl.className += " slick-dots-new";
    

   
    // $('.middle-servises').slick({
    //   slidesToShow: 3,
    //   slidesToScroll: 1,
    // });
  
    

    // var str = "How are you doing today?";
    // var res = str.split(" ").join('');
    
    // console.log(res);
    

    function noSpace(x){
      var newX = x.split(' ').join('');
      console.log(newX);
      return newX ;
     }
     
     noSpace('   sdf sdf dfs  ');