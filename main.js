"use strict";

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

let console2 = document.querySelector(".console2");
let console1 =  document.querySelector(".console1");

let text_console2 = "Actually was back in the irc days. \n Yep, were having encryption. \n"
let text_console1 = "Old school chatting never have been easier before! \n But were having encryption."

const console1printMessages = async (text) => {
    
    for (let message of text.split("\n")) {
        console1.innerHTML += "<p>" + message + "</p>";
        await sleep(5000);
    }
};

const console2printMessages = async (text) => {
    await sleep(3000);
    for (let message of text.split("\n")) {
        console2.innerHTML += "<p>" + message + "</p>";
        await sleep(5000);
    }
};
console1printMessages(text_console1);
console2printMessages(text_console2);


