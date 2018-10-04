//function specialText(element, event) //функция, которая запрещает нажатие клавиш 0-9
//{
//    if (
//    event.keyCode == 48 ||  event.keyCode == 49 || event.keyCode == 50 ||  event.keyCode == 51 ||  event.keyCode == 52 ||  event.keyCode == 53 || event.keyCode == 54 || event.keyCode == 55 || event.keyCode == 56 ||event.keyCode == 57 ||  event.keyCode == 51 ) {
//	return false;
//}
//}


function out() {

    var line = document.getElementById('input').value;
    var number_of_words = 1;

    for (var i = 0; i <= line.length; i++) {   //основной цикл , от 0 до всей длинны строки
        var test = line.charAt(line.length - i);

        if (test == " ") {                                //если встречается пробел, то делаем +1
            number_of_words = number_of_words + 1;
        }

        if (test == "!") {
            if (test == " ") {
                number_of_words = number_of_words - 1;
            }
        }
    }

    var line_last_word = line.charAt(line.length - 1); //проверка, если последний символ у нас пробел - то мы  от общего числа отнимаем 1
    if (line_last_word == " ") {
        number_of_words = number_of_words - 1;
    }

    var line_first_word = line.charAt(line.length[0]); //проверка, если первый символ у нас пробел - то мы  от общего числа отнимаем 1
    if (line_first_word == " ") {
        number_of_words = number_of_words - 1;
    }

    if (line.length == 0) {
        number_of_words = 0;
    }


    document.getElementById('result').innerHTML = 'В этой строке ' + number_of_words + ' слова';
}