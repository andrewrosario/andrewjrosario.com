
	var rooms = {
		"one": {
			desc: "Entrance to the Enterprise<br><br>As you slowly open your eyes, you find yourself in a large, poorly-lit room on the starship Enterprise. Overhead, a harsh strobe light flashes on and off, revealing your surroundings one second at a time. Grimy metal walls with exposed electrical pipes, strange slimy mold puddles on the floor, and an acrid smell permeates the air. Dazed, you shake off your stupor, and attempt to figure out what’s going on. A small corridor opens up in front of you. Looking to the left, you notice another hallway, more brightly lit than the one to your north. Behind you, a large metal door blocks the way. <br><br>You may travel (N)orth or (W)est</p>",
			exits: {'N': "two", 
					"W": "four"}
		},
		"two": {
			desc: "You find yourself in a well-lit room, the light provided by a black metal five-foot-tall floor lamp with a black lamp shade and a 50 watt halogen bulb. There is dust all over the shiny chrome base of the lamp, and the cord has a slight cut in the insulation approximately 5 inches from the wall outlet.<br><br>You may travel (S)outh or (W)est</p>",
			exits: {"S": "one", 
					"W": "three"}
		},
		"three": {
			desc: "You are standing in a small corner room. A floor lamp in the corner has been turned on and is providing enough light for you to see your surroundings.<br><br>You may travel (S)outh or (E)ast</p>",
			exits: {"S": "four",
				 	"E": "two"}
		},
		"four": {
			desc: "The beautiful view through your window is suddenly shattered by a piercing demonic scream from just outside your door! It’s 50 degrees in Kahlia right now, and Sparta is at war with Athens. You can use a rusty nail to pierce the voodoo doll and gain 5000 experience points. My Nissan is white, and it’s pretty fast.<br><br>You may travel (N)orth or (E)ast</p>",
			exits: {"N": "three",
			 		"E": "one"}
		}
	}