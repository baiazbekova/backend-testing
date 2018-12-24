//Pages
var home    = require("../Pages/home.page.js");
var testData= require("../TestData/data.json");
var self    = require("../Pages/self.page.js");
var topNav  = require("../Pages/topNavigation.page.js");
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
        db.any(queries.q11)
            .then(function(result){
                arr=result;
                username = result[0].email;
                pass = result[0].firstname.toLowerCase()+ result[0].lastname.toLowerCase(); // String Manupilation
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
                
                browser.actions().mouseMove(topNav.my).perform();
                browser.sleep(1000); 
                topNav.self.click();
                browser.sleep(3000);
                console.log(arr[0].firstname + arr[0].lastname + arr[0].name  )
                //expect(self.dataOnTable.get(0).getText()).toEqual(arr[0].firstname+ "" +arr[0].lastname);
                //expect(self.dataOnTable.get(1).getText()).toEqual(arr[0].role+"l");
                //expect(self.dataOnTable.get(2).getText()).toEqual(arr[0].name+"l");

                //TeamName = Query should change
               



            });
    });
        
});