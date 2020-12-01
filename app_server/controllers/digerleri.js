const hakkinda = function(req, res, next) {
  res.render('hakkinda', 
    { 
      title: 'Hakkında',
      'footer' : 'Faruk Zeren 2020'
    }
  );
}

module.exports = {
  hakkinda
}