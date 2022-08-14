import Player from '@vimeo/player';
let throttle = require('lodash.throttle');
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const onPlay=(data)=> {
  // data is an object containing properties specific to that event  
    localStorage.setItem('videoplayer-current-time', data.seconds);
    console.log(localStorage.getItem('videoplayer-current-time'));
};
player.on(
    'timeupdate',
    throttle(onPlay, 1000),
);
player.setCurrentTime(localStorage.getItem('videoplayer-current-time'))
.catch(function (error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});