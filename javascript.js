var storyStep = 0
name = "friend"

// The Continue Button Functionality
document.getElementById("the_button").addEventListener("click", function() {
	element = document.getElementById(storyStep);
	element.classList.add("hidden");
	if(document.getElementById("name").value) {
		name = document.getElementById("name").value
	}
	storyStep += 1;
	if(storyStep === 3) {
		document.getElementById("the_button").classList.add("hidden")
		frame()
		window.addEventListener('keydown', move);
	}
	element = document.getElementById(storyStep);
	element.classList.remove("hidden");
	document.getElementById("nameOutput").innerHTML = name;
	});


// MUD game

currentRoom = 'one'
health = 100

var blinkingCursor = setInterval(frame, 750);

function frame() {
	cursor = document.getElementById('cursor')
    cursor.classList.toggle('blink')
}


function move(key) {
	switch(key.which) {
		case 78:
			var direction = "North";
			break;
		case 83:
			var direction = "South";
			break;
		case 69:
			var direction = "East";
			break;
		case 87:
			var direction = "West";
			break;
		default:
			var direction = "Invalid Direction"
	};
	Object.keys(rooms[currentRoom]['exits']).forEach(function(key){
		console.log(key)
		console.log(direction)
		if(key === direction[0]) {
			loadRoom(rooms[currentRoom]['exits'][direction[0]]);
			combat = document.getElementById('combat');
			combat.innerHTML = `You walk ${direction}`;
			currentRoom = rooms[currentRoom]['exits'][direction[0]];
		} else {
			combat = document.getElementById('combat');
			combat.innerHTML = `You cannot walk ${direction}`;
		}
		return;
	})


}

function loadRoom(room) {
	document.getElementById("roomDescription").innerHTML = rooms[room]['desc']
}





