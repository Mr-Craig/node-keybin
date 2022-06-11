const client = require('../../client');

module.exports.getPlatforms = async () => {
    return client.execute('GET', '/v1/platforms');
};