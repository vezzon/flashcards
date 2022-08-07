const card = document.getElementById('card')
const next = document.getElementById('next')
const prev = document.getElementById('prev')

let num = 1;

let flag = 'eng';
card.addEventListener('click', function () {
    fetch(`http://127.0.0.1:3000/${num}`)
    .then((response) => response.json())
    .then((data) => {
        console.log('Data', data)
        if (flag == 'eng') {
            card.innerText = data.Eng;
            flag = 'pl';
        } else if (flag == 'pl') {
            card.innerText = data.Pl;
            flag = 'eng';
        }
    })
});

next.addEventListener('click', function () {
    num++;
});

prev.addEventListener('click', function () {
    if (num > 0) {
        num--;
    }
});


