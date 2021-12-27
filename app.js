// ********** app.js **********


class Song {
    constructor(title, artist, length){
        this.title = title;
        this.artist = artist;
        this. length = length;
    }
}

let songLibrary =[];


// ---------- HANDLING THE SONG LIBRARY ARRAY ----------


function addSong(){   
    const title = document.querySelector('#title').value;
    const artist = document.querySelector('#artist').value;
    const length = document.querySelector('#length').value;

    if (title === '' || artist === '' || length === ''){
        alert('Make Sure All Fields Are Filled Out!')
    } else {
        const newSong = new Song(title, artist, length);
        const songs = JSON.parse(localStorage.getItem('songLibrary'));
        songs.push(newSong);
        console.log(songs);
        localStorage.setItem('songLibrary', JSON.stringify(songs));

        addSongToDisplay(newSong);
    };
};

function removeSong(element){
    if (element.classList.contains('btn-delete')){
        const songs = JSON.parse(localStorage.getItem('songLibrary'));
        songBeingDeleted = element.parentElement.firstChild.nextElementSibling.textContent;

        songs.forEach((song, index) => {
            if(song.title === songBeingDeleted){
                songs.splice(index, 1);
                console.log(songs);
                localStorage.setItem('songLibrary', JSON.stringify(songs));
            }
        })

    }
};


// ---------- SONG DISPLAY HANDLING ----------


function displaySongs(){
    const songs = JSON.parse(localStorage.getItem('songLibrary'));
    songs.forEach((song) => {
        const tableContainer = document.querySelector('.table-container');
        const songCardContainer = document.querySelector('.song-card-container');
        const songCard = document.createElement('div');
        songCard.classList.add('table');
        songCard.classList.add('song-card');
        songCard.innerHTML = `
            <div class="song-title">${song.title}</div>
            <div>${song.artist}</div>
            <div>${song.length}</div>
            <input type="checkbox">
            <i class="btn-delete fas fa-trash">
        `;

        songCardContainer.appendChild(songCard);
    })
};

function addSongToDisplay(newSong){
    const tableContainer = document.querySelector('.table-container');
    const songCardContainer = document.querySelector('.song-card-container');
    const songCard = document.createElement('div');
    songCard.classList.add('table');
    songCard.classList.add('song-card');
    songCard.innerHTML = `
        <div class="song-title">${newSong.title}</div>
        <div>${newSong.artist}</div>
        <div>${newSong.length}</div>
        <input type="checkbox">
        <i class="btn-delete fas fa-trash">
    `;

    songCardContainer.appendChild(songCard);
};

function removeSongFromDisplay(button){
    if(button.classList.contains('btn-delete')){
        button.parentElement.remove();
    }
};

function clearAllCards(button){
    button.parentElement.parentElement.nextElementSibling.firstChild.nextElementSibling.nextElementSibling.remove();
    const tableContainer = document.querySelector('.table-container');
    const newSongCardContainer = document.createElement('div');
    newSongCardContainer.classList.add('song-card-container');
    tableContainer.appendChild(newSongCardContainer);
};


// ---------- CLEARING INPUT FIELDS AFTER ADDING A SONG ----------


function clearInput(){
    document.querySelector('#title').value = '';
    document.querySelector('#artist').value = '';
    document.querySelector('#length').value = '';
};


// ---------- LOCAL STORAGE HANDLING ----------


function getLocalStorage(){
    if (JSON.parse(localStorage.getItem('songLibrary')) == null) {
        newLocalStorage();
    } else {
        console.log(JSON.parse(localStorage.getItem('songLibrary')));
    };
}

function clearAllLocalStorage(){
    localStorage.clear();
    songLibrary = [];
    localStorage.setItem('songLibrary', JSON.stringify(songLibrary));
};

function newLocalStorage(){
    let songLibrary = [];
    localStorage.setItem('songLibrary', JSON.stringify(songLibrary));
    console.log(JSON.parse(localStorage.getItem('songLibrary')));
};


// ---------- EVENTS ----------


document.querySelector('#submit').addEventListener('click', () => {
    addSong();
    clearInput();
});

document.addEventListener('click', (e) => {
    removeSong(e.target);
    removeSongFromDisplay(e.target);
});

document.querySelector('#clearAll').addEventListener('click', (e) => {
    clearAllLocalStorage();
    newLocalStorage();
    clearAllCards(e.target);
});


// ---------- THESE RUN WHEN THE PAGE OPENS ----------


getLocalStorage();
displaySongs();