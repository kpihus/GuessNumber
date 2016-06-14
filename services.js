'use strict';
const dao = require('./dao');

let magicNumber = {min: 0, max: 0, correct:0};
let attempts = 0;

exports.generateNumber = () => {
  let min = Math.floor(Math.random()*100);
  let max = Math.floor(Math.random()*100)+min;
  magicNumber.min = min;
  magicNumber.max = max;
  magicNumber.correct = Math.floor(Math.random() * (max - min + 1)) + min;
  attempts = 0
  console.log('Number is:', magicNumber)
  return {min: magicNumber.min, max: magicNumber.max}
}

exports.compare = (input, callback) => {
  let result = (input == magicNumber.correct);
  if(result){
    exports.generateNumber()
  } else {
    attempts ++
  }
  dao.addlog(input, magicNumber, (err) =>{
    if(err){
      return callback(err)
    }
    callback(null, {result: result, attempts: attempts})
  })

}