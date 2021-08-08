const clock = document.querySelector("h2#clock");

//interval 매일 일어나야 하는 무언가.
//Date Object
//padStart(paddingstart)
//padStart(2, " ");
function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);