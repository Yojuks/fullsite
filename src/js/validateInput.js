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