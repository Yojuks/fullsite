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