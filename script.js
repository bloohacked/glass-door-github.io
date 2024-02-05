var textbox = document.getElementById("textbox");
var text;
var inglassdoor = 0;
textbox.addEventListener("keyup",
	function(event) {
		if (!event) {
			var event = window.event;
		}
		event.preventDefault();
		if (event.keyCode == 13) {
			word();
		}
	}, false);

function word() {
	text = "" + textbox.value;
	if (Word_List.isInList(text)) {
		for (let i = 1; i < text.length; i++) {
			if (text[i - 1] == text[i]) {
				alert("that in glass door");
				inglassdoor = 1;
				break;
			}
		}
		if (inglassdoor == 0) {
			alert("that not in glass door");
		}
		inglassdoor = 0;
	} else {
		alert("that's not a real word...")
	}
}