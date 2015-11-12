var tauDigits = require('./tau-array-decimal.json');

var miniTauArr = [];

var dozits = '6.'

//tauDigits is an array of 10000 strings of 10 digits except lest string has 9 digits

for (i=0; i<800; i++) {
  miniTauArr.push(parseInt(tauDigits[i]));
}

for (j=0; j<6000; j++) {

  var carryOver = 0;

  for (i=miniTauArr.length-1; i>=0; i--) {

    miniTauArr[i] *= 12;
    miniTauArr[i] += carryOver;
    carryOver = Math.floor(miniTauArr[i]*Math.pow(10,-10));
    miniTauArr[i] = Math.round((miniTauArr[i]*Math.pow(10,-10) - carryOver)*Math.pow(10,10));

    if (i === 0) {
      if (carryOver <= 9){
        dozits += carryOver;
      }
      else if (carryOver === 10) {
        dozits += 'ᘔ';
      }
      else {
        dozits += 'Ɛ';
      }
    }

  }

}
console.log(dozits);

var decTau = 6;
for (i=2; i<10; i++) {
  decTau += dozits[i]*Math.pow(12,-(i-1));
}
