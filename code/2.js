module.exports = () =>{
const fs = require('fs')

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

var array = []
var loop = 0

for(var loop = 1; loop < 10000; loop++){

  const start = randomNumber(1, 20)
  const end = randomNumber(1, 20)
  const output = start - end
  var log = `${start} - ${end} = ${output}`

  if(output < 6 && output > 0 && !array.join(' ').includes(log)){
  array.push(log)
  };
  
}

fs.writeFileSync('./output/2.txt', array.join('\n'))
fs.appendFileSync('./output.txt', '\n\nMedium:\n' + array.join('\n'))

}