const client = require('../../client');

module.exports.getRegions = async () => {
    return client.execute('GET', '/v1/regions');
};