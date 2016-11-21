var express = require('express');
var router = express.Router();
var pg = require('pg');

var config = {
  database: 'sweets'
};

var pool = new pg.Pool(config);

router.get('/', function (req, res) {
  pool.connect()
    .then(function (client) {
      client.query("SELECT * FROM treats")
        .then(function (result){
          client.release();
          res.send(result.rows);
        }); //<---------------------.then
    }) //<--------------------------.then
    .catch(function (err){
      console.log('error on SELECT', err);
      res.sendStatus(500);
    }); //<------------------------.catch
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
