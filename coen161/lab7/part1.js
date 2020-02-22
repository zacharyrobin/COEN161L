(function () {
	var resources = "http://students.engr.scu.edu/~adiaztos/resources/";
	
	// Create an XMLHttpRequest object
	var xhttp = new XMLHttpRequest();
	// Handle succesful responses
	xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("sample1").innerHTML =
            this.responseText;
       }
	};
	// Get sample1.php
	xhttp.open("GET", "sample1.php", true);
    xhttp.send(); 


	// Create an XMLHttpRequest object
	var xyhttp = new XMLHttpRequest();
	// Handle succesful responses
	xyhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("sample2").innerHTML =
            this.responseText;
       }
	};
	// Get sample2.php
	xyhttp.open("GET", "sample2.php", true);
    xyhttp.send(); 

	// Create an XMLHttpRequest object
	var xyzhttp = new XMLHttpRequest();
	// Handle succesful responses
	xyzhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("sample3").innerHTML =
            this.responseText;
       }
	};
	// Get sample3.php
	xyzhttp.open("GET", "sample3.php", true);
    xyzhttp.send(); 
})();