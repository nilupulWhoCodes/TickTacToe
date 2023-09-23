let cells = document.querySelectorAll('.cell');
let currentPlayer = 'X';
let xPlayer = [];
let oPlayer = [];

let combos = [
	[0,1,2],[3,4,5],[6,7,8],
	[0,3,6],[1,4,7],[2,5,8],
	[0,4,8],[2,4,6]
];

function click() {
	

cells.forEach(cell =>cell.addEventListener('click', function () {
	
	cell.textContent = currentPlayer;

	if (currentPlayer === 'X') {
		currentPlayer = 'O';
		xPlayer.push(cell.id);

	} else {
		currentPlayer = 'X';
		oPlayer.push(cell.id);
	}


	if (xPlayer.length >= 3) {
		
		combos.forEach(combo => {
			result = combo.every(item => xPlayer.includes(item.toString()));
			
			if (result) {
				alert('Player 1 wins');
			}
		});
	}

	if (oPlayer.length >= 3) {
		combos.forEach(combo => {
			result = combo.every(item => oPlayer.includes(item.toString()));
			if (result) {
				alert('Player 2 wins');
			}
		});
	}




	
	

}));

}

console.log(click());