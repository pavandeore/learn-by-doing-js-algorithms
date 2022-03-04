// swap two numbers using 2 variables

function swapIt(no1, no2) {
  let temp;
  temp = no1;
  no1 = no2;
  no2 = temp;
  console.log(no1, " ", no2);
}

swapIt(3, 5);
