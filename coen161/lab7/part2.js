(function () {
	var template = document.getElementById("template");

	// remove template from the page, since it is only a template
	var parent = template.parentNode;
	parent.removeChild(template);

	// Create an XMLHttpRequest object
	var xhttp = new XMLHttpRequest();
	// Set onreadystatechange
	xhttp.onreadystatechange = function(){
		if (this.readyState == 4 && this.status == 200)
			populateContacts(JSON.parse(this.responseText));
	}
	// Open and send requests
	var resources = "http://students.engr.scu.edu/~adiaztos/resources/";
	xhttp.open("GET", resources + "contacts.php", true);
	xhttp.send();

	// This function takes the list of contacts and clones a new element from the template with the value of each contact
	function populateContacts(contacts) {
		for (var i = 1; i < contacts.length + 1; i++){
			
			// cloning template node
			var node = template.cloneNode(true);

			// setting the node id to contact id since contacts begin at 0
			node.id = contacts[i-1].id;

			// replacing inner html
			var string = node.innerHTML.replace("1", i);
			node.innerHTML = string;
			
			// index span replaced by contact id 
			var string2 = node.innerHTML.replace(/index/g, i + node.id);
			node.innerHTML = string2;

			// replacing value with contact name and email 
			var string3 = node.innerHTML.replace('name="name"', 'value="' + contacts[i-1].name + '" name="name"');
			node.innerHTML = string3;
			var string4 = node.innerHTML.replace('name="email"', 'value="' + contacts[i-1].email + '" name="email"');
			node.innerHTML = string4;
			
			// appending node 
			parent.appendChild(node);
		}
	}

	// submits a request with the search query for the filtered list of contacts
	function search() {
		// clear the current contacts list
		while (parent.lastChild)
			parent.removeChild(parent.lastChild);
		// query to contacts.php 
		http.open("POST", resources + "contacts.php?query=" + document.getElementById("searchField").value, true);
		http.send();	
	}

	// assign the search function as the click handler for search button
	$("button").on("click", function(){
		search();
	});
})();