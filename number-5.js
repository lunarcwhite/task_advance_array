data = require('./data');

/* 5. Buat array berdasarkan script pada link diatas yang menyimpan rating setiap toko dari satisfaction customer mereka */
purchase = data.data.map(function (d) {
    return {
        idTransaction: d.id,
        userEmail: d.customer.email,
        purchaseMethod: d.purchaseMethod,
        storeRating: d.customer.satisfaction.$numberInt,
    };
});
let grouped = {};
for (const value of purchase) {
    let p = 'Store location : ' + value.storeLocation;
    if (!grouped[p]) {
        grouped[p] = [];
    }
    grouped[p].push(value);
}
console.log(grouped);