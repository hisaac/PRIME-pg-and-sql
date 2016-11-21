var express = require('express');
var router = express.Router();
var pg = require('pg');

var config = {
  database: 'sweets'
};

var pool = new pg.Pool(config);

router.get('/:searchTerms', function(req, res){
  getTreats(req.params.searchTerms, req, res);
});

router.get('/', function (req, res){
  getTreats('', req, res);
}); //<------------------------router.get

router.post('/', function (req, res) {
  var newTreat = req.body;

  pool.connect()
    .then(function (client) {
      client.query(
        'INSERT INTO treats (name, description, pic) VALUES ($1, $2, $3);',
        [newTreat.name, newTreat.description, newTreat.url])
        .then(function (result){
          client.release();
          res.sendStatus(200);
        }); //<---------------------.then
      }) //<------------------------.then
    .catch(function (err){
      console.log('error on INSERT', err);
      res.sendStatus(500);
    }); //<------------------------.catch
}); //<-----------------------router.post

module.exports = router;

function getTreats(query, req, res){
  var searchQuery = '';

  if (query !== ''){
    searchQuery = "WHERE name ILIKE '" + query + "'";
  }

  pool.connect()
    .then(function (client) {
      client.query('SELECT * FROM treats ' + searchQuery + ';')
        .then(function (result){
          client.release();
          res.send(result.rows);
        }); //<---------------------.then
    }) //<--------------------------.then
    .catch(function (err){
      console.log('error on SELECT', err);
      res.sendStatus(500);
    }); //<------------------------.catch
}
