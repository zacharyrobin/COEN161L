const fs = require('fs');

exports.handleTodoList = function(req, res, session) {
  switch(req.method) {
    case "GET":
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify([]));
      break;
    case "POST":
      res.writeHead(200, 'OK');
      res.end();
      break;
    default:
      res.writeHead(405, {'Allow': 'GET, POST'});
      res.end("Not Allowed");
  }
};

/*
  converts the HTTP POST request body into a JSON object
*/
function convertRequest(req, callback) {
  let data = "";
  req.on('data', chunk => {
    data += chunk.toString();
  });
  req.on('end', () => {
    callback(JSON.parse(data));
  });
}