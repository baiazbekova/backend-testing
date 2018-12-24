//Pages
var home    = require("../Pages/home.page.js");
var testData= require("../TestData/data.json");
var self    = require("../Pages/self.page.js");
var topNav  = require("../Pages/topNavigation.page.js");
//DB Connection
var pgp     = require('pg-promise')(/*options*/);
var queries = require("../TestData/queries.js");
var connectionString = require("../TestData/dbConnection.js");

//Expected Conditions
var EC      = protractor.ExpectedConditions;

describe('DB Connection', () => {
    var db = pgp(connectionString);
    var arr =[];
    var username='';
    var pass='';

    it('Connection String and Queries on POM same scenario', function() {
        db.any(queries.q7)
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
                browser.wait(EC.presenceOf(home.title),6000);
                
                browser.actions().mouseMove(topNav.my).perform();
                browser.wait(EC.visibilityOf(topNav.self),6000); 
                topNav.self.click();
                browser.wait(EC.presenceOf(self.updatePass),6000);

                expect(self.dataOnTable.get(0).getText()).toEqual(arr[0].firstname+ " " +arr[0].lastname);
                expect(self.dataOnTable.get(1).getText()).toEqual(arr[0].role);
                //TeamName = Query should change
               



            });
    });
        
});