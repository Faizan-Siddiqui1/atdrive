const Pool = require('pg').Pool;

const connection = new Pool({
    user: process.env.DB_USER,
    host: process.env.IP,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD
})

connection.connect((err)=>{
    if(err) return err.message;
    else {
        connection.query('CREATE TABLE IF NOT EXISTS repositories(_id serial primary key, repo_name text, repo_fullname text, repo_id int, is_private text, repo_owner text, repo_url text, created_at text, updated_at text)');
        console.log('Connected successfully')
    }
});

module.exports = connection;


// const mysql = require("mysql2")

// const db = mysql.createConnection({
//     host : process.env.IP,
//     database:  process.env.DB_NAME,
//     user : process.env.DB_USER,
//     password :  process.env.DB_PASSWORD ,

// })

// db.connect((err) => {
//     if (err) throw err;
//     console.log("database connected...")
// });