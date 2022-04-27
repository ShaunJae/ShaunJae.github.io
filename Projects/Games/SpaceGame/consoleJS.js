var commands = {
	"ship": {
		"rename": renameShip
	}
}

function renameShip(string){
	console.log(string);
}

function consoleSubmit(){
	var input = document.getElementById("consoleInputField").value;
}

function parseCommand(command){
	var parts = command.split(" ");
	var partsLength = parts.length;
	var baseCommands = Object.keys(commands);
	if(partsLength > 1 && baseCommands.includes(parts[0])){
		var commandCommands = Object.keys(commands[parts[0]]);
		if(partsLength > 2 && commandCommands.includes(parts[1])){
			commands[parts[0]][parts[1]]("Parsing successful");
		}
	}
}
commands["ship"]["rename"]("hi!")