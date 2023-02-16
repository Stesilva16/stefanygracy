let words = ['JAVA', 'PHP', 'PYTHON', 'JAVASCRIPT', 'C', 'RUBY', 'KOTLIN', 'GOLANG'];
let wrongLetters = [];
let rightLetters = [];
let attempts;
let correct;
let endGame = false;

const btnStart = document.getElementById('iniciar-jogo');
const btnNewWord = document.getElementById('nova-palavra');
let word = '';

const canvas = document.querySelector('canvas');
const brush = canvas.getContext('2d');
brush.strokeStyle = '#D7B7BC';
brush.lineWidth = 2;

const boardEl = document.getElementById('palavra');
const wrongLettersEl = document.getElementById('letras-erradas');

function clearArray(array) {
    while (array.length) {
        array.pop();
    }
    wrongLettersEl.innerHTML = '<span></span>';
}

function board(word) {
    boardEl.innerHTML = '';
    for (let i = 0; i < word.length; i++) {
        boardEl.innerHTML += '<span></span>';
    }
}

function secretWord() {
    return words[Math.floor(Math.random() * words.length)];
}

function isLetter(code) {
    return code >= 97 && code <= 122;
}

function checkLetter(letter, word, spans) {
    if (attempts < 6 && endGame == false) {
        if (word.includes(letter) && !rightLetters.includes(letter)) {
            checkRightLetters(rightLetters, word, letter, spans);
            return false;
        } else if (!word.includes(letter) && !wrongLetters.includes(letter)) {
            checkWrongLetters(wrongLetters, wrongLettersEl, letter);
            return true;
        }
    }
}

function checkRightLetters(arrayLetters, word, letter, spans) {
    arrayLetters.push(letter);
    for (let i = 0; i < word.length; i++) {
        if (word[i] == letter) {
            spans[i].textContent = letter;
            correct++;
        }
    }
}

function checkWrongLetters(arrayLetters, wrongLettersEl, letter) {
    arrayLetters.push(letter);
    wrongLettersEl.innerHTML = '';
    for (let i = 0; i < arrayLetters.length; i++) {
        wrongLettersEl.innerHTML += arrayLetters[i] + '    ';
    }
}

function clearCanvas() {
    brush.clearRect(0, 0, 600, 300);
}

function drawGallows() {
    clearCanvas();

    brush.beginPath();
    brush.moveTo(200, 250);
    brush.lineTo(400, 250);
    brush.stroke();

    brush.beginPath();
    brush.moveTo(250, 250);
    brush.lineTo(250, 70);
    brush.lineTo(380, 70);
    brush.lineTo(380, 100);
    brush.stroke();
}

function drawHead() {
    brush.beginPath();
    brush.arc(380, 120, 20, 0, Math.PI * 2);
    brush.stroke();
}

function drawLine(xStar, yStart, xFinal, yFinal) {
    brush.beginPath();
    brush.moveTo(xStar, yStart);
    brush.lineTo(xFinal, yFinal);
    brush.stroke();
}

function gallowsTest(attempts) {
    switch (attempts) {
        case 0:
            drawGallows();
            break;
        case 1:
            drawHead();
            break;
        case 2:
            drawLine(380, 140, 380, 210);
            break;
        case 3:
            drawLine(380, 140, 350, 160);
            break;
        case 4:
            drawLine(380, 140, 410, 160);
            break;
        case 5:
            drawLine(380, 210, 350, 230);
            break;
        case 6:
            drawLine(380, 210, 410, 230);
            break;
    }
}

function newGame() {
    btnStart.innerText = 'Vamos de novo?';
    word = secretWord();
    board(word);
    clearArray(wrongLetters);
    clearArray(rightLetters);
    endGame = false;
    drawGallows();
    attempts = 0;
    correct = 0;
}

function endGameTest(attempts, word) {
    if (attempts == 6) {
        wrongLettersEl.style.color = '#7D0552';
        wrongLettersEl.innerHTML = 'Que pena! Não foi dessa vez!';
    } else if (winner(word)) {
        wrongLettersEl.style.color = 'Champagne';
        wrongLettersEl.innerHTML = 'You Win.<br>Parabéns!';
    }
}

function winner(word) {
    if (correct == word.length) {
        return endGame = true;
    }
}

function addWord(word) {
    if (!words.includes(word) && input.value != '') {
        words.push(word);
        alert('Palavra adicionada ao jogo.');
    } else if (words.includes(word)) {
        alert('Essa palavra já está no jogo. Digite outra.');
    }
}

btnStart.addEventListener('click', function () {
    newGame();
    addEventListener('keypress', function (e) {
        const spans = document.querySelectorAll('span');
        if (isLetter(e.keyCode)) {
            const isWrong = checkLetter(e.key.toUpperCase(), word, spans);
            if (isWrong) {
                attempts++;
                gallowsTest(attempts);
            }
            endGameTest(attempts, word);
        }
    })
})

btnNewWord.addEventListener('click', function () {
    const gameEls = document.querySelectorAll('div');
    const input = document.querySelector('textarea');
    for (let i = 0; i < gameEls.length; i++) {
        gameEls[i].style.display = 'none';
    }
    
    input.style.display = 'block';
    const word = input.value.toUpperCase();

    addWord(word);

    btnStart.addEventListener('click', function () {
        input.style.display = 'none';
        for (let i = 0; i < gameEls.length; i++) {
            gameEls[i].style.display = 'block';
        }
    })
})