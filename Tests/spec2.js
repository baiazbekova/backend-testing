//Pages
var home    = require("../Pages/home.page.js");
var testData= require("../TestData/data.json");

describe('POM and TestData', () => {
    
    it('Test Case 2- Login to the Website with POM & TestData', function() {
        browser.get("https://cybertek-reservation-qa.herokuapp.com/");
        home.userName.sendKeys(testData.username); // Email Field
        home.password.sendKeys(testData.password); // Password Field
        home.signinButton.click();
        browser.sleep(2000);
        expect(home.title.getText()).toEqual("VA");
    });
        
});