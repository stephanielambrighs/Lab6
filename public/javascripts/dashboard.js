primus = Primus.connect("", {
    reconnect: {
        max: Infinity // Number: The max delay before we try to reconnect.
      , min: 500 // Number: The minimum delay before we try reconnect.
      , retries: 10 // Number: How many times we should try to reconnect.
    }
});

document.querySelector("div").addEventListener("click", function(e){
  // let docent = document.querySelector(".docent");
  let docent = e.target.parentElement.getAttribute("class");
  console.log(docent);
  
  primus.write({
    name: docent
  });

  e.preventDefault();
});


