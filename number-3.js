data = require('./data');
/* 3.Buat array berdasarkan script pada link diatas yang menyimpan keuntungan yang didapat dari setiap transaksi */
const Keuntungan = data.data.map(function (d){
    let profit = 0;
    d.items.forEach((item) => {
        if(d.couponUsed == true){
            diskon = (item.price.$numberDecimal * item.quantity.$numberInt) * 10 / 100;
            profit += item.price.$numberDecimal * item.quantity.$numberInt - diskon;
        }else{
            profit += item.price.$numberDecimal * item.quantity.$numberInt;
        }
      });

    return {
        idTransaction: d.id,
        storeLocation: d.storeLocation,
        userEmail: d.customer.email,
        purchaseMethod: d.purchaseMethod,
        couponUsed: d.couponUsed,
        profit: '$' + profit.toFixed(2)
    }
});

console.log(Keuntungan);