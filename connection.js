// import the mysql module form improts

const {mySQL} = require('./improts.js');

// creating connection to the db

const connection = mySQL.createConnection({
    host: 'localhost',
    user: 'techTrai',
    password: 'techTrai123',
    database: 'techtrailblazers'
 });

 //checking connection status

 connection.connect((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log('connection succesfull');
    }
 });

 //exporting connection module
 module.exports = {connection};