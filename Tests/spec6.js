//Pages
var home    = require("../Pages/home.page.js");
var self    = require("../Pages/self.page.js");
var topNav  = require("../Pages/topNavigation.page.js");
//DB Connection
var pgp     = require('pg-promise')(/*options*/);
var queries = require("../TestData/queries.js");
var connectionString = require("../TestData/dbConnection.js");

var EC      = protractor.ExpectedConditions;

describe('DB Connection', () => {
    var db = pgp(connectionString);
    var arr =[];
    var username='';
    var pass='';

    it('Connection String and Queries on POM same scenario', function() {
        db.any(queries.q12)
            .then(function(result){
                arr=result;
                console.log(arr.length);
        
            })
            .catch(error=>{
                console.log(error);
            })
            .then(function(){
                arr.forEach(function(el){
                    username=el.email;
                   pass = el.firstname.toLowerCase()+ el.lastname.toLowerCase();
                   //console.log(username);
                   //console.log(pass);
                   browser.get("https://cybertek-reservation-qa.herokuapp.com/");

                   home.userName.sendKeys(username); // Email Field
                   home.password.sendKeys(pass); // Password Field
                   home.signinButton.click();
                   browser.wait(EC.presenceOf(home.title),6000);
                   
                   browser.actions().mouseMove(topNav.my).perform();
                   browser.wait(EC.visibilityOf(topNav.self),6000); 
                   topNav.self.click();
                   browser.wait(EC.presenceOf(self.updatePass),6000);
   
                  
                   expect(self.dataOnTable.get(0).getText()).toEqual(el.firstname+ "" +el.lastname);
                   expect(self.dataOnTable.get(1).getText()).toEqual(el.role+"l");
                   expect(self.dataOnTable.get(2).getText()).toEqual(el.teamname+"l");
                   expect(self.dataOnTable.get(3).getText()).toEqual("#" + el.batchnumber+"l");
                   expect(self.dataOnTable.get(4).getText()).toEqual(el.location+"l");

                      //Sign-out
                    browser.actions().mouseMove(topNav.my).perform();
                    browser.wait(EC.visibilityOf(topNav.self),6000); 


                    topNav.signOut.click();
                    //browser.sleep(1000);
                })
                })
    });
        
});