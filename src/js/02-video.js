import Player from '@vimeo/player';

const LOCALSTOREGE_KEY = 'videoplayer-current-time';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

console.log(player);

