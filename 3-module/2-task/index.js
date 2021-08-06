function filterRange(arr, a, b) {
  let filteredArray = arr.filter((element) => {return a <= element && element <= b} 
);
  return filteredArray;
}