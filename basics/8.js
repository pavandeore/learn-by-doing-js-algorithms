// converts days to years, monthsm weeks

function convertTo(days) {
  console.log("weeks = ", Math.round(days / 7));
  console.log("\nmonths = ", Math.round(days / 30));
  console.log("\nyears = ", Math.round(days / 365));
}

convertTo(62);
