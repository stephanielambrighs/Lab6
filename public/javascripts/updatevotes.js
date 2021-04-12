// const e = require("express");

primus = Primus.connect("", {
    reconnect: {
        max: Infinity // Number: The max delay before we try to reconnect.
      , min: 500 // Number: The minimum delay before we try reconnect.
      , retries: 10 // Number: How many times we should try to reconnect.
    }
});


primus.on('data', (data) => {
    
    let docent = data.name;
    console.log(docent);
    
    let score = Number(document.querySelector(`.${docent} .score span`).innerHTML);
    
    console.log(typeof score);
    console.log(score + 1);

    document.querySelector(`.${docent} .score span`).innerHTML = score += 1;

    
});