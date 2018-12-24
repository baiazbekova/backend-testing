var homePage = function(){
    
    this.userName       = $('[name="email"]');
    this.password       = $('[name="password"]');
    this.signinButton   = element(by.buttonText("sign in"));
    this.title          = element(by.css("app-hero-body .title"));
    //this.my = $$(".navbar-link");//element(by.linkText("my"));
    //this.self = element(by.linkText("self"));
}

module.exports = new homePage();