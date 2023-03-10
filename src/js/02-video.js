import Player from '@vimeo/player';

const player = new Player('handstick', {
    id: 236203659,
    width: 640
});

player.on('play', function() {
    console.log('played the video!');
});
