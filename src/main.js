const client = require('./client');

module.exports = {
    setToken: client.setToken,
    other: require('./res/other'),
    products: require('./res/products'),
    listing: require('./res/listing'),
    account: require('./res/account'),
    orders: require('./res/orders'),
    keys: require('./res/keys'),
    regions: require('./res/regions'),
    platforms: require('./res/platforms')
}