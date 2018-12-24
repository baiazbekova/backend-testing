//Pages
var home    = require("../Pages/home.page.js");
var testData= require("../TestData/data.json");

//DB Connection
var pgp     = require('pg-promise')(/*options*/);

describe('Login with DB Connection', () => {
    
    var connectionString = {
    host:'room-reservation-qa.cxvqfpt4mc2y.us-east-1.rds.amazonaws.com',
    port:5432,
    database:'room_reservation_qa',
    user:'qa_user',
    password:'Cybertek11!'
};

    var db = pgp(connectionString);
    var arr =[];
    var username='';
    var pass='';

    it('Test Case 3- Login to the Website with DB Connection', function() {
        //Pre-test trials
        
        //Show all the users
        //     db.any(`SELECT * FROM USERS`)
        //         .then(function(result){
        //             arr=result;
        //         })
        //         .catch(error=>{
        //             console.log(error);
        //         })
        //         .then(function(){
        //         console.log(arr);
        //         });
        
        // //SHOW ALL THE TEAMS
        //     db.any(`SELECT * FROM TEAM`)
        //         .then(function(result){
        //             arr=result;
        //         })
        //         .catch(error=>{
        //             console.log(error);
        //         })
        //         .then(function(){
        //             console.log(arr);
        //         });
        
        // //SHOW EMAIL, FIRSTNAME, LASTNAME, role TEAM NAME (TASK)

        //     db.any(`SELECT firstname, lastname, role, name as teamname
        //     from users u join team t
        //     on u.team_id = t.id;`)
        //     .then(function(result){
        //         arr=result;
        //     })
        //     .catch(error=>{
        //         console.log(error);
        //     })
        //     .then(function(){
        //         console.log(arr);
        //     });

            // Fetch the data from database

            db.any(`SELECT firstname, lastname, email
            from users where email='cbrose86@cbslocal.com';`)
            .then(function(result){
                //arr=result;
                username = result[0].email;
                pass = result[0].firstname.toLowerCase()+ result[0].lastname.toLowerCase();
            })
            .catch(error=>{
                console.log(error);
            })
            .then(function(){
                console.log(username);
                console.log(pass);
                browser.get("https://cybertek-reservation-qa.herokuapp.com/");

                home.userName.sendKeys(username); // Email Field
                home.password.sendKeys(pass); // Password Field
                home.signinButton.click();
                browser.sleep(2000);
                expect(home.title.getText()).toEqual("VA");
            });




        
    });
        
});