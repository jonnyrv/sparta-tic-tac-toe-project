$(document).ready(function() {

	var checkTurn = true;
	var winningConditions = [
		[0,1,2],
		[3,4,5],
		[6,7,8],
		[0,3,6],
		[1,4,7],
		[2,5,8],
		[2,4,6],
		[0,4,8]
	]

	var player1 = [];
	var player2 = [];

	/* Function for when you click it .... */ 

	$("td").click(function(){
		if (checkTurn) {
			$.fn.writeOnBoard($(this), "X", "O");
			checkTurn = false;

		}else{
			$.fn.writeOnBoard($(this), "O", "X");
			checkTurn = true;
		}	
	}) 

	$("#reset").click(function(){
		$("td").html(" ");
	})

	$.fn.writeOnBoard = function (domElement, symbol, text) {
			var numbers = domElement.attr("data-num");

			if(checkTurn){
				$.fn.addToPlayerScore(player1, numbers);
			}else{
				$.fn.addToPlayerScore(player2, numbers);
			}

			// $.fn.addToPlayerScore(player1, numbers);
			$("[data-num = " + numbers + "]").html(symbol);
			$(".playerTurn").html("It is " + text + "'s turn");
	}

	$.fn.addToPlayerScore = function (playerName, position){
		playerName.push(position);
		// Sort the Array 
		playerName.sort(function(a,b){
			return a - b
		})

		for (var i = 0; i < winningConditions.length; i++) {

				if(Array.prototype.equals)
				    console.warn("Overriding existing Array.prototype.equals. Possible causes: New API defines the method, there's a framework conflict or you've got double inclusions in your code.");
				Array.prototype.equals = function (array) {
				    if (!array)
				        return false;
				    // compare lengths
				    if (this.length != array.length)
				        return false;
				    for (var i = 0, l=this.length; i < l; i++) {
				        if (this[i] instanceof Array && array[i] instanceof Array) {
				            if (!this[i].equals(array[i]))
				                return false;       
				        }           
				        else if (this[i] != array[i]) { 
				            return false;   
				        }           
				    }       
				    return true;
				}
				Object.defineProperty(Array.prototype, "equals", {enumerable: false}); 

				if(playerName.equals(winningConditions[i])){
					alert("You Won");
				}

			
		}
	}

})



