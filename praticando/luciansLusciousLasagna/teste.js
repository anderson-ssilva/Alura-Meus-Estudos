function daysInBudget(budget, ratePerHour) {
  return Math.floor(budget/(ratePerHour/8));
}

console.log(daysInBudget(1280, 16))