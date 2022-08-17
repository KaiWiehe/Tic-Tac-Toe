let fields = [];
let gameOver = false;
let currentShape = 'x';

function fillShape(id) {
    if (!fields[id] && !gameOver) {
        if (currentShape == 'o') {
            currentShape = 'x';
            document.getElementById('player-1').classList.remove('player-inactive');
            document.getElementById('player-2').classList.add('player-inactive');
        } else {
            currentShape = 'o';
            document.getElementById('player-2').classList.remove('player-inactive');
            document.getElementById('player-1').classList.add('player-inactive');
        }
        fields[id] = currentShape;
        showShape(id);
        checkForWin();
    }
}

function showShape(id) {

    for (let i = 0; i < fields.length; i++) {
        if (fields[i] == 'o') {
            document.getElementById('o-' + i).classList.remove('hide');
        }
        if (fields[i] == 'x') {
            document.getElementById('x-' + i).classList.remove('hide');
        }
    }
}

function checkForWin() {
    let winner;

    /* --- Wagerecht --- */
    if (fields[0] && fields[0] == fields[1] && fields[1] == fields[2]) {
        winner = fields[0];
        document.getElementById('1').classList.remove('hide');
        setTimeout(function() {
            document.getElementById('1').style = "top: 62px;transform: scale(1);";
        }, 125);
    }
    if (fields[3] && fields[3] == fields[4] && fields[4] == fields[5]) {
        winner = fields[3];
        document.getElementById('2').classList.remove('hide');
        setTimeout(function() {
            document.getElementById('2').style = "top: 204px;transform: scale(1);";
        }, 125);
    }
    if (fields[6] && fields[6] == fields[7] && fields[7] == fields[8]) {
        winner = fields[6];
        document.getElementById('3').classList.remove('hide');
        setTimeout(function() {
            document.getElementById('3').style = "top: 343px;transform: scale(1);";
        }, 125);
    }

    /* --- Senkrecht --- */
    if (fields[0] && fields[0] == fields[3] && fields[3] == fields[6]) {
        winner = fields[0];
        document.getElementById('4').classList.remove('hide');
        setTimeout(function() {
            document.getElementById('4').style = "top: 204px;right: 141px;transform: rotate(90deg) scale(1);";
        }, 125);
    }
    if (fields[1] && fields[1] == fields[4] && fields[4] == fields[7]) {
        winner = fields[1];
        document.getElementById('5').classList.remove('hide');
        setTimeout(function() {
            document.getElementById('5').style = "top: 204px;transform: rotate(90deg) scale(1);";
        }, 125);
    }
    if (fields[2] && fields[2] == fields[5] && fields[5] == fields[8]) {
        winner = fields[2];
        document.getElementById('6').classList.remove('hide');
        setTimeout(function() {
            document.getElementById('6').style = "top: 204px;left: 140px;transform: rotate(90deg) scale(1);";
        }, 125);
    }

    /* --- Quer --- */
    if (fields[0] && fields[0] == fields[4] && fields[4] == fields[8]) {
        winner = fields[0];
        document.getElementById('7').classList.remove('hide');
        setTimeout(function() {
            document.getElementById('7').style = "top: 204px;left: -92px;transform: rotate(45deg) scale(1); width: 600px";
        }, 125);
    }
    if (fields[2] && fields[2] == fields[4] && fields[4] == fields[6]) {
        winner = fields[2];
        document.getElementById('8').classList.remove('hide');
        setTimeout(function() {
            document.getElementById('8').style = "top: 204px;left: -92px;transform: rotate(-45deg) scale(1); width: 600px";
        }, 125);
    }

    if (winner) {
        gameOver = true;
        setTimeout(function() {
            document.getElementById('game-over').classList.remove('hide');
            document.getElementById('restart').classList.remove('hide');
        }, 1000);
        for (let i = 0; i < 9; i++) {
            /* document.getElementById('x-' + i).parentNode.removeAttribute('onclick'); */
            /* Geht auch, das andere ist nur schöner */
            document.getElementById('x-' + i).parentNode.style = 'background: none;';
        }
    }
}

function restart() {
    gameOver = false;
    document.getElementById('game-over').classList.add('hide');
    document.getElementById('restart').classList.add('hide');
    for (let i = 0; i < 9; i++) {
        document.getElementById('o-' + i).classList.add('hide');
        document.getElementById('x-' + i).classList.add('hide');
        document.getElementById('x-' + i).parentNode.style = '';
    }
    for (let z = 1; z < 9; z++) {
        document.getElementById(`${z}`).style = "transform: scale(0);";
        document.getElementById(`${z}`).classList.add('hide');
    }
    fields = [];
}