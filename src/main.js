// import { example } from './data.js';
// // import data from './data/lol/lol.js';
// import data from './data/pokemon/pokemon.js';
// // import data from './data/rickandmorty/rickandmorty.js';

// console.log(example, data);

const btnNo = document.getElementById("no");
btnNo.addEventListener("click", ()=>{
    alert("You will be redirected to google");
    window.location.assign("https://www.google.com");
});

const btnYes = document.getElementById("yes");
btnYes.addEventListener("click", () =>{
    window.location.href="./welcome.html"
})