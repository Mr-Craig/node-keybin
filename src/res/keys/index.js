const client = require('../../client');

module.exports.getKeys = async (order_id) => {
    return client.execute('GET', `/v1/orders/${order_id}/keys`);
};