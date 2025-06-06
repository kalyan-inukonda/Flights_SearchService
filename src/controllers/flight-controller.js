const { FlightSerivce } = require('../services/index');

const flightSerivce = new FlightSerivce();
 
const create = async (req,res) => {
    try{
        const flight = await flightSerivce.createFlight(req.body);
        return res.status(200).json({
            data: flight,
            success: true,
            message: "successfully created a flght",
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


module.exports = {
    create
}