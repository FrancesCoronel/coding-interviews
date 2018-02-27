function montyHall(n) {
	// n runs the monty hall problem n times
	var change_door_wins = 0;
	var change_door_losses = 0;
	var same_door_wins = 0;
	var same_door_losses = 0;
	for(var i=0;i<n;i++) {
		var doors = [0,0,0];
		var random_door = Math.floor((Math.random() * 3) + 1);
		doors[random_door-1] = 1;
		var chosen_door = Math.floor((Math.random() * 3) + 1);
		if(doors[chosen_door-1] == 1) {
			change_door_losses += 1;
			same_door_wins += 1;
		}
		else {
			change_door_wins += 1;
			same_door_losses += 1;
		}
	}
	console.log(
	'choosing the same door yields a ', 
	same_door_wins/10, 
	'% win and ',
	same_door_losses/10,
	'% loss rate'
	);

	console.log(
	'choosing a different door yields a ', 
	change_door_wins/10, 
	'% win and ',
	change_door_losses/10,
	'% loss rate'
	);

}

montyHall(1000);