const fs = require('fs');

exports.handleTodoList = function(req, res, session) {
  switch(req.method) {
    case "GET":
      // get session data from storage
      fs.readFile("./sessions/" + session.id, function(err, data) {
        if(err) session.todoList = [];
        else    session.todoList = JSON.parse(data).todoList;

        res.writeHead(200, {'Content-Type': 'application/json'});
        if(session.todoList === undefined || session.todoList.length === 0)
          res.end(JSON.stringify([]));
        else {
          var mylist = [];
          for(let i = 0; i < session.todoList.length; i++)
            mylist.push({id: i, description: session.todoList[i]});
          res.end(JSON.stringify(mylist));
        }
      }); // END: fs.readFile()

      break;
    case "POST":
      // if no todoList, create one
      if(session.todoList === undefined) {
        session.todoList = [];
      }
      convertRequest(req, function(data) {
        session.todoList.push(data.todo);

        // write session data to storage
        fs.writeFile("./sessions/" + session.id, JSON.stringify(session), function(err) {
          if(err) {
            res.writeHead(500, {"Content-Type": "text/html"});
            return res.end("500 Internal Server Error");
          }
 // this should be in the callback function because JS is asynchronous
          // if left this outside (i.e. after fs.writeFile()), response may be
          // OKed before writing is done
          res.writeHead(200, 'OK');
          res.end();
        }); // END: fs.writeFile()
      }); // END: convertRequest()

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
