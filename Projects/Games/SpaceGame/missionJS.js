var s = document.createElement("select");

function createOption(t, i){
	var o = document.createElement("option");
	o.innerHTML = t;
	o.setAttribute("value", i)
	return o;
}

for(var i = 1; i < Object.keys(ships).length+1; i++){
	s.append(createOption("Ship " + String(i), i));
}
var hangar = document.getElementById("currentTrade");
hangar.append(s);