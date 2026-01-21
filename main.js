"use strict";

let logo = document.querySelector(".change-theme");
let background = document.querySelector(".all")
let main = document.querySelector(".main-colon")
let textes = document.querySelectorAll("p, h1, h2 a");

logo.addEventListener("click", (event) => {
    event.preventDefault();

    textes.forEach(el => {
        el.style.color = "white";
    });
    background.style.backgroundColor = "black"
    main.style.backgroundColor = "black"
});

checkPort('http://example.com', 0o317);

async function checkPort(url, port) {
    try {
        const response = await fetch(`${url}:${port}`, {
            method: 'GET',
            mode: 'no-cors'
        });
        console.log(`Port ${port} on ${url} is open.`);
        return true;
    } catch (error) {
        console.log(`Port ${port} on ${url} is closed or unreachable.`);
        return false;
    }
}

