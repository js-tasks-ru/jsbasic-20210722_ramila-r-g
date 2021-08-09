function getMinMax(str) {
  let numArray = []
  let splitString = str.split(' ');  
  for (let element of splitString) {
    if (!isNaN(element)) {
      numArray.push(element);
    }
  }
  let min = 0;
  let max = 0;
  for (let number of numArray) {
    if (number < min) {
      min = Number(number);
    } else if (number > max) {
      max = Number(number);
    }
  }
  let result = {}
  result.min = min;
  result.max = max;
  return result
 }