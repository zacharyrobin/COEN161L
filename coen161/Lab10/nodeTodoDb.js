const mysql = require('mysql');

// fill in your db credentials
const config = {
  host: "dbserver.engr.scu.edu",
  user: "zrobin",
  password: "Password1",
  database: "sdb_"
};

// Adding
exports.addTodo = function (sessionId, todo, callback) {
  const con = mysql.createConnection(config);
  con.connect(function(err) 
  {   // con.connect() is called 
    if (err) 
    {
      return callback(err);
    }
    console.log("Connection successful");
    var sql = "INSERT INTO Todos (description, sessionId) VALUES (?,?);";
    con.query(sql, [todo,sessionId], function(err, result) 
    {
      if (err){
        throw err;
      }
      con.end();
    });

  });

};

// Getting
exports.getTodos = function (sessionId, callback) {
  const con = mysql.createConnection(config);
  con.connect(function(err) 
  {   // con.connect() is called 
    if (err) 
    {
      return callback(err);
    }
    console.log("Connection successful");
    var sql = "SELECT * FROM Todos WHERE sessionId = ?;"
    con.query(sql,[sessionId], function(err, result) 
    {
      if (err) 
      {
        throw err;
      }
      con.end();
    });
  });
};