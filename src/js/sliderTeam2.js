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