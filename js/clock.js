const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minute = String(date.getMinutes()).padStart(2, "0");
    //const seconds = String(date.getSeconds()).padStart(2, "0");
    
    if (hours >= 13) { // 오후 일때
        clock.innerHTML = `PM <br> ${hours - 12}:${minute}`;
    } else if(hours == 12) {
        clock.innerHTML = `PM <br> ${hours}:${minute}`;
    } else {
        clock.innerHTML = `AM <br> ${hours}:${minute}`;
    }
    
}

getClock();
setInterval(getClock, 1000);