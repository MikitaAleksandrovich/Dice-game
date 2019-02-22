/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. 
Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. 
After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. 
After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying;

init();

$('.btn-roll').click(function () {
	if (gamePlaying) {
		
	//1. Random number 
	var dice = Math.floor((Math.random() * 6) + 1);

	// 2. Display the result
	var diceDOM = $('.dice');
	diceDOM.style.display = 'block';
	diceDOM.src = 'dice-' + dice + '.png';

	// 3. Update the round score IF the rolled number was NOT 1
	if (dice !== 1) {
		// Add score
		roundScore += dice;
		$('#current-' + activePlayer).textContent = roundScore; 
	} else {
		//Next player
		nextPlayer();
	}
	}
});

$('.btn-hold').click(function() {
	if (gamePlaying) {
	// 1. Add a CURRENT score to a global score
	scores[activePlayer] += roundScore;

	// Update the UI
	$('#score-' + activePlayer).textContent = scores[activePlayer];
	
	// Check IF player won the game
	if (scores[activePlayer] >= 100) {
		$('#name-' + activePlayer).textContent = 'Winner!';
		$('.dice').style.display = 'none';
		$('.player-' + activePlayer + '-panel').classList.add('winner');
		$('.player-' + activePlayer + '-panel').classList.remove('active');
		gamePlaying = false;
	} else {	
		//Next player
		nextPlayer();
	}
	}
});

function nextPlayer () {
	//Next player
	activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
	roundScore = 0;
	$('#current-0').textContent = '0';
	$('#current-1').textContent = '0';
	$('.player-0-panel').classList.toggle('active');
	$('.player-1-panel').classList.toggle('active');
	$('.dice').style.display = 'none';
}

$('.btn-new').click(init); 

function init() {
	scores = [0, 0];
	activePlayer = 0;
	roundScore = 0;
	gamePlaying = true;

	document.querySelector('.dice').style.display = 'none';

	$('#score-0').textContent = '0';
	$('#score-1').textContent = '0';
	$('#current-0').textContent = '0';
	$('#current-0').textContent = '0';
	$('#name-0').textContent = 'Player 1';
	$('#name-1').textContent = 'Player 2';
	$('.player-0-panel').classList.remove('winner');
	$('.player-1-panel').classList.remove('winner');
	$('.player-0-panel').classList.remove('active');
	$('.player-1-panel').classList.remove('active');
	$('.player-0-panel').classList.add('active');
}





























			
			


