var pgp = require('pg-promise')(/*options*/);

describe('Name of the group', () => {
    
    
  
        
});
var cn = {
    host:'localhost',
    port:5433,
    database:'dvdrental',
    user:'postgres',
    password:'abc'
};

var db=pgp(cn);
var arr=[];

// front inoutbox submit.giris db ye frontendden
//one
it('', function() {
    browser.waitForAngularEnabled(false);
    browser.get("http://www.amazon.com");
    
    db.any(`select title from film where title like 'Z%'`)
    .then(result=>{
        arr=result;
    })
    .catch(error=>{
        console.log(error);
    }).then(()=>{
        arr.forEach(el => {
            element(by.id(id="twotabsearchtextbox")).sendKeys(el);
            browser.sleep(2000);
            element(by.css("#nav-search > form > div.nav-right > div > input")).click();
            browser.sleep(2000);
            browser.navigate().back();
            

        });


    })

});
