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
    else return console.log('Connected to database successfully');
});

module.exports = connection;