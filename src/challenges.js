//mudança para testar
// Desafio 1
function compareTrue(x, y) {
  return x && y;
}

// Desafio 2
function calcArea(b, h) {
  return b * h / 2;
}

// Desafio 3
function splitSentence(x) {
  return x.split(' ');
}

// Desafio 4
function concatName(x) {
  return x[x.length - 1] + ', ' + x[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6
function highestCount(x) {
  let maior = x[0];
  for (y of x) {
    if (maior < y) {
      maior = y
    }
  }
  let contador = 0;
  for (y of x) {
    if (y === maior) {
      contador = contador + 1
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse(x, y, z) {
  let caty = y - x;
  let catz = z - x;
  if (caty < 0) {
    caty = caty * -1;
  }
  if (catz < 0) {
    catz = catz * -1;
  }
  if (caty < catz) {
    return 'cat1';
  } else if (catz < caty) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
