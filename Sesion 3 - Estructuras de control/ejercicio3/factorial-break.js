let factorial = 1;
let i = 1;

while (true) {
  factorial *= i;

  if (i === 10) {
    break;
  }

  i++;
}

console.log("factorial", factorial);
