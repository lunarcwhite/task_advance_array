data = require('./data');

/* 4. Buat array berdasarkan script pada link diatas yang menyimpan jumlah barang yang dibeli pada setiap transaksi */
const jumlahBarang = data.data.map(function (d) {
    let quantity = 0;
    d.items.forEach((item) => {
        quantity += parseInt(item.quantity.$numberInt);
    });

    return {
        idTransaction: d.id,
        storeLocation: d.storeLocation,
        purchaseMethod: d.purchaseMethod,
        purchaseQuantity: quantity
    }
});

console.log(jumlahBarang);