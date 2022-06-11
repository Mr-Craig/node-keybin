const client = require('../../client');

module.exports.ping = async () => {
    return client.execute('GET', '/v1/ping');
};