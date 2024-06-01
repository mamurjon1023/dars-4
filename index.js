let son = Number(prompt("Sonni kiriting"));

if ( son % 3 === 0 && son % 5 === 0) {
    alert("Fizzbuzz")
}
else if (son % 3 === 0) {
    alert("Fizz");
}
else if (son % 5 === 0) {
    alert("Buzz")
}
else if (son % 15 === 0) {
    alert("Fizzbuzz")
}