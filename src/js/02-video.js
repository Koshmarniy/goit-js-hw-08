import Player from '@vimeo/player';
// console.log(Player)
import throttle from 'lodash.throttle';
// const iframe = document.querySelector('iframe');
// const player = new Player(iframe);
// player.on('play', function() {
//     console.log('played the video!');
// });

const throttle = require('lodash.throttle');
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const KEY = "videoplayer-current-time"

player.on('timeupdate', throttle(onPlay, 1000));
    
function onPlay(data) {
    const current = localStorage.setItem(KEY, data.seconds)
}

const result = localStorage.getItem(KEY)

if (result) {
player.setCurrentTime(result)
} else {
    return
}
console.log(throttle)



