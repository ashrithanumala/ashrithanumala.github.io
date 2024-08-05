// assets/js/playlist.js

document.addEventListener("DOMContentLoaded", function() {
    const playlist = {
        cover: "assets/img/playlistimgs/playlistcover.jpeg", // Path to your playlist cover image
        songs: [
            { title: "Memphis; The Blues", artist: "Zach Bryan", cover: "assets/img/playlistimgs/one.jpg" },
            { title: "Steps Beach", artist: "Childish Gambino", cover: "assets/img/playlistimgs/two.jpg" },
            { title: "Kids With Guns", artist: "Gorillaz", cover: "assets/img/playlistimgs/three.jpg" },
            { title: "One Wish", artist: "Ravyn Lenae", cover: "assets/img/playlistimgs/four.webp" },
            { title: "Me and Jon Hanging on", artist: "Mac Demarkco", cover: "assets/img/playlistimgs/five.jpg" }
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
