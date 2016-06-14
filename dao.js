'use strict';

let knex = require('knex')({
  client: 'mysql',
  connection: {
    host: '127.0.0.1',
    user: 'guess_number',
    password: 'myverysecretpassword',
    database: 'guess_number'
  }
});

exports.addlog = (input, actual, callback) => {
  knex('input_log').insert({
    input: input,
    min: actual.min,
    max: actual.max
  })
    .then((res) => {
      return callback(null, res)
    })
    .catch((err) => {
      return callback(err)
    })

}