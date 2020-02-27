(function() {
    var template = document.getElementById("template");

    // remove template from the page, since it is only a template
    var parent = template.parentNode;
    parent.removeChild(template);

    // Create an XMLHttpRequest object
    var xhttp = new XMLHttpRequest();
    // Set onreadystatechange
    xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                populateContacts(JSON.parse(this.responseText));
            }
        }
        // Open and send requests
    xhttp.open("GET", "http://students.engr.scu.edu/~adiaztos/resources/contacts.php", true);
    xhttp.send();

    // This function takes the list of contacts and clones a new element from the template with the value of each contact
    function populateContacts(contacts) {
        for (var i = 1; i < contacts.length + 1; i++) {
            //cloning templaet
            var node = template.cloneNode(true);

            //update the number for the contact.
            node.id = contacts[i - 1].id;

            //replace id with unique id 
            node.innerHTML = node.innerHTML.replace("1", i);
            node.innerHTML = node.innerHTML.replace(/index/g, i + node.id);

            //set the name and email.
            node.innerHTML = node.innerHTML.replace('name="name"', 'value="' + contacts[i - 1].name + '" name="name"');
            node.innerHTML = node.innerHTML.replace('name="email"', 'value="' + contacts[i - 1].email + '" name="email"');

            //append
            parent.appendChild(node);
        }
    }

    // submits a request with the search query for the filtered list of contacts
    function search() {
        // clear the current contacts list
        while (parent.lastChild)
            parent.removeChild(parent.lastChild);

        // POST method
        xhttp.open("POST", "http://students.engr.scu.edu/~adiaztos/resources/contacts.php" + "?query=" + document.getElementById("searchField").value, true);
        xhttp.send();


    }

    // assign the search function as the click handler for search button
    $("button").on("click", function() { search(); });
})();