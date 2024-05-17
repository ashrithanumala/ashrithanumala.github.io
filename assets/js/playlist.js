// assets/js/playlist.js

document.addEventListener("DOMContentLoaded", function() {
    const playlist = {
        cover: "assets/img/playlistimgs/playlistcover.jpg", // Path to your playlist cover image
        songs: [
            { title: "Gods & Monsters", artist: "Lana Del Rey", cover: "assets/img/playlistimgs/Paradise.jpg" },
            { title: "Can't Stop", artist: "Red Hot Chili Peppers", cover: "assets/img/playlistimgs/By the Way.jpg" },
            { title: "I love you", artist: "Fontaines D.C.", cover: "assets/img/playlistimgs/Skinty Fia go deo.jpg" },
            { title: "A Horse With No Name", artist: "America", cover: "assets/img/playlistimgs/America.jpg" },
            { title: "Misses", artist: "Dominic Fike", cover: "assets/img/playlistimgs/14 minutes.jpg" }
        ]
    };

    const playlistContainer = document.getElementById('playlist-container');
    
    const coverImage = document.createElement('img');
    coverImage.src = playlist.cover;
    coverImage.alt = "Playlist Cover";
    coverImage.classList.add('playlist-cover');
    coverImage.addEventListener('click', () => {
        const songList = document.getElementById('song-list');
        songList.classList.toggle('show');
    });
    playlistContainer.appendChild(coverImage);

    const songList = document.createElement('div');
    songList.id = 'song-list';
    songList.classList.add('song-list');
    playlist.songs.forEach(song => {
        const songItem = document.createElement('div');
        songItem.classList.add('song-item');
        songItem.innerHTML = `
            <img src="${song.cover}" alt="Song Cover" class="song-cover">
            <div class="song-info">
                <strong>${song.title}</strong><br>${song.artist}
            </div>
        `;
        songList.appendChild(songItem);
    });

    playlistContainer.appendChild(songList);
});
