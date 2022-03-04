// find if given year is leap year or not

function isLeap(year) {
  return year % 4 == 0 ? "Leap year" : "Not leap year";
}

console.log(isLeap(2003));
