const db = require('../config/dbConnection.js');

const apiModels = {
    saveRepoDataInDatabase: (repo, owner)=>{
        return new Promise((resolve, reject)=>{
            db.query("insert into repositories(repo_id, repo_name, repo_fullname, is_private, created_at, updated_at, repo_url, repo_owner) values($1, $2, $3, $4, $5, $6, $7, $8) returning _id", [parseInt(repo.id),repo.name,repo.full_name,repo.private,repo.created_at,repo.updated_at,repo.svn_url, owner], (err, result)=>{
                if(err) return reject(err);
                return resolve(result);
            });
        });
    },

    getAllRepositoryData: ()=>{
        return new Promise((resolve, reject)=>{
            db.query("select * from repositories", (err, result)=>{
                if(err) return reject(err);
                return resolve(result);
            });
        });
    },

    getAllRepositoryDataById: (id)=>{
        return new Promise((resolve, reject)=>{
            db.query("select * from repositories where _id = $1",[id], (err, result)=>{
                if(err) return reject(err);
                return resolve(result);
            });
        });
    },
};

module.exports = apiModels;