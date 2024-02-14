let ad = prompt('Computer adinizi yazin:');
let adlar = ad.split(' ');
let adlarimiz = adlar.join('_');
let netice = `Sizin Computer adiniz: ${adlarimiz}`;

document.getElementById('computer').innerHTML = netice