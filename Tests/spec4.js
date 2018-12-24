//Pages
var home    = require("../Pages/home.page.js");
var testData= require("../TestData/data.json");


//DB Connection
var pgp     = require('pg-promise')(/*options*/);
var queries = require("../TestData/queries.js");
var connectionString = require("../TestData/dbConnection.js");


describe('DB Connection', () => {
    var db = pgp(connectionString);
    var arr =[];
    var username='';
    var pass='';

    it('Connection String and Queries on POM same scenario', function() {
        db.any(queries.q7)
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