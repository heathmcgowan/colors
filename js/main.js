var currentPlayer;
var players = [
    {
        name: "Heath",
        letter: "H",
        color: "green",
        score: 0,
    },
    {
        name: "Elizabeth",
        letter: "E",
        color: "red",
        score: 0,
    },
    {
        name: "Justin",
        letter: "J",
        color: "blue",
        score: 0,
    },
    {
        name: "Gina",
        letter: "G",
        color: "purple",
        score: 0,
    },
    {
        name: "Nick",
        letter: "N",
        color: "orange",
        score: 0,
    }
];

var heathScore = 0;
var elizabethScore = 0;
var justinScore = 0;
var ginaScore = 0;
var nickScore = 0;

var table = document.querySelector('#table');


$( document ).ready(function() {
    var turn = 1;
    currentPlayer = players[turn];
    var ascending = true;
    var endOfRound = false;
    var nextRound = false;
    $('#pickingPlayer').text(players[0].name);
    $('#pickingPlayer').css('color', players[0].color);
    $('#guessingPlayer').text(players[turn].name);
    $('#guessingPlayer').css('color', players[turn].color);

    table.addEventListener('click', function(e) {
        var td = e.target;
        
        if (endOfRound == false) {
            if (td.innerText == "") {
                td.innerText = currentPlayer.letter;
                td.style.color = currentPlayer.color;
                
                if (ascending == true) {
                    if (turn < (players.length - 1)) {
                        turn ++;
                        $('#guessingPlayer').text(players[turn].name);
                        $('#guessingPlayer').css('color', players[turn].color);
                    } else {
                        ascending = false;
                    };
                } else {
                    if (turn > 1) {
                        turn --;
                        $('#guessingPlayer').text(players[turn].name);
                        $('#guessingPlayer').css('color', players[turn].color);
                    } else {
                        players.move(0, players.length);
                        ascending = true;
                        endOfRound = true;
                    };
                };
                currentPlayer = players[turn];
            }; 
        } else {
            if (nextRound == false) {
                td.className = 'reveal';
                nextRound = true;
            } else {
                $("#table td").text("");
                $('#pickingPlayer').text(players[0].name);
                $('#pickingPlayer').css('color', players[0].color);
                $('#guessingPlayer').text(players[turn].name);
                $('#guessingPlayer').css('color', players[turn].color);
                $("#table td").removeClass("reveal");
                endOfRound = false;
                nextRound = false;
            }
        };
       
    });

    $('#score-list').append(`<div id="heath-score" class="player-score">
                                <h2 style="color: green">Heath:</h2>
                                <h2 id="heath-score-counter">${heathScore}</h2>
                            </div>`);

    $('#heath-score').click(function() {
        heathScore++
        $('#heath-score-counter').text(heathScore);
    });

    $('#score-list').append(`<div id="elizabeth-score" class="player-score">
                                <h2 style="color: red">Elizabeth:</h2>
                                <h2 id="elizabeth-score-counter">${elizabethScore}</h2>
                            </div>`);

    $('#elizabeth-score').click(function() {
        elizabethScore++
        $('#elizabeth-score-counter').text(elizabethScore);
    });

    $('#score-list').append(`<div id="justin-score" class="player-score">
                                <h2 style="color: blue">Justin:</h2>
                                <h2 id="justin-score-counter">${justinScore}</h2>
                            </div>`);

    $('#justin-score').click(function() {
        justinScore++
        $('#justin-score-counter').text(justinScore);
    });

    $('#score-list').append(`<div id="gina-score" class="player-score">
                                <h2 style="color: purple">Gina:</h2>
                                <h2 id="gina-score-counter">${ginaScore}</h2>
                            </div>`);

    $('#gina-score').click(function() {
        ginaScore++
        $('#gina-score-counter').text(ginaScore);
    });

    $('#score-list').append(`<div id="nick-score" class="player-score">
                                <h2 style="color: orange">Nick:</h2>
                                <h2 id="nick-score-counter">${nickScore}</h2>
                            </div>`);

    $('#nick-score').click(function() {
        nickScore++
        $('#nick-score-counter').text(nickScore);
    });

});

Array.prototype.move = function (from, to) {
    this.splice(to, 0, this.splice(from, 1)[0]);
};