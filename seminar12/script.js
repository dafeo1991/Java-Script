"use strict";

const video = document.querySelector('video');
const play = document.querySelector('.fa-play');
const pause = document.querySelector('.fa-pause');
const volume = document.querySelector('.volume');
const timing = document.querySelector('.timing');
const currentTime = document.querySelector('.currentTime');

play.addEventListener('click', (e) => {
    video.play();
});

pause.addEventListener('click', (e) => {
    video.pause();
});


volume.addEventListener('input', (e) => { //когда будем двигать ползунок выполни функцию
    video.volume = volume.value;          // громкость видео = значению ползунка
    // console.log(volume.value);
});

video.addEventListener('timeupdate', (e) => { //добавляем слушателя события на тег видео, когда поменяется время  запустить функцию
    timing.value = video.currentTime / video.duration * 100;  //значение ползунка ставим в значение текущего времени у видео, которое / все время видео и *100 что бы считалочь в % (получаем сколько % от видео мы посмотрели)
    const minutes = Math.floor(video.currentTime / 60);
    const second = Math.round(video.currentTime %60);
    currentTime.textContent = `${String(minutes).padStart(2,'0')}:${String(second).padStart(2,'0')}`; // число преобразовали в строку, ее длинна не меньше двух, если меньше поставь 0

});

timing.addEventListener('input', (e) => {   // когда меняем положение ползунка запускается функция
    video.currentTime = timing.value / 100 * video.duration;  // время видео перемотать = берем % от положения ползунка (текущее значение ползунка / 100 умножаем на длинну видео)
});