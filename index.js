//import api from improts module

const {api} = require('./improts.js');

//import connection from connection module
const {connection} = require('./connection.js');



 
//creating route for the API with end point `/APIs/Reviews`
api.get('/APIs/Reviews',(req,res) => {

    // executing query to select users reviews from the database
    connection.query('SELECT users.Name As Name, testimonials.Testimony As Review, testimonials.Likes,testimonials.Dislikes FROM testimonials INNER JOIN users ON testimonials.Ucode = users.Ucode', (error, result) => {
        
        //checking for a 500 status error (bad query)
        if(error){
          console.log(error);
          res.status(500).json({error: 'oops!! something went wrong'});
        }else{
          res.json(result);
          
        }
    });

   
});


// Event listener for the route
const port = process.env.PORT || 3000;
api.listen(port,() => {
    console.log("everything good");
})