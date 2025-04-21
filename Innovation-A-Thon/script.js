// Playlist data
const playlist = [
    { title: "Song Title 1", artist: "Artist Name", src: "songs/song1.mp3", img: "images/song1.jpg" },
    { title: "Song Title 2", artist: "Artist Name", src: "songs/song2.mp3", img: "images/song2.jpg" },
    { title: "Song Title 3", artist: "Artist Name", src: "songs/song3.mp3", img: "images/song3.jpg" }
];

// Function to render the playlist
function renderPlaylist() {
    const playlistContainer = document.querySelector('.spotify-playlist .card');
    playlistContainer.innerHTML = ''; // Clear existing content

    playlist.forEach((song, index) => {
        const songItem = document.createElement('div');
        songItem.classList.add('item');
        songItem.setAttribute('onclick', `playSong('${song.src}', this)`);

        songItem.innerHTML = `
            <img src="${song.img}" alt="">
            <h3>${song.title}</h3>
            <p>${song.artist}</p>
        `;

        playlistContainer.appendChild(songItem);
    });
}

// Function to play a song
function playSong(songPath, element) {
    const audio = document.getElementById('audio');
    const audioSource = document.getElementById('audio-source');

    // Update the audio source
    audioSource.src = songPath;

    // Reload the audio player and play the song
    audio.load();
    audio.play();

    // Highlight the active song
    const items = document.querySelectorAll('.item');
    items.forEach(item => item.classList.remove('active'));
    element.classList.add('active');
}

// Render the playlist on page load
document.addEventListener('DOMContentLoaded', renderPlaylist);