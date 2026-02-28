const {Datatypes}=require('sequelize');
const sequelize= require('../src/config/database');

const ActivityLog= sequelize.define("AcivityLog",{
    log_id:{
        type:Datatypes.UUID,
        defaultValue:Datatypes.UUIDV4,
        primaryKey: true
    },
    evaluation_results:{
        type: Datatypes.ENUM()
        
    }

});
module.exports= ActivityLog;