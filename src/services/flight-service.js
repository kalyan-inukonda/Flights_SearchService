const { FlightRepository, AirplaneRepository } = require('../repository/index');
const { compareTime } = require('../utils/helper');

class FlightSerivce {
    
    constructor() {
        this.airplaneRepository = new AirplaneRepository();
        this.flightRepository = new FlightRepository();
    }

    async createFlight(data){
        try{
            if(!compareTime(data.arrivalTime , data.departureTime)){
                throw {error: 'Invalid TIme'};
            }
            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
            const flight = await this.flightRepository.createFlight({
                ...data,totalSeats:airplane.capacity
            });
            return flight;
        } catch (error){
             console.log("something went wrong in the service layer");
            throw {error};
        }
    }

    async getFlightData() {
        
    }
}

module.exports = FlightSerivce;