const client = require('../../client');

module.exports.getAllProducts = async (page = 1, take = 25, embed_listings = true, keywords = "") => {
    return client.execute('GET', '/v1/products', {
        page: page,
        take: take,
        embed_listings: embed_listings,
        keywords: keywords
    });
}

module.exports.getProduct = async (product_id, embed_listings = true) => {
    return client.execute('GET', `/v1/products/${product_id}`, {
        embed_listings: embed_listings
    });
}