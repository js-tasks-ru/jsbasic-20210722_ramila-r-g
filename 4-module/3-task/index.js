function highlight(table) {
  let tableRows = table.querySelectorAll('tr');
  
tableRows.forEach ((row) => {
  let itsTds = row.querySelectorAll('td');
  
  if (itsTds[2].innerHTML === 'm'){
    row.classList.add('male')
  } else if (itsTds[2].innerHTML === 'f') {row.classList.add('female')}
  
  if (itsTds[1].innerHTML < 18) {
    row.style.textDecoration = 'line-through';
  }
  
  if (itsTds[3].dataset.available === 'true') {
    row.classList.add('available')
  } else if (itsTds[3].dataset.available === 'false') {
    row.classList.add('unavailable')
  } else {
    row.setAttribute("hidden", true);
  }
  }); 
  return table;
}
