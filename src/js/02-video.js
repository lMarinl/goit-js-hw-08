import Player from '@vimeo/player';
import throttle from 'lodash.throttle'

const newPlayer = document.querySelector('iframe');



const framePlayer = new Player('vimeo-player', {
    url: `${newPlayer.src}`,
  });
  
  framePlayer.on('timeupdate', throttle(saveTime, 1000));


  function saveTime(event) {
    const currentTime = event.seconds;
    localStorage.setItem('videoplayer-current-time', JSON.stringify(currentTime));
  }

  
    const savedTime = Number(JSON.parse(localStorage.getItem('videoplayer-current-time')));


    if (savedTime) {
        framePlayer.setCurrentTime(savedTime).then(function(seconds) {
        })
    }

  ;