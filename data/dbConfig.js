const knex = require('knex');

// OPTION ONE
// const configOptions = require('../knexfile').development;
// module.exports = knex(configOptions);

// OPTION TWO
const config = require('../knexfile.js');
const db = knex(config.development);
module.exports = db;