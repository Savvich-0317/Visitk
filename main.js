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

fetch('https://api.ipify.org?format=json')
  .then(response => response.json())
  .then(data => {
    document.getElementById('ip-address').textContent = data.ip;
  })
  .catch(error => {
    console.error('Error fetching IP:', error);
    document.getElementById('ip-address').textContent = 'Could not fetch IP';
  });


