var queries = function(){

    this.q1 = `select * from users`;
    this.q2 = `select firstname,lastname,email from users where email = 'cbrose86@cbslocal.com'`;
    this.q3 = `select * from users where role ='student-team-leader' AND campus_id='1' `;
    this.q4 = `select * from users where email= 'efewtrell8c@craigslist.org'`;
    this.q5 = `select firstname,lastname,role from users where email= 'efewtrell8c@craigslist.org'`;
    this.q6 = `SELECT firstname,lastname,role,name AS team_name,batch_number,c.location,isgraduated
    FROM users u JOIN  team t
    ON u.team_id = t.id
    JOIN campus c 
    ON t.campus_id =c.id
    JOIN batch b 
    ON b.number = t.batch_number`;
    this.q7 = `SELECT firstname, lastname, email,role
    from users where email='cbrose86@cbslocal.com'`;
    this.q8 = `SELECT firstname, lastname, role, name as teamname
    from users u join team t
    on u.team_id = t.id 
    where email='cbrose86@cbslocal.com'`;
    this.q9 = `select email,firstname,lastname,role from users where role!='teacher'`;
    this.q10 = `select email,firstname,lastname,role from users where role='student-team-leader' LIMIT 5`;
    this.q11 = `SELECT users.email, users.firstname,users.lastname,users.role,team.name,team.batch_number,campus.location,batch.isgraduated
    FROM users INNER JOIN  team
    ON users.team_id = team.id
    INNER JOIN campus 
    ON team.campus_id =campus.id
    INNER JOIN batch 
    ON batch.number = team.batch_number`;
    this.q12 = `SELECT users.email, users.firstname, users.lastname,users.role, team.name as teamname, team.batch_number as batchnumber,campus.location
    FROM users INNER JOIN  team
        ON users.team_id = team.id
        INNER JOIN campus 
        ON team.campus_id =campus.id
        where users.role='student-team-leader' limit 2`;
}

module.exports = new queries();
