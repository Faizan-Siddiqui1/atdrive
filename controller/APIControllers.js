const axios = require('axios');
const validator = require('validator');
const apiModels = require('../models/APIModels');

const apiControllers = {
    fetchAndStoreDataFromAPI: async (req, res)=>{
        try{
            let reqData = req.body;
            let owner = reqData.owner;
            let errors = {};

            if(validator.isEmpty(owner)){
                errors.owner = "Owner name is required."
            }

            if(Object.keys(errors).length > 0){
                res.status(402).send({
                    status: false,
                    message: 'Invalid data',
                    errors: errors
                })
            }else{

            let BASE_API_URL = `https://api.github.com/users/${owner}/repos`;
            
            let apiResponse = await axios.get(BASE_API_URL);
            let apiData = apiResponse.data;
            
                if(apiData.length > 0){

                    apiData.forEach(repo =>{
                        apiModels.saveRepoDataInDatabase(repo, owner);
                    })

                    res.status(201).send({
                        status: true,
                        message: 'Data added in the database successfully'
                    })
                }else{
                    errorResponse(res, 'fetchAndStoreDataFromAPI', 'No data found. Please check owner name is correct', 404);
                }
        }
        }catch(error){
            console.log('Error >>', error)
            errorResponse(res, 'fetchAndStoreDataFromAPI', 'Internal Server Error', 500);
        }
    },

    getAllRepositoryData: async(req, res)=>{
        try{
            let result = await apiModels.getAllRepositoryData();
            if(result.rows.length > 0){
                res.status(200).send({
                    status: true,
                    message:'Data found successfull',
                    data: result.rows
                })
            }else{
                errorResponse(res, 'getAllRepositoryData', 'No data found', 404);
            }
        }catch(error){
            console.log('Error >>', error)
            errorResponse(res, 'fetchAndStoreDataFromAPI', 'Internal Server Error', 500);
        }
    },

    getAllRepositoryDataById: async(req, res)=>{
        try{
            let id = req.params.id;
            let result = await apiModels.getAllRepositoryDataById(id);
            if(result.rows.length > 0){
                res.status(200).send({
                    status: true,
                    message:'Data found successfull',
                    data: result.rows
                })
            }else{
                errorResponse(res, 'getAllRepositoryData', 'No data found', 404);
            }
        }catch(error){
            console.log('Error >>', error)
            errorResponse(res, 'getAllRepositoryDataById', 'Internal Server Error', 500);
        }
    }
};

function errorResponse (res, methodName, message, statusCode) {
    res.status(statusCode).send({
        status: false,
        message: message
    })
}


module.exports = apiControllers;