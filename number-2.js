data = require('./data');
/*2. Kelompokkan data data transaksi berdasarkan script pada link diatas dalam bentuk array pada sebuah object, berdasarkan lokasi pembelian */
    
let grouped = {};
for (const value of data.data) {
    let p = 'Store location : ' + value.storeLocation;
    if (!grouped[p]) {
        grouped[p] = [];
    }
    grouped[p].push(value);
}

console.log(grouped);