// Desafio 11
function generatePhoneNumber(z) {
  // seu código aqui
}


// Desafio 12
function triangleCheck(x, y, z) {
  if (x < 0 || y < 0 || z < 0 || z + y < x || z + x < y || x + y < z || Math.abs(x-y) > z || Math.abs(x-z > y) || Math.abs(z-y) > z) {
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
