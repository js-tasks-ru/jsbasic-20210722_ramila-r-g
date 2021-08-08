function camelize(str) {
  let wordArray = str.split('-')
  for (let i = 1; i < wordArray.length; i++) {
    wordArray[i] = wordArray[i][0].toUpperCase() + wordArray[i].slice(1);
  }
  return wordArray.join('')
}