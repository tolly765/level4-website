var list = document.createElement('ul');
var info = document.createElement('p');
var html = document.querySelector('html');

info.textContent = "Here's a list. Click the button for a new entry.";
document.body.appendChild(info);
document.body.appendChild(list);

function listFunction() {
	var listItem = document.createElement('li');
	var listContent = prompt("What'chu want in here?");
	listItem.textContent = listContent;
	list.appendChild(listItem);
}
html.onClick = function(e) {	
	listItem.onClick = function(e) {
		e.stopPropagation();
		var listContent = prompt('Enter new content to replace the old list item');
		this.textContent = listContent;
		}
}
