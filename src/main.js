import rickAndMortyData from './data/rickandmorty/rickandmorty.js';
import {example} from './data.js';
const screen1 = document.getElementById("screen1");
const screen2 = document.getElementById("screen2");
screen2.style.display= "none";

const allInfo = rickAndMortyData.results;

// ----------------screen1--------------------------------
const btnNo = document.getElementById("no");
btnNo.addEventListener("click", function(){
    alert("You will be redirected to google");
    window.location.assign("https://www.google.com");
});

const btnYes = document.getElementById("yes");
btnYes.addEventListener("click", () =>{
    screen1.style.display= "none";
    screen2.style.display= "block";
    
    
});
example(rickAndMortyData.results);

// ----------------screen2--------------------------------
const names = allInfo.map((element)=> element.name);
console.log(names);
// const input = document.getElementById("input");
// const inputValue = input.value;
const go = document.getElementById("go");
go.addEventListener("click", ()=>{

})



// input.addEventListener("keyup", (event)=> {  
//     inputValue += event.key;
//     console.log(inputValue);
//   let namesCoindence = [];
//     for(let i = 0; i < names.length; i++){
//         if(inputValue.includes(names[i]) ){
//             if (!namesCoindence.includes(names[i]));
//             namesCoindence.push(names[i]);
//         }
//     } 
// }
