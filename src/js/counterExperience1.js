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