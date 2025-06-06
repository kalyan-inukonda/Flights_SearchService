const { CityRepository } = require('../repository/index');

class CityService{
    constructor(){
        this.cityRepository = new CityRepository();
    }

    async createCity(data){
        try{
            const city = await this.cityRepository.createCity(data);
            return city;

        } catch(error){
            console.log("something went wrong in the serivce layer");
            throw {error};
        }
    }

    async deleteCity(CityId){
        try{
            const reponse = await this.cityRepository.deleteCity(CityId);
            return reponse;
        } catch(error){
            console.log("something went wrong in the serivce layer");
            throw {error};
        }
    }

    async updateCity(CityId, data){
        try{
            const city = await this.cityRepository.updateCity(CityId,data);
            return city;
        } catch(error){
            console.log("something went wrong in the serivce layer");
            throw {error};
        }
    }

    async getCity(CityId){
        try{
            const city = await this.cityRepository.getCity(CityId);
            return city;
        } catch(error){
            console.log("something went wrong in the serivce layer");
            throw {error};
        }
    }

    async getAllCities(filter){
        try{
            const cities = await this.cityRepository.getAllCities({name: filter.name});
            return cities;
        } catch(error){
            console.log("something went wrong in the serivce layer");
            throw {error};
        } 
    }
}

module.exports = CityService;