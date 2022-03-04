// perform multiplication using addition

function multiply(no1, no2) {
  let sum = 0;
  let i = 0;
  while (i < no2) {
    sum = sum + no1;
    i++;
  }
  console.log(sum);
}

multiply(4, 6);
