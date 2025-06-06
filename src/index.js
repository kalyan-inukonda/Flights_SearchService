const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/serverConfig');
const Apiroutes = require('./routes/index');

const db = require('./models/index');
const { Airplane } = require('./models/index');

const setupAndstartServer = async () => {

    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    
    app.use('/api',Apiroutes);

    app.listen(PORT, async () => {
        console.log(`server started at ${PORT}`);
        if(process.env.SYNC_DB){
            db.sequelize.sync({alter: true});
        }
        await Airplane.create({
            modelNumber: 'bombardier CRJ'
        });
    });
};

setupAndstartServer();