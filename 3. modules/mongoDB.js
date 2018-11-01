const mongoDB = require('mongodb');
const mongoClient = mongoDB.MongoClient;
const ObjectID = mongoDB.ObjectID;
const init = async (config)=> {
    let dbs = {};
    let count = config.length;
    for(let dbName in config){
        let cli = await mongoClient.connect(config[dbName],{ useNewUrlParser: true });
        if(!cli){
            throw Error(`${dbName} connect Error.`);
        }
        dbs[dbName] = cli.db(dbName);
    }
    return dbs;
};

module.exports = {
    ObjectID,
    init
}