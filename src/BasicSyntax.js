export function romanToInteger(str) {
    let result = 0;
    /*
    Напишите код, преобразующий число из римской записи в арабскую.
    На вход вы получите строку, ответом должно быть число.
     */
    let i = 0;
    let k = 0;
    while (i <= str.length - 1) {
        let firstTemp = str.substring(i, i + 1);
        let secondTemp = '';
        if (i != str.length - 1) secondTemp = str.substring(i + 1, i + 2);
        else secondTemp = '';

        k++;
        switch (firstTemp) {
            case 'M':
                result += 1000;
                break;
            case 'D':
                if (secondTemp == 'M') result += 500;
                else result += 500;
                break;
            case 'C':
                if (secondTemp == 'D') {
                    result += 400;
                    i++;
                } else if (secondTemp == 'M') {
                    result += 900;
                    i++;
                } else result += 100;
                break;
            case 'L':
                if (secondTemp == 'C') {
                    result += 50;
                    i++;
                } else if (secondTemp == 'D') {
                    result += 450;
                    i++;
                } else if (secondTemp == 'M') {
                    result += 950;
                    i++;
                } else result += 50;
                break;
            case 'X':
                if (secondTemp == 'L') {
                    result += 40;
                    i++;
                } else if (secondTemp == 'C') {
                    result += 90;
                    i++;
                } else if (secondTemp == 'D') {
                    result += 490;
                    i++;
                } else if (secondTemp == 'M') {
                    result += 990;
                    i++;
                } else result += 10;
                break;
            case 'V':
                if (secondTemp == 'X') {
                    result += 5;
                    i++;
                } else if (secondTemp == 'L') {
                    result += 45;
                    i++;
                } else if (secondTemp == 'C') {
                    result += 95;
                    i++;
                } else if (secondTemp == 'D') {
                    result += 495;
                    i++;
                } else if (secondTemp == 'M') {
                    result += 995;
                    i++;
                } else result += 5;
                break;
            case 'I':
                if (secondTemp == 'V') {
                    result += 4;
                    i++;
                } else if (secondTemp == 'X') {
                    result += 9;
                    i++;
                } else if (secondTemp == 'L') {
                    result += 49;
                    i++;
                } else if (secondTemp == 'C') {
                    result += 99;
                    i++;
                } else if (secondTemp == 'D') {
                    result += 499;
                    i++;
                } else if (secondTemp == 'M') {
                    result += 999;
                    i++;
                } else result += 1;
                break;
        }
        i += 1;
    }
    return result;
}
