const { CityService } = require('../services/index');

const cityService = new CityService();

const create = async (req,res) => {
    try{
        const city = await cityService.createCity(req.body);
        return res.status(201).json({
            data: city,
            success: true,
            message: "successfully created a city",
            error: {}
        });
    } catch(error){
        console.log(error);
        return res.status(500).json({
            data: {},
            success: true,
            message: "Not able to create a city",
            error: error
        });
    }
};


const destory = async (req,res) => {
    try{
        const city = await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data: city,
            success: true,
            message: "successfully deleted a city",
            error: {}
        });
    } catch(error){
        console.log(error);
        return res.status(500).json({
            data: {},
            success: true,
            message: "Not able to delete a city",
            error: error
        });
    }
};


const update = async (req,res) => {
    try{
        const city = await cityService.updateCity(req.params.id,req.body);
        return res.status(200).json({
            data: city,
            success: true,
            message: "successfully updated a city",
            error: {}
        });
    } catch(error){
        console.log(error);
        return res.status(500).json({
            data: {},
            success: true,
            message: "Not able to update a city",
            error: error
        });
    }
};


const get = async (req,res) => {
    try{
        const city = await cityService.getCity(req.params.id);
        return res.status(200).json({
            data: city,
            success: true,
            message: "successfully fetched the city",
            error: {}
        });
    } catch(error){
        console.log(error);
        return res.status(500).json({
            data: {},
            success: true,
            message: "Not able to get the city",
            error: error
        });
    }
};


const getAll = async (req,res) => {
    try{
        const cities = await cityService.getAllCities(req.query);
        return res.status(200).json({
            data: cities,
            success: true,
            message: "successfully fetched the cities",
            error: {}
        });
    } catch(error){
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to fetch the cities",
            error: error
        });
    }
}

module.exports = {
    create,
    destory,
    get,
    getAll,
    update
}