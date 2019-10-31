var express = require('express');
var Route = express.Router();

/* GET home page. */
Route.get('/', function(req, res) {
  res.render('homepage.ejs');
});

Route.get('/tabel', (req, res) => 
res.render('tabel/table.ejs'));

Route.get('/tabellakilaki', (req, res) => 
res.render('tabel/tabellakilaki.ejs'));

Route.get('/tabelperempuan', (req, res) => 
res.render('tabel/tabelperempuan.ejs'));

Route.get('/tabelsemua', (req, res) => 
res.render('tabel/tabelsemua.ejs'));

Route.get('/tentang', (req, res) => 
res.render('tentang.ejs'));

module.exports=Route

