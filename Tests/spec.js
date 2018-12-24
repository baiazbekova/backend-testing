//Pages
var home    = require("../Pages/home.page.js");
var dark    = require("../Pages/darkSideMap.page.js");
var light   = require("../Pages/lightSideMap.page.js");
var topNav  = require("../Pages/topNavigation.page.js");
var self    = require("../Pages/me.page.js");

//dbConnection & Queries

var cn      = require("../TestData/dbConnection.js");
var pgp     = require('pg-promise')(/*options*/);
var queries = require("../TestData/queries.js");


// var cn = {
//     host:'room-reservation-qa.cxvqfpt4mc2y.us-east-1.rds.amazonaws.com',
//     port:5432,
//     database:'room_reservation_qa',
//     user:'qa_user',
//     password:'Cybertek11!'
// };

//var email='cbrose86@cbslocal.com';
var pass='';
// var query1=`select * from users`;
// var query2=`select firstname,lastname,email from users where email = 'cbrose86@cbslocal.com'`;
// var query3=`select * from users where role ='student-team-leader' AND campus_id='1' `;

var username ='';
var db=pgp(cn);
var arr=[];
var resultOut='';

// front inputbox submit.giris db ye frontendden
//one

//db.any(query1)
  //  .then(result=>{
    //    console.log(result);
        //arr = result;
   // })
    //.catch(error=>{
   //     console.log(error);
   // })//.then(function(){
        //arr.forEach(function(el){
        //    console.log(el);
        //})
    //})

    

describe('Reservation Application', function() {
    it('user should be able to login', () => {
        
    });
    
    it('user info should match the db records', function() {
        db.any(queries.q4)
            .then(function(result){
                arr=result;
            })
            .catch(error=>{
                console.log(error);
        }).then(function(){
            console.log(arr);
        });


    });

    it('user info should match the db records', function() {
        db.any(queries.q5)
            .then(function(result){
                arr=result;
            })
            .catch(error=>{
                console.log(error);
        }).then(function(){
            
            console.log(arr);
        });




    });

    it('user info should match the db records', function() {
        db.any(queries.q1)
            .then(function(result){
                arr=result;
            })
            .catch(error=>{
                console.log(error);
        }).then(function(){
            console.log(arr.length);
        });


    });

        
    
    
    
    
    fit('should login to the page', () => {
        db.any(queries.q6)
    .then(result=>{
        arr=result;
        //username = result[0].email;
        //pass = result[0].firstname.toLowerCase()+ result[0].lastname.toLowerCase();
        //arr = result;
    })
    .catch(error=>{
        console.log(error);
    }).then(function(){
       arr.forEach(el => {
           username=el.email;
           pass = el.firstname.toLowerCase()+ el.lastname.toLowerCase();
           //var name = el.firstname;
           //var lastName = el.lastname;
            //console.log(pass);
            //console.log(username);
        browser.get("https://cybertek-reservation-qa.herokuapp.com/");
       
            //Sign in to page
        home.userName.sendKeys(username);
        home.password.sendKeys(pass);
        home.signinButton.click();
        browser.sleep(4000);
        browser.actions().mouseMove(topNav.my).perform();
        browser.sleep(1000); 
        topNav.self.click();
        
        //element(by.linkText("map")).click();
        browser.sleep(4000);
        
        // I'm at self page now...

       
            //expect(self.name.getText()).toEqual(el.firstname+ " " +el.lastname);
        
            //expect(self.dataOnTable.get(0).getText()).toEqual(el.firstname+el.lastname);
        for(let i=0; i<5; i++){

            self.dataOnTable.get(i).getText().then(function(data){
                console.log(data)
            })
        }
        expect(self.dataOnTable.get(0).getText()).toEqual(el.firstname+ " " +el.lastname);
        expect(self.dataOnTable.get(1).getText()).toEqual(el.role);
        expect(self.dataOnTable.get(2).getText()).toEqual(el.team_id);//what happened
        //lets create join query
        //expect(self.dataOnTable.get(2).getText()).toEqual(el.team_name);



        // self.name.get(1).getText().then(function(data){
        //     console.log(data);
        // })



        







        // browser.actions().mouseMove(element(by.linkText("schedule"))).perform();
        // browser.sleep(4000);

        // //element(by.linkText("harvard")).click();
        // browser.sleep(10000); 
        browser.actions().mouseMove(topNav.my).perform();
        browser.sleep(4000); 

        topNav.signOut.click();
        browser.sleep(2000);


       });
       
       
       
       
    })
        

//Let's try this comment here

    });
});
    