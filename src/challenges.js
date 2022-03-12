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
function fizzBuzz(x) {
  let retornar = [];
  for (y of x) {
    if (y % 3 === 0 && y % 5 === 0) {
      retornar.push('fizzBuzz');
    } else if (y % 3 === 0) {
      retornar.push('fizz');
    } else if (y % 5 === 0) {
      retornar.push('buzz');
    } else {
      retornar.push('bug!');
    }
  }
  return retornar;
}

// Desafio 9
function encode(z) {
  let x = z.split('');
  for (y in x) {
    switch (x[y]) {
      case 'a':
        x[y] = 1
        break;
      case 'e':
        x[y] = 2
        break;
      case 'i':
        x[y] = 3
        break;
      case 'o':
        x[y] = 4
        break;
      case 'u':
        x[y] = 5
        break;
    }
  }
  let resultado = '';
  for (y in x) {
    resultado = resultado + x[y]
  }
  return resultado;
}


function decode(z) {
  let x = z.split('');
  for (y in x) {
    switch (x[y]) {
      case '1':
        x[y] = 'a'
        break;
      case '2':
        x[y] = 'e'
        break;
      case '3':
        x[y] = 'i'
        break;
      case '4':
        x[y] = 'o'
        break;
      case '5':
        x[y] = 'u'
        break;
    }
  }
  let resultado2 = '';
  for (y in x) {
    resultado2 = resultado2 + x[y]
  }
  return resultado2;
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
