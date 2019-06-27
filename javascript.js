var storyStep = 0
name = "friend"
document.getElementById("the_button").addEventListener("click", function() {
	element = document.getElementById(storyStep);
	element.classList.add("hidden");
	if(document.getElementById("name").value) {
		name = document.getElementById("name").value
	}
	console.log(name)
	storyStep += 1;
	console.log(storyStep)
	element = document.getElementById(storyStep);
	element.classList.remove("hidden");
	document.getElementById("nameOutput").innerHTML = name;

})

console.log(typeof storyStep)


