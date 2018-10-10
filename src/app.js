document.addEventListener('DOMContentLoaded', buttonClick);

function buttonClick() {
  document.getElementById('button-click').addEventListener('click', onCalculcateWordsButtonClick);
}

function onCalculcateWordsButtonClick() {
  let line = document.getElementById('input').value;
  line = line.replace(/[^A-Za-zА-Яа-яЁё\s]/g, '').replace(/\s+/gi, ' ');
  let NumberOfWords = 0;
  for (let i = 0; i < line.length; i++) {
    let test = line[i];
    if (test == ' ') {
      NumberOfWords++;
    }
  }
  let firstNoSpace = line[0];
  let LineLastWord = line[line.length - 1];
  if ( LineLastWord == ' ') {
    NumberOfWords--;
  }

  if (line.length == 0) {
    NumberOfWords= 0;
  } else if (firstNoSpace != ' ') {
    NumberOfWords++;
  } else if ( line.length[0] == ' ') {
    NumberOfWords--;
  }

  document.getElementById('result').innerHTML = 'В этой строке ' + NumberOfWords + ' слова';
}
