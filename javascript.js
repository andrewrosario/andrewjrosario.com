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

function getDirection(key) {
	switch(key.which) {
		case 78:
			return "North";
		case 83:
			return "South";
		case 69:
			return "East";
		case 87:
			return "West";
		default:
			return "Invalid Direction"
	};
}

function move(key) {
	var direction = getDirection(key);
	var keys = Object.keys(rooms[currentRoom]['exits'])
	var newRoom = rooms[currentRoom]['exits'][direction[0]]
	var combat = document.getElementById('combat');
	
	for(const prop in keys) {
  		console.log(`keys.${prop} = ${keys[prop]}`);
		if(keys[prop] === direction[0]) {
			loadRoom(newRoom);
			combat.innerHTML = `You walk ${direction}`;
			currentRoom = newRoom;
			break;
		} else {
			combat.innerHTML = `You cannot walk ${direction}`;
		}
	}
}

function loadRoom(room) {
	document.getElementById("roomDescription").innerHTML = rooms[room]['desc']
}





