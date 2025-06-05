const { City } = require('../models/index');

class CityRepository{
    async createCity({ name }){
        try{
            const city = await City.create({name});
            return city;
        } catch(error){
            console.log("something went wrong in the repository layer");
            throw {error};
        }
    }

    async deleteCity({ cityId }){
        try{
            await City.destory({
                where: {
                    id: cityId
                }
            });
            return true;
        } catch(error){
            console.log("something went wrong in the repository layer");
            throw {error};
        }
    }

    async updateCity(cityId,data){
        try{
            const city = await City.update(data,{
                where: {
                    id: cityId
                }
            });
            return city;
        } catch(error){
            console.log("something went wrong in the repository layer");
            throw {error};
        }

    }

    async getCity(cityID){
        try{
            const city = await City.findByPk(cityID);
            return city;
        } catch(error){
            console.log("something went wrong in the repository layer");
            throw {error};
        }

    }

}

module.exports = CityRepository;