let span_1 = document.getElementById("span_1")
let span_2 = document.getElementById("span_2")
let span_3 = document.getElementById("span_3")

let ms = 0; let s = 0; let m = 0;
function TimeFunc() {
    ms++;
    if(ms < 10) {
        span_1.innerHTML = "0" + ms;
    }
    else if(ms >= 10 && ms <= 99) {
        span_1.innerHTML = ms;
    }
    else if(ms == 100){ 
        ms = 0;
        span_1.innerHTML = "0" + ms;
        s++
    }

    if(s < 10) {
        span_2.innerHTML = "0" + s;
    }
    else if(s >= 10 && s <= 59) {
        span_2.innerHTML = s;
    }
    else if(s == 60){ 
        s = 0;
        span_2.innerHTML = "0" + s;
        m++
    }

    if(m < 10) {
        span_3.innerHTML = "0" + m;
    }
    else if(m >= 10 && m <= 59) {
        span_3.innerHTML = m;
    }
    else if(m == 60){ 
        Sbros()
    }
}

let i = 0; let t = 0;
function Timer(el) {
    i++
    if(i == 1) {
        t = setInterval(TimeFunc, 10);
        el.innerHTML = "Стоп";
    }
    if(i == 2) {
        clearInterval(t);
        el.innerHTML = "Пуск";
        i = 0;
    }
}

function Sbros() {
    clearInterval(t);
    ms = 0; s = 0; m = 0; i = 0;
    span_1.innerHTML = "0" + ms; span_2.innerHTML = "0" + s; span_3.innerHTML = "0" + m;
    document.getElementById("but_1").innerHTML = "Пуск";
}