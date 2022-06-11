const client = require('../../client');

module.exports.getAllOrders = async (page = 1, take = 25) => {
    return client.execute('GET', '/v1/orders', {
        page: page,
        take: take
    });
};

module.exports.createOrder = async (items, customReference) => {
    return client.execute('POST', '/v1/orders', {
        items: items,
        customReference: customReference
    });
}

module.exports.getOrder = async (order_id) => {
    return client.execute('GET', `/v1/orders/${order_id}`);
}