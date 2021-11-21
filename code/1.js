module.exports = () =>{
const fs = require('fs')

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

var array = []
var loop = 0

for(var loop = 1; loop < 10000; loop++){

  const start = randomNumber(1, 6)
  const end = randomNumber(1, 6)
  const output = start + end
  var log = `${start} + ${end} = ${output}`

  if(output < 6 && output > 0 && !array.join(' ').includes(log)){
  array.push(log)
  };
  
}

fs.writeFileSync('./output/1.txt', array.join('\n'))


}