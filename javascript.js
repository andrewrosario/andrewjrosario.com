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
		window.addEventListener('keydown', actions);
	}
	element = document.getElementById(storyStep);
	element.classList.remove("hidden");
	document.getElementById("nameOutput").innerHTML = name;
	});


// MUD game

var currentRoom = 'one';
var currentHealth = 100;
var blinkingCursor = setInterval(frame, 750);
var health = document.getElementById('health');
health.innerHTML = currentHealth;

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

function updateActionLog(string) {
	var newLine = document.createElement('p');
	newLine.innerHTML = string + "<br>";
	var combat = document.getElementById('combat');
	if (combat.childNodes.length > 2) {
		combat.removeChild(combat.childNodes[0])
	}
	document.getElementById("combat").appendChild(newLine);
}

function move(key) {
	var direction = getDirection(key);
	var keys = Object.keys(rooms[currentRoom]['exits'])
	var newRoom = rooms[currentRoom]['exits'][direction[0]]
	var combat = document.getElementById('combat');
	if((keys[0] === direction[0]) || (keys[1] === direction[0])) {
		loadRoom(newRoom);
		updateActionLog(`You go ${direction}`);
		currentRoom = newRoom;
	} else {
		updateActionLog(`You cannot go ${direction}`);		
	}
};

function loadRoom(room) {
	document.getElementById("roomDescription").innerHTML = rooms[room]['desc']
}

function actions(key) {
	switch(key.which) {
		case 78:
		case 83:
		case 69:
		case 87:
			move(key);
			break;
	}
}




