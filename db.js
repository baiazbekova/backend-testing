var pgp = require('pg-promise')(/*options*/);

var cn = {
    host:'localhost',
    port:5433,
    database:'halpdesk',
    user:'postgres',
    password:'abc'
};

var db=pgp(cn);
var arr=[];

// front inoutbox submit.giris db ye frontendden
//one

db.any(`INSERT INTO tickets (${first_name}) values ('Eric')`)
    .then(result=>{
        console.log(result)
    })
    .catch(error=>{
        console.log(error);
    })


