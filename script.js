document.write('Задание 1. Числа от 1 до 50 и от 35 до 8.<br>');
let i;
for (i=1; i<=50; i++){
    document.write(i, ', ');
}
document.write('<br>');
for (i=35; i>=8; i--){
    document.write(i, ', ');
}
document.write('<br>');

document.write('<br>Задание 2. Столбец чисел от 89 до 11.<br>');
i = 89;
while (i >= 11){
    document.write(i, '<br>');
    i--;
}

document.write('<br>Задание 3. Сумма чисел от 0 до 100.<br>');
let sum=0;
for (i=0; i <= 100; i++) {
    sum += i;
}
document.write(sum, '<br>');

document.write('<br>Задание 4. Сумма чисел в каждом числе от 1 до 5.<br>');
let n;
for (n=1; n <= 5; n++) {
    let sum1 = 0;
    for (i=0; i<=n; i++){
        sum1 += i;
    }
    document.write(sum1, '<br>');
}

document.write('<br>Задание 5. Выведите чётные числа от 8 до 56. Через while и for.<br>');
i = 8;
while (i <= 56){
    if (i % 2 === 0) {
        document.write(i, ', ');
    } 
    i++;
}
document.write('<br>');
for (i = 8; i <= 56; i++){
    if (i % 2 === 0) {
        document.write(i, ', ');
    } 
}

document.write('<br><br>Задание 6. Полная таблица умножения.<br>');
let j;
for (i=2; i<=10; i++){
    for (j=2; j<=10; j++){
        document.write(i, '*', j, '=', i*j  , '<br>');
    }
    document.write('<br>');
}

document.write('Задание 7. Деление 1000 на 2.<br>');
n = 1000;
for (i=1; i<=Infinity; i++){
    n /= 2;
    if (n < 50){
        break;
    }
}
document.write('Получилось число ', n, '. Количество итераций - ', i, '<br>');

document.write('<br>Задание 8. Ищем 0 или пробел.<br>');
sum = 0;
for (i=1; i<=Infinity; i++){
    num = prompt('Введи любое число для нахождения суммы и среднего значения');
    if (isNaN(num)){
        document.write('Вы ввели не число<br>');
        break;
    }
    sum += +num;
    if (num == false) {
        let average = sum / (i-1);
        document.write('Сумма: ', sum, '. Среднее значение: ',  average, '.<br>');
        break;
    }
}

document.write('<br>Задание 9. Ищем самое большое и самое маленькое число в строке.<br>');
let str = '4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57';

