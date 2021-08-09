function showSalary(users, age) {
  let salary = '';
  for (let user of users) {
    if (user.age <= age) {
      salary = salary + user.name + ', ' + user.balance + '\n';
    }
       
  }
  return salary.slice(0,-1);
}
