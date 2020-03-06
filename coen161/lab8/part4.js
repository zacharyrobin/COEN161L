var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
    //Open a file on the server and return its content:
    fs.readFile('part4.html', function(err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });

        fs.appendFile('part4.html', ' This is some text I added to the file', function(err) {
            if (err) throw err;
            console.log('Updated!');
        });
        res.write(data);
        return res.end();
    });
}).listen(3000);