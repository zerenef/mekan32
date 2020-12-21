var mongoose = require('mongoose');
var dbURI = 'mongodb://localhost/mekan32';
//var dbURI = 'mongodb+srv://mekan32:mekan32@mekan32.1rthf.mongodb.net/mekan32?retryWrites=true&w=majority'
mongoose.connect(dbURI, { useNewUrlParser: true });

mongoose.connection.on('connected', function () {
  console.log('Mongoose ' + dbURI + ' adresindeki veritabanına bağlandı\n');
});

//Bağlantı hatası olduğunda konsola hata bilgisini yazdır
mongoose.connection.on('error', function (err) {
  console.log('Mongoose bağlantı hatası\n: ' + err);
});

//Bağlantı kesildiğinde konsola kesilme bilgisini yaz.
mongoose.connection.on('disconnected', function () {
  console.log('\nMongoose bağlantısı kesildi');
});

kapat = function (msg, callback) {
  mongoose.connection.close(function () {
    console.log('Mongoose kapatıldı\n' + msg);
    callback();
  });
};

// nodemon kullanıyorsak ayrı bir kapatma işlemi gerekir.
process.once('SIGUSR2', function () {
  kapat('Nodemon kapatıldı\n', function () {
    process.kill(process.pid, 'SIGUSR2');
  });
});

// Uygulama kapandığında kapat
process.on('SIGINT', function () {
  kapat('Uygulama kapatıldı\n', function () {
    process.exit(0);
  });
});

// Herokudan kapatma işlemi gerçekleşirse
process.on('SIGTERM', function () {
  kapat('Heroku kapatıldı\n', function () {
    process.exit(0);
  });
});

require('./mekansema');