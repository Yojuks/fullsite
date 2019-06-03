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
