
describe('Backend Testing', function() {
    
    it('Test Case 1-Login to the Website (Hard Coded)', function() {
        browser.get("https://cybertek-reservation-qa.herokuapp.com/");
        $('[name="email"]').sendKeys("efewtrell8c@craigslist.org"); // Email Field
        $('[name="password"]').sendKeys("jamesmay"); // Password Field
        element(by.buttonText("sign in")).click();
        browser.sleep(2000);
        expect(element(by.css(".title")).getText()).toEqual("VA");

    });
        
});
    