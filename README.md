# node-keybin

Library to interact with the KeyBin.net API using promises.

```
npm i keybin
```

# Usage

```js
const keybin = require('keybin');

keybin.setToken("");

keybin.other.ping().then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
});
```

# All Functions

```js
keybin.other.ping()

keybin.products.getAllProducts(page, amount, include_listings, keywords);
keybin.products.getProduct(product_id, include_listing);

keybin.listing.getListing(product_id);
keybin.listing.getListingDetails(product_id, listing_id);
keybin.listings.getListingsAfterDate(unix_timestamp);

keybin.account.getBalance();

keybin.orders.getAllOrders(page, amount);
keybin.orders.createOrder([
    {
        listingId: 'string',
        qty: 'number',
        price: 'number'
    }
], customOrderReference);
keybin.orders.getOrder(order_id);

keybin.keys.getKeys(order_id);

keybin.regions.getRegions();

keybin.platforms.getPlatforms();

```