var tauDigits = require('./tau-array-decimal.json');

var miniTauArr = [];

var dozits = '6.'

for (i=0; i<5; i++) {
  miniTauArr.push(parseInt(tauDigits[i]));
}

var carryOver = 0;

for (j=0; j<40; j++) {

  // console.log('\n'+j+'th dozit:')

  for (i=miniTauArr.length-1; i>=0; i--) {

    // console.log('oldChunk = '+miniTauArr[i]);

    miniTauArr[i] *= 12;
    miniTauArr[i] += carryOver;

    // console.log('product = '+miniTauArr[i]);

    // var n = miniTauArr[i].toString().length;
    carryOver = Math.floor(miniTauArr[i]*Math.pow(10,-10));

    // console.log('carryOver = '+carryOver);

    miniTauArr[i] = Math.round((miniTauArr[i]*Math.pow(10,-10) - carryOver)*Math.pow(10,10));

    if (i === 0) {
      if (carryOver <= 9){
        dozits += carryOver;
      }
      else if (carryOver === 10) {
        dozits += 'χ';
      }
      else {
        dozits += 'ε';
      }
    }

  }

  console.log(miniTauArr);
}
console.log(dozits);

var decTau = 6;
for (i=2; i<10; i++) {
  decTau += dozits[i]*Math.pow(12,-(i-1));
}
console.log(decTau);
