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
        db.any(queries.q12)
            .then(function(result){
                arr=result;
                console.log(arr);
        
            })
            .catch(error=>{
                console.log(error);
            })
            .then(function(){
                arr.forEach(function(el){
                    
                // username=el.email;
                // pass = el.firstname.toLowerCase()+ el.lastname.toLowerCase();
                //    //console.log(username);
                //    //console.log(pass);
                   browser.get("https://cybertek-reservation-qa.herokuapp.com/");

                   home.userName.sendKeys(el.email); // Email Field
                   home.password.sendKeys(el.firstname.toLowerCase()+ el.lastname.toLowerCase()); // Password Field
                   home.signinButton.click();
                   browser.sleep(1000);
                   
                   browser.actions().mouseMove(topNav.my).perform();
                   browser.sleep(1000); 
                   topNav.self.click();
                   browser.sleep(1000);
   
                  console.log(el.firstname + el.lastname + el.role + el.name);
                    expect(self.dataOnTable.get(0).getText()).toEqual(el.firstname+ " " +el.lastname);
                    expect(self.dataOnTable.get(1).getText()).toEqual(el.role);
                    expect(self.dataOnTable.get(2).getText()).toEqual(el.teamname);
                    expect(self.dataOnTable.get(3).getText()).toEqual(el.batchnumber);
                    expect(self.dataOnTable.get(4).getText()).toEqual(el.location);

                      //Sign-out
                    browser.actions().mouseMove(topNav.my).perform();
                    browser.sleep(2000); 

                    topNav.signOut.click();
                    browser.sleep(1000);
                })
                })
    });
        
});