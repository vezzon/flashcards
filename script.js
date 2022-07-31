const card = document.getElementById('card');
const next = document.getElementById('next')
const prev = document.getElementById('prev')

var num = 0;

const flashcards = [
    {
        eng: 'Eng side1',
        pl: 'Pl side1'
    },
    {
        eng: 'Eng side2',
        pl: 'Pl side2'
    },
    {
        eng: 'Eng side3',
        pl: 'Pl side3'
    },
    {
        eng: 'Eng sidei4',
        pl: 'Pl side4'
    },
]

card.innerText = flashcards[num].eng;

var flag = 'eng';
card.addEventListener('click', function () {
    // Flip card
    if (flag == 'eng') {
        card.innerText = flashcards[num].eng;
        flag = 'pl';
    } else if (flag == 'pl') {
        card.innerText = flashcards[num].pl;
        flag = 'eng';
    }
});

next.addEventListener('click', function () {
    if (num < flashcards.length -1) {
        num++;
    }
    card.innerText = flashcards[num].eng;
});

prev.addEventListener('click', function () {
    if (num > 0) {
        num--;
    }
    card.innerText = flashcards[num].eng;
});


