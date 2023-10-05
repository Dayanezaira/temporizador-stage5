const elements = {
    tree: document.querySelector('.block-cards-tree'),
    cloud: document.querySelector('.block-cards-cloud'),
    house: document.querySelector('.block-cards-house'),
    fire: document.querySelector('.block-cards-fire')
}

const musics = { 
    tree: new Audio('./musics/floresta.wav'),
    cloud: new Audio('./musics/chuva.wav'),
    house: new Audio('./musics/cafeteria.wav'),
    fire: new Audio('./musics/lareira.wav'),
}

let playing = false

function clickCard(cardId) {

    const sound = musics[cardId]

    const cardSelect = elements[cardId]
    
    if (sound.paused) {
        sound.play()
        playing = true;
        cardSelect.style.backgroundColor = '#02799D';
} else {
    sound.pause();
    playing = false;
    sound.currentTime = 0
    cardSelect.style.backgroundColor = '#E1E1E6';
}
}

Object.keys(elements).forEach(cardId => {
    elements[cardId].addEventListener('click', () => {
        clickCard(cardId);
    });
});
