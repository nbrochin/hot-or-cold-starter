
$(document).ready(function(){

	 function genRandnum(){

		 return Math.floor(Math.random()* 100 ) + 1;
		}
		var randNum = genRandnum();
		var counter = 1;

	$('#guessButton').click(function(){
			event.preventDefault();

    //no empty fields
		var guess = $('#userGuess').val();
		var originalGuess = guess;
		$('#userGuess').val('');
		guess = parseInt(guess);
		console.log('Secret Random Number is ' + randNum +'.');

        //add guesses to list
			if( 1 <= guess && guess <= 100 && Number.isInteger(originalGuess)) {
				$('#guessList').append("<li>"+guess+"</li>");
				console.log(guess);
        // viewing number of guesses
				$('#count').html(counter++);
				var spread =  Math.abs(randNum - guess);

				// hot and cold logic
				console.log(spread);
				if(spread >=60){
					$('#feedback').text("polar tundra, ninny.");
				}
				else if(spread >= 40){
					$('#feedback').text("january in Milwaulkee. my face hurts.");
				}
				else if(spread >=25){
					$('#feedback').replaceWith("<h2 id='feedback'>march in London. little chilly.</h2>");
				}
				else if(spread >=17){
					$('#feedback').replaceWith("<h2 id='feedback'>may in Boston. nice breeze.</h2>");
				}
				else if(spread >=10){
					$('#feedback').replaceWith("<h2 id='feedback'>june in Miami. little too warm.</h2>");
				}
				else if(spread >=3){
					$('#feedback').replaceWith("<h2 id='feedback'>july in Baton Rouge. heat stroke.</h2>");
				}
				else if(spread === 0){
					$('#feedback').replaceWith("<h2 id='feedback'>winner. winner. chicken dinner!!</h2>");
				}

			}
			else{
				alert('Please enter a number between 1 and 100');
			}
		});

		$('.new').click(function(){
					$('h2#feedback').replaceWith("<h2 id='feedback'>i am thinking of a number between 1 and 100. Can you guess it?</h2");
					$('#guessList').html('');
					$('#userGuess').val('');
					$('#count').replaceWith("<span id='count'>0</span>");

    			counter = 1;

		//generate random number, again; otherwise it get's stuck
					randNum = genRandnum();
					console.log('new number that will be replaced ' + randNum);

			});

	/*--- Display information modal box ---*/
 	$(".what").click(function(){
   	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
	});

});
