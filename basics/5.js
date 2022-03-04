// print all odd numbers till N, with odd , even params

function printAllTillN(no, condition) {
  let i = 0;
  while (i <= no) {
    if (condition == "even") {
      i % 2 == 0 ? console.log(i) : null;
    } else {
      i % 2 == 1 ? console.log(i) : null;
    }

    i++;
  }
}

printAllTillN(10, "odd");
