var self = function(){
    
    this.name = element(by.xpath("//*[@class='title is-6'][1]"));
    this.dataOnTable = $$("app-user-card .title");
    this.updatePass = $("app-update-password-card .card-content .title ");
    //this.role = element(by.xpath("//*[@class='title is-6'][2]"));
    //this.name = $$(".title.is-6").get(1);
    //this.role = $$

}

module.exports = new self();