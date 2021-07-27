function ucFirst(str) {
  if (str !== '') {
  newString = str[0].toUpperCase() + str.slice(1);
  return newString;
} else {
  return '';
}
}
