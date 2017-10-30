var computerChoice = Math.floor(Math.random()*(120 - 19 + 1) + 19);
var winCount = 0;
var loseCount = 0;
var purpleChoice = Math.floor(Math.random()*(12 - 1 + 1) + 1);
var blueChoice = Math.floor(Math.random()*(12 - 1 + 1) + 1);
var redChoice = Math.floor(Math.random()*(12 - 1 + 1) + 1);
var greenChoice = Math.floor(Math.random()*(12 - 1 + 1) + 1);
var userTotalScore = 0;
function shuffleCrystalValues(){
	purpleChoice = Math.floor(Math.random()*(12 - 1 + 1) + 1);
	blueChoice = Math.floor(Math.random()*(12 - 1 + 1) + 1);
	redChoice = Math.floor(Math.random()*(12 - 1 + 1) + 1);
	greenChoice = Math.floor(Math.random()*(12 - 1 + 1) + 1);
}


function gamePlay(){
	if(userTotalScore === computerChoice){
		winCount++;
		$('#win-counter').text(winCount);
		$('#win-or-lose').text('You win!');
		computerChoice = Math.floor(Math.random()*(120 - 19 + 1) + 19);
		$('#random-number').text(computerChoice);
		userTotalScore = 0;
		$('#current-score-counter').text(userTotalScore);
		shuffleCrystalValues();
	} else if(userTotalScore > computerChoice){
		loseCount++;
		$('#loss-counter').html(loseCount);
		$('#win-or-lose').text('You lose!');
		computerChoice = Math.floor(Math.random()*(120 - 19 + 1) + 19);
		$('#random-number').text(computerChoice);
		userTotalScore = 0;
		$('#current-score-counter').text(userTotalScore);
		shuffleCrystalValues();
	}
}



$('#random-number').text(computerChoice);



$('#purple').on('click', function(){
	userTotalScore += purpleChoice;
	$('#current-score-counter').text(userTotalScore);
	gamePlay();
});


$('#blue').on('click', function(){
	userTotalScore += blueChoice;
	$('#current-score-counter').text(userTotalScore);
	gamePlay();
});


$('#red').on('click', function(){
	userTotalScore += redChoice;
	$('#current-score-counter').text(userTotalScore);
	gamePlay();
});


$('#green').on('click', function(){
	userTotalScore += greenChoice;
	$('#current-score-counter').text(userTotalScore);
	gamePlay();
});















