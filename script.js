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
