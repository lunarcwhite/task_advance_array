data = require('./data');

/* 6. Buat array berdasarkan script pada link diatas yang menyimpan  keuntungan yang didapat dari setiap lokasi toko.*/
const locationProfit = {};

for (const iterator of data.data) {
    let p = 'Store location : ' + iterator.storeLocation;
    let profit = 0;
    iterator.items.forEach((item) => {
        if (iterator.couponUsed == true) {
            diskon = (item.price.$numberDecimal * item.quantity.$numberInt) * 10 / 100;
            profit += item.price.$numberDecimal * item.quantity.$numberInt - diskon;
        } else {
            profit += item.price.$numberDecimal * item.quantity.$numberInt;
        }
    });
    if (locationProfit[p]) {
        locationProfit[p] += profit;
    } else {
        locationProfit[p] = profit;
    }
}
console.log(locationProfit);