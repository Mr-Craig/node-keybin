const client = require('../../client');

module.exports.getListing = async (product_id) => {
    return client.execute('GET', `/v1/products/${product_id}/listings`);
};

module.exports.getListingDetails = async (product_id, listing_id) => {
    return client.execute('GET', `/v1/products/${product_id}/listings/${listing_id}`);
};

module.exports.getListingsAfterData = async (unix_stamp) => {
    return client.execute('GET', `/v1/listings`, {
        min_modified_at: unix_stamp
    });
};