const client = require('../../client');

module.exports.getBalance = async () => {
    return client.execute('GET', '/v1/account/balance');
};