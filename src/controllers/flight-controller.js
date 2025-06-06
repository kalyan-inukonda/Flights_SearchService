const { FlightSerivce } = require('../services/index');

const flightSerivce = new FlightSerivce();
 
const create = async (req,res) => {
    try{
        const flight = await flightSerivce.createFlight(req.body);
        return res.status(200).json({
            data: flight,
            success: true,
            message: "successfully created a flight",
            error: {}
        });
    } catch(error){
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to create a flight",
            error: error
        });
    }
}

const getAll = async (req,res) => {
    try{
        const response = await flightSerivce.getAllFlightData(req.query);
        return res.status(200).json({
            data: response,
            success: true,
            message: "successfully fetched the flights",
            error: {}
        }); 
    } catch (error){
         console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to fetch the flights",
            error: error
        });
    }
}

module.exports = {
    create,
    getAll
}