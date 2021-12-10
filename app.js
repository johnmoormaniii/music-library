// ********** app.js **********

let songLibrary = [];

class Song {
    constructor(title, artist, length){
        this.title = title;
        this.artist = artist;
        this. length = length;
    }
}

function addSongToDisplay(){
    const title = document.querySelector('#title').value;
    const artist = document.querySelector('#artist').value;
    const length = document.querySelector('#length').value;

    if (title === '' || artist === '' || length === ''){
        alert('Please Fill Out All Fields');
    } else {
        const song = new Song(title, artist, length);

        const tableContainer = document.querySelector('.table-container');
        const songCard = document.createElement('div');
        songCard.classList.add('table');
        songCard.classList.add('song-card');
        songCard.innerHTML = `
            <div>${song.title}</div>
            <div>${song.artist}</div>
            <div>${song.length}</div>
            <input type="checkbox">
            <i class="btn-delete fas fa-trash">
        `;

        const titleContainer = document.querySelector('.title-container');
        const artistContainer = document.querySelector('.artist-container');
        const lengthContainer = document.querySelector('.length-container');

        document.querySelector('#title').value = '';
        document.querySelector('#artist').value = '';
        document.querySelector('#length').value = '';

        tableContainer.appendChild(songCard);
        
        songLibrary.push(song);
        console.log(songLibrary);
    };
};

function removeSongFromDisplay(button){
    if(button.classList.contains("btn-delete")){
        button.parentElement.remove();
    };
};

function removeSongFromArray(title){

    songLibrary.forEach((song) => {
        if (song.title = title) {
            
        }
    })
}

// Events

// Adding a Song

document.querySelector('#submit').addEventListener('click', () => {
    addSongToDisplay();
})

// Removing a Song

document.addEventListener('click', (e) => {
    removeSongFromDisplay(e.target);
    console.log(e.target.parentElement);
})
