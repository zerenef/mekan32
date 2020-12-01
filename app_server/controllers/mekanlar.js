const anaSayfa = function(req, res, next) {
  res.render('mekanlar-liste',
    { title : 'Anasayfa',
      'footer' : 'Faruk Zeren 2020',
      'sayfaBaslik' : {
        'siteAd' : 'Mekan 32',
        'aciklama' : 'Isparta civarındaki mekanları keşfedin!'
      },
      'mekanlar' : [
        {
          'ad' : 'Starbucks',
          'adres' : 'Centrum Garden',
          'puan' : '4',
          'imkanlar' : ['Kahve', 'Çay', 'Pasta'],
          'mesafe' : '10km'
        },
        {
          'ad' : 'Gloria Jeans',
          'adres' : 'Iyaş Avm',
          'puan' : '3',
          'imkanlar' : ['Kahve', 'Kek', 'Çay'],
          'mesafe' : '5km'
        },
        {
          'ad' : 'Kahve Dünyası',
          'adres' : 'Iyaş Avm',
          'puan' : '3',
          'imkanlar' : ['Kahve', 'Kek', 'Pasta'],
          'mesafe' : '5km'
        },
        {
          'ad' : 'MackBear',
          'adres' : 'Fatih Mahallesi',
          'puan' : '2',
          'imkanlar' : ['Kahve Çeşitleri', 'Kek', 'Pasta'],
          'mesafe' : '6km'
        },
        {
          'ad' : 'DipNot',
          'adres' : 'Boğaziçi Koleji Karşısı',
          'puan' : '5',
          'imkanlar' : ['Kahve', 'Kek', 'Çay', 'Tost', 'Çalışma Alanları'],
          'mesafe' : '7km'
        }
      ]
    }
   );
}

const mekanBilgisi = function(req, res, next) {
  res.render('mekan-detay', 
    { title : 'Mekan Bilgisi',
      'sayfaBaslik' : 'Starbucks',
      'footer' : 'Faruk Zeren 2020',
      'mekanBilgisi' : {
        'ad' : 'Starbucks',
        'adres' : 'Centrum Garden',
        'puan' : 3,
        'imkanlar' : ['Kahve', 'Çay', 'Pasta'],
        'koordinatlar' : {
          'enlem': '37.781885',
          'boylam' : '30.566034'
        },
        'saatler' : [
          {
            'gunler' : 'Pazartesi - Cuma',
            'acilis' : '7:00',
            'kapanis' : '23:00',
            'kapali' : false
          },
          {
            'gunler' : 'Cumartesi',
            'acilis' : '9:00',
            'kapanis' : '22:00',
            'kapali' : false
          },
          {
            'gunler' : 'Pazar',
            'kapali' : true
          }
        ],
        'yorumlar' : [
          {
            'yorumYapan' : 'Faruk Zeren',
            'puan' : '3',
            'tarih' : '26.11.2020',
            'yorumMetni' : 'Özensiz çalışanlar.'
          },
          {
            'yorumYapan' : 'Ahmet Mehmet',
            'puan' : '5',
            'tarih' : '27.11.2020',
            'yorumMetni' : 'Kahveleri çeşitliliği fazla.'
          },
          {
            'yorumYapan' : 'Asım Sinan Yüksel',
            'puan' : '4',
            'tarih' : '30.11.2020',
            'yorumMetni' : 'Kahveleri güzel.'
          }
        ]
      }
    }
  );
}

const yorumEkle = function(req, res, next) {
  res.render('yorum-ekle', 
    { 
      title : 'Yorum Ekle',
      'footer' : 'Faruk Zeren 2020'
    }
  );
}


module.exports = {
  anaSayfa,
  mekanBilgisi, 
  yorumEkle
}