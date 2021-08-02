function isEmpty(obj) {
  for(let key in obj) {
    if (key.length !== 0) {
      return false
    }
  }
  return true;
}