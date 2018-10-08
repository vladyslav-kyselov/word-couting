document.getElementById('click-me').addEventListener('click', out);

function out() {
  let line = document.getElementById('input').value;
  line = line.replace(/[^A-Za-zА-Яа-яЁё\s]/g, '').replace(/\s+/gi, ' ');
  let NumberOfWords = 1;
  for (let i = 0; i <= line.length; i++) {
    let test = line.charAt(line.length - i);

    if (test == ' ') {
      NumberOfWords = NumberOfWords + 1;
    }
  }

  let LineLastWord = line.charAt(line.length - 1);
  if ( LineLastWord == ' ') {
    NumberOfWords = NumberOfWords - 1;
  }

  let LineFirstWord = line.charAt(line.length[0]);
  if ( LineFirstWord == ' ') {
    NumberOfWords = NumberOfWords - 1;
  }

  if (line.length == 0) {
    NumberOfWords = 0;
  }

  document.getElementById('result').innerHTML = 'В этой строке ' + NumberOfWords + ' слова';
}
