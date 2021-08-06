function camelize(str) {
  let wordArray = str.split('');
  for (let i = 0; i < wordArray.length; i++){
    if (wordArray[i - 1] === '-') {
     wordArray[i] = wordArray[i].toUpperCase();
      wordArray[i - 1];
    }
  }
  let camelString = wordArray.join('').split('-').join('');
  return camelString;
}