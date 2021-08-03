function sumSalary(salaries) {
  let totalSum = 0;
  for(let prop in salaries) {
    if (isFinite(salaries[prop])) {
      totalSum += salaries[prop]
    }
  }
  return totalSum;
}