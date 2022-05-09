import rickAndMortyData from "./data/rickandmorty/rickandmorty.js";
import {
  filterData,
  allSpecies,
  allStatus,
  characterSpecies,
  charactersStatus,
  clean,
  lookSelectSpecies,
  lookSelector,
  filterLetter,
  createDataNames,
} from "./data.js";
// import {example} from './data.js';
const screen1 = document.getElementById("screen1");
const screen2 = document.getElementById("screen2");
const screenCard = document.getElementById("screenCard");
const cardCharacter = document.getElementById("cardCharacter");
const containerStatus = document.getElementById("status");
screen2.style.display = "none";
screenCard.style.display = "none";

const allInfo = rickAndMortyData.results;

// ----------------screen1--------------------------------
const btnNo = document.getElementById("no");
btnNo.addEventListener("click", function () {
  alert("You will be redirected to google");
  window.location.assign("https://www.google.com");
});

const btnYes = document.getElementById("yes");
btnYes.addEventListener("click", () => {
  screen1.style.display = "none";
  screen2.style.display = "block";
  // -----------al seleccionar yes se cargan los selectores

  //selector por Species

  const onlySpecies = allSpecies(allInfo);
  let optionSpecies = `<option value="nothing" disabled selected>Select by Species</option>`;
  onlySpecies.forEach(
    (species) =>
      (optionSpecies += `<option value= "${species}">${species}</option>`)
  );
  document.getElementById("selSpecies").innerHTML = optionSpecies;
  // ----selector por planeta de origen
  // ----selector por estado
  const onlyStatus = allStatus(allInfo);
  let optionStatus = `<option value="nothing" disabled selected>Select by Status</option>`;
  onlyStatus.forEach(
    (status) =>
      (optionStatus += `<option value= "${status}">${status}</option><br>`)
  );
  containerStatus.innerHTML = optionStatus;
});

// ----------------screen2-----------------------------------
const go = document.getElementById("goName");
const closed = document.getElementById("closed");
const messageError = document.getElementById("messageError");
const searchByName = document.getElementById("searchByName");
const lookDataNames = document.getElementById("lookDataNames");

let dataCharacterSelected = [];
searchByName.addEventListener("input", () => {
  let letterKeyUp = searchByName.value;
  let names = filterLetter(letterKeyUp, allInfo);
  lookDataNames.innerHTML = createDataNames(names);
});

go.addEventListener("click", (event) => {
  event.preventDefault();

  dataCharacterSelected = filterData(searchByName.value, allInfo);
  console.log(dataCharacterSelected);
  if (dataCharacterSelected.length === 0) {
    messageError.innerHTML = "Name not found, try again";
  } else {
    screen2.style.display = "none";
    screenCard.style.display = "block";
    let allCharacters = "";
    dataCharacterSelected.forEach((character) => {
      const newCard = createNewCard(character);
      allCharacters += newCard;
    });
    document.getElementById("cardCharacter").innerHTML = allCharacters;
  }
});
// -------funcion para mostrar los estados segun lo seleccionado------
const status = document.getElementById("status");
const origin = document.getElementById("origin");
const species = document.getElementById("selSpecies");

origin.addEventListener("change", () => {
  clean(status, species);
});
// --------ver los personajes en (listAsSelected) que corresponden a la especie seleccionada
species.addEventListener("change", (event) => {
  clean(origin, status);
  let speciesValue = event.target.value;
  let finalQuestSpecies = characterSpecies(speciesValue, allInfo);
  document.getElementById("listAsSelected").innerHTML = lookSelectSpecies(
    speciesValue,
    finalQuestSpecies
  );
});
// ----------ver los estados

status.addEventListener("change", (event) => {
  clean(origin, species);
  let statusValue = event.target.value;
  let finalQuestStatus = charactersStatus(statusValue, allInfo); //todos lo personajes correscondiente al valor
  document.getElementById("listAsSelected").innerHTML = lookSelector(
    statusValue,
    finalQuestStatus
  );
});
// ------------------------------funcion que crea cada tarjeta-------
const createNewCard = (info) => {
  let { id, image, name, species, status, gender, origin, episode } = info;
  console.log(episode); // lo trae como un array con objetos, cada objeto es 1 episodio
  let episodes = "";
  episode.forEach((ep) => (episodes += `<li>${ep}</li>`));
  console.log(episodes);
  const structureCard = `<div id="cardCharacter">
    <div>
    <img id="image-${id}" src="${image}">
    </div>
     <ul>
        <li id="name-${id}">Name: ${name}</li>
        <li id="status-${id}">Status: ${status}</li>
        <li id="species-${id}">Specie: ${species}</li>
        <li id="gender-${id}">Gender: ${gender}</li>
        <li id="origin-${id}">Origin planet: ${origin.name}</li>
        <li id="allEpisode">Episodes:<ul id="listEpisode">${episodes}</ul></li>
     </ul>
  </div>`;
  return structureCard;
};

// ------ close cardCharacter button----------

closed.addEventListener("click", (event) => {
  event.preventDefault();
  screen2.style.display = "block";
  screenCard.style.display = "none";
  messageError.style.display = "none";
  cardCharacter.innerHTML = "";
});
