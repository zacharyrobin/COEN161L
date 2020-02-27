(function() {
    var resources = "http://students.engr.scu.edu/~adiaztos/resources/";

    // Load sample1.php
    $("#sample1").load(resources + "sample1.php");

    // Load sample2.php
    $("#sample2").load(resources + "sample2.php");

    // Get sample3.php and create friends list
    $.get(resources + "sample3.php", function(data) {
        var response = JSON.parse(data);
        var unorderedlList = $("<ul></ul>");
        $("#sample3").append(unorderedlList);

        for (var i = 0; i < response.friends.length; i++) {
            unorderedlList.append($("<li></li>").text(response.friends[i].name));
        }
    });


})();