$(document).ready(function(){

	//Listen to the form for a submit event
	$('#movie-poll').submit(function( event ){
		
		//Stop the form from submitting 
		event.preventDefault();

		//Find the checked option
		var vote = $('[name=vote]:checked').val();

		var message = 

		//Make sure the vote is valid 
		// if(vote == undefined) {
			//Display an error message
		// 	$('#message').html('Please select your vote');

		// } else {
		// 	$('#message').html('');
		// }

		$('#message').html( vote == undefined ? 'Please select your vote' : '');

		if (vote == undefined ) return;

		//AJAX
		$.ajax({

			url: 'api/poll.php',
			data: {
				vote: vote
			},
			success: function( dataFromServer ) {
				console.log( dataFromServer );
			},
			error: function() {
				$('#message').html('Sorry, try again later');
			}

		});

	});

});