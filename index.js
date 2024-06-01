let son = Number(prompt("Sonni kiriting"));

if (son % 3 === 0 && son % 5 === 0) {
    alert(`${son} - Fizzbuzz`)
}
else if (son % 3 === 0) {
    alert(`${son} - Fizz`)
}
else if (son % 5 === 0) {
    alert("Buzz")
}
else {

}
