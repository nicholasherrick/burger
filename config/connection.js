const mysql = require('mysql');
// const dotenv = require('dotenv');

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    // Put your mysql password here:
    password: "password",
    database: "burgers_db"
});

connection.connect((err) =>{
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
});
  

module.exports = connection;