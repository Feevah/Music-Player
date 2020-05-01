const musicContainer = document.getElementById(
	'music-container'
);

const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');
const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById(
	'progress-container'
);
const title = document.getElementById('title');
const cover = document.getElementById('cover');

// Song Titles
const songs = [ 'jamz', 'song1', 'dimz' ];

// Keep track of song
let songIndex = 1;

// Load song details into dom
loadSong(songs[songIndex]);

// update Song Details

function loadSong(song) {
	title.innerText = song;
	audio.src = `music/${song}.mp3`;
	cover.src = `img/${song}.jpg`;
}

function playSong() {
	musicContainer.classList.add('play');
	playBtn
		.querySelector('i.fas')
		.classList.remove('fa-play');
	playBtn
		.querySelector('i.fas')
		.classList.add('fa-pause');

	audio.play();
}

function pauseSong() {
	musicContainer.classList.remove('play');
	playBtn.querySelector('i.fas').classList.add('fa-play');
	playBtn
		.querySelector('i.fas')
		.classList.remove('fa-pause');

	audio.pause();
}

// Event Listener

playBtn.addEventListener('click', () => {
	const isPlaying = musicContainer.classList.contains(
		'play'
	);

	if (isPlaying) {
		pauseSong();
	} else {
		playSong();
	}
});
