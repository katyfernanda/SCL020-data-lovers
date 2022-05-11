import rickAndMortyData from "./data/rickandmorty/rickandmorty.js";
import {
  filterData,
  allSpecies,
  allStatus,
  allOrigin,
  characterSpecies,
  charactersStatus,
  characterOrigin,
  clean,
  lookSelectSpecies,
  lookSelectorOrigin,
  lookSelectorStatus,
  filterLetter,
  createDataNames,
} from "./data.js";
// import {example} from './data.js';
const screen1 = document.getElementById("screen1");
const screen2 = document.getElementById("screen2");
const screenCard = document.getElementById("screenCard");
const cardCharacter = document.getElementById("cardCharacter");
const containerStatus = document.getElementById("status");
const listAsSelected = document.getElementById("listAsSelected");
screen2.style.display = "none";
screenCard.style.display = "none";
listAsSelected.style.display = "none";

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
  const onlyOrigin = allOrigin(allInfo);
  let optionOrigin = `<option value="nothing" disabled selected>Select by Planet Origin</option>`;
  onlyOrigin.forEach(
    (origin) =>
      (optionOrigin += `<option value= "${origin}">${origin}</option>`)
  );
  document.getElementById("selOrigin").innerHTML = optionOrigin;

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
  listAsSelected.innerHTML = "";
  resetSelects();
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

const status = document.getElementById("status");
const origin = document.getElementById("selOrigin");
const species = document.getElementById("selSpecies");
// -------ver los personajes en (listAsSelected) que corresponden al planeta de origen seleccionada
origin.addEventListener("change", (event) => {
  clean(status, species);
  let originValue = event.target.value;
  console.log(originValue);
  let finalQuestOrigin = characterOrigin(originValue, allInfo);
  document.getElementById("listAsSelected").innerHTML = lookSelectorOrigin(
    originValue,
    finalQuestOrigin
  );
  let closeList = document.getElementById("closeList");
  // -------list of characters "links"---------
  let namesSelector = document.getElementsByClassName("namesSelector");
  innerDataAndCard(namesSelector);
  listAsSelected.style.display = "block";
  eraseList(closeList);
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
  let closeList = document.getElementById("closeList");
  // -------list of characters "links"---------
  let namesSelector = document.getElementsByClassName("namesSelector");
  innerDataAndCard(namesSelector);
  listAsSelected.style.display = "block";
  eraseList(closeList);
});
// ----------ver los estados

status.addEventListener("change", (event) => {
  clean(origin, species);
  let statusValue = event.target.value;
  let finalQuestStatus = charactersStatus(statusValue, allInfo); //todos lo personajes correscondiente al valor
  document.getElementById("listAsSelected").innerHTML = lookSelectorStatus(
    statusValue,
    finalQuestStatus
  );
  let closeList = document.getElementById("closeList");
  // -------list of characters "links"---------
  let namesSelector = document.getElementsByClassName("namesSelector");
  innerDataAndCard(namesSelector);
  listAsSelected.style.display = "block";
  eraseList(closeList);
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
  resetSelects();
});
//reset valueSelect
const resetSelects = () => {
  status.value = status.options[0].value;
  origin.value = origin.options[0].value;
  species.value = species.options[0].value;
};
// button eraseList
const eraseList = (button) =>
  button.addEventListener("click", () => {
    listAsSelected.innerHTML = "";
    resetSelects();
  });
// list of characters "links" and create card
let innerDataAndCard = (namesSelector) => {
  for (let i = 0; i < namesSelector.length; i++) {
    let name = namesSelector[i];
    name.addEventListener("click", () => {
      dataCharacterSelected = filterData(name.textContent, allInfo);
      console.log(dataCharacterSelected);
      screen2.style.display = "none";
      screenCard.style.display = "block";
      listAsSelected.style.display = "none";
      let allCharacters = "";
      dataCharacterSelected.forEach((character) => {
        const newCard = createNewCard(character);
        allCharacters += newCard;
      });
      document.getElementById("cardCharacter").innerHTML = allCharacters;
    });
  }
};
