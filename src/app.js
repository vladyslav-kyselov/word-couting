document.addEventListener('DOMContentLoaded', buttonClick);

function buttonClick() {
  document.getElementById('button-click').addEventListener('click', onCalculcateWordsButtonClick);
}

function getWords(str) {
  let NumberOfWords = 0;
  for (let i = 0; i < str.length; i++) {
    let check = str[i];
    if (check == ' ') NumberOfWords++;
  }
  let LineLastWord = str[str.length - 1];
  if ( LineLastWord == ' ') NumberOfWords--;

  if (str.length == 0) NumberOfWords= 0;
  else if (str[0] != ' ') NumberOfWords++;
  return NumberOfWords;
}

function onCalculcateWordsButtonClick() {
  let line = document.getElementById('input').value;
  line = line.replace(/[^A-Za-zА-Яа-яЁё\s]/g, '').replace(/\s+/gi, ' ');
  let words = getWords(line);
  document.getElementById('result').innerHTML = 'В этой строке ' + words + ' слова';
}
