// this will keep the database configuration for all the environment
// to fetch specific configuration need to pass env as a parameter
const config = {
  development:{
    host     : '192.168.0.182',
    user     : 'root',
    password : '',
    database    : 'emr_be_db'
  },
 
}

// this statement will export the config object which can be used in other files.
module.exports = config;
