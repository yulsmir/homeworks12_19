let a;
a = prompt("Сколько лет вы у нас работаете?");
if (a > 0 && a < 3) {
    alert("Надбавка 0%")
} else if (a >= 3 && a < 10) {
    alert("Надбавка 10%")
} else if (a >= 10 && a < 20) {
    alert("Надбавка 20%")
} else if (a >= 20) {
    alert("Надбавка 25%")
} else {
    alert("Неверное значение")
}