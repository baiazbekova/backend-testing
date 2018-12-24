var topNav = function(){
    
    this.my = element(by.linkText("my"));//$$(".navbar-link");//
    this.self = element(by.linkText("self"));
    this.map = element(by.linkText("map"));
    this.schedule = element(by.linkText("schedule"));
    this.general = element(by.linkText("general"));
    this.signOut = element(by.linkText("sign out"));
    this.team = element(by.linkText("team"));
}

module.exports = new topNav();