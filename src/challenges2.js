// Desafio 11
function generatePhoneNumber(z) {
  if (11 === z.length) {
    for (let y of z) {
      if (z[y] > 9 || z[y] < 0) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }

    for (let contador = 0; contador < z.length; contador += 1) {
      let repeticoes = 0;
      for (let contador2 = 0; contador2 < z.length; contador2 += 1) {
        if (z[contador] === z[contador2]) {
          repeticoes = repeticoes + 1;
        }
        if (repeticoes > 2) {
          return 'não é possível gerar um número de telefone com esses valores';
        }
      }
    }

    let retornar = '(';
    for (let x = 0; x < 2; x += 1) {
      retornar = retornar + z[x];
    }
    retornar = retornar + ') ';
    for (let x = 2; x < 7; x += 1) {
      retornar = retornar + z[x];
    }
    retornar = retornar + '-';
    for (let x = 7; x < 11; x += 1) {
      retornar = retornar + z[x];
    }
    return retornar;
  } else {
    return 'Array com tamanho incorreto.';
  }
}

// Desafio 12
function triangleCheck(x, y, z) {
  if (x < 0 || y < 0 || z < 0 || z + y < x || z + x < y || x + y < z || Math.abs(x - y) > z || Math.abs(x - z > y) || Math.abs(z - y) > z) {
    return false;
  }
  return true;
}

// Desafio 13
function hydrate(x) {
  let retornar = 0;
  for (let y of x) {
    if (y == 1 || y == 2 || y == 3 || y == 4 || y == 5 || y == 6 || y == 7 || y == 8 || y == 9) {
      retornar = retornar + parseInt(y);
    }
  }
  if (retornar > 1) {
    return retornar + ' copos de água';
  } else {
    return retornar + ' copo de água';
  }
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};