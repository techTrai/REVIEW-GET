// import the mysql module form improts

const {mySQL} = require('./improts.js');

// creating connection to the db

const connection = mySQL.createConnection({
    host: 'sql307.infinityfree.com',
    user: 'if0_35357402',
    password: '0CXtfjQekD',
    database: 'if0_35357402_TechTrailBlazers'
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
