let fields = [];
let currentShape = 'x';

function fillShape(id) {
    if (!fields[id]) {
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
    }
    if (fields[3] && fields[3] == fields[4] && fields[4] == fields[5]) {
        winner = fields[3];
        document.getElementById('2').classList.remove('hide');

    }
    if (fields[6] && fields[6] == fields[7] && fields[7] == fields[8]) {
        winner = fields[6];
        document.getElementById('3').classList.remove('hide');

    }

    /* --- Senkrecht --- */
    if (fields[0] && fields[0] == fields[3] && fields[3] == fields[6]) {
        winner = fields[0];
        document.getElementById('4').classList.remove('hide');

    }
    if (fields[1] && fields[1] == fields[4] && fields[4] == fields[7]) {
        winner = fields[1];
        document.getElementById('5').classList.remove('hide');

    }
    if (fields[2] && fields[2] == fields[5] && fields[5] == fields[8]) {
        winner = fields[2];
        document.getElementById('6').classList.remove('hide');

    }

    /* --- Quer --- */
    if (fields[0] && fields[0] == fields[4] && fields[4] == fields[8]) {
        winner = fields[2];
        document.getElementById('7').classList.remove('hide');

    }
    if (fields[2] && fields[2] == fields[4] && fields[4] == fields[6]) {
        winner = fields[2];
        document.getElementById('8').classList.remove('hide');

    }

    if (winner) {
        for (let i = 0; i < 9; i++) {
            document.getElementById('x-' + i).parentNode.removeAttribute('onclick');
            document.getElementById('x-' + i).parentNode.style = 'background: none;';
        }
    }
}