const sequelize = require('../config/initSequileze')
const Film = require('./Film')
const Actor = require('./Actor')
const Actor_Film = require('./Actor_Film')

async function initAllModels(){
    const models = {
        Film,
        Actor,
        Actor_Film
    };

    Object.values(models).forEach(model => model.init(sequelize));
    Object.values(models).forEach(model => model.initRelationsAndHooks(sequelize));

    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }

    return {
        ...models,
        sequelize
    };
}

module.exports ={
    initAllModels
}