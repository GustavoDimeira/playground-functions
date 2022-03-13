// Desafio 11
function generatePhoneNumber(z) {
  // seu código aqui
}


// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate(x) {
  let retornar = 0;
  for (let y of x) {
    if (y == 1 || y == 2 || y == 3 || y == 4 || y == 5 || y == 6 || y == 7 || y == 8 || y == 9) {
      retornar = retornar+parseInt(y);
    }
  }
  if (retornar > 1) {
  return retornar+' copos de água';
  } else {
    return retornar+' copo de água';
  }
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
