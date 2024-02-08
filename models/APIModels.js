const db = require('../config/dbConnection.js');

const apiModels = {
    saveRepoDataInDatabase: (repo)=>{
        console.log("repo In DB >>>", repo)
        return new Promise((resolve, reject)=>{
            db.query("", [], (err, result)=>{
                if(err) return reject(err);
                return resolve(result);
            });
        });
    },
};

module.exports = apiModels;