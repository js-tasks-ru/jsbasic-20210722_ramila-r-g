function makeDiagonalRed(table) {
  for (let row of table.rows) {
    for (let cell of row.cells) {
      let content = cell.innerHTML.split(':');
      if (content[0] == content[1]) {
        cell.style.backgroundColor = 'red';
        console.log(cell.style.backgroundColor);
      }
      }
    }  
  }