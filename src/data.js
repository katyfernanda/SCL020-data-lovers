export const example = (papitas) => {
  console.log(papitas);
};

const getNames = (allInfo) => {
  const names = allInfo.map((i) => i.name);
  let onlyNames = [];
  names.forEach((name) => {
    if (!onlyNames.includes(name)) {
      onlyNames.push(name);
    }
  });
  return onlyNames;
};

// funcion que filtra por nombre segun lo escrito
export const filterLetter = (search, allInfo) => {
  let dataCharacterSelected = [];
  const names = getNames(allInfo);
  names.forEach((name) => {
    if (
      name.toLocaleLowerCase().indexOf(`${search}`.toLocaleLowerCase(), 0) == 0
    ) {
      dataCharacterSelected.push(name);
    }
  });
  dataCharacterSelected.sort();
  return dataCharacterSelected;
};

export const createDataNames = (names) => {
  let dataNames = `<datalist id="dataNames">`;
  names.forEach(
    (name) => (dataNames += `<option value="${name}">${name}</option>`)
  );
  dataNames += `</datalist>`;
  return dataNames;
};

// iterrar la info, traer todos los nombres no repetidos
// si coincide la cadena en infoname de manera ordenada con el search
// guardo el objeto

export const filterData = (search, allInfo) => {
  let dataCharacterSelected = [];
  dataCharacterSelected = allInfo.filter(
    (info) => info.name.toLocaleLowerCase() == search.toLocaleLowerCase()
  );
  return dataCharacterSelected;
};
// funcion que trae las especies no repetidas
export const allSpecies = (allInfo) => {
  const allInfoSpecies = allInfo.map((i) => i.species);
  let onlySpecies = [];
  allInfoSpecies.forEach((element) => {
    if (!onlySpecies.includes(element)) {
      onlySpecies.push(element);
    }
  });
  onlySpecies.sort();
  return onlySpecies;
};
// funcion que trae los estados no repetidos
export const allStatus = (allInfo) => {
  const infoAllStatus = allInfo.map((i) => i.status);
  let onlyStatus = [];
  infoAllStatus.forEach((element) => {
    if (!onlyStatus.includes(element)) {
      onlyStatus.push(element);
    }
  });
  onlyStatus.sort();
  return onlyStatus;
};
//funcion que trae los planetas de origen no repetidos
export const allOrigin = (allInfo) => {
  const infoAllOrigin = allInfo.map((i) => i.origin.name);
  let onlyOrigin = [];
  infoAllOrigin.forEach((element) => {
    if (!onlyOrigin.includes(element)) {
      onlyOrigin.push(element);
    }
  });
  onlyOrigin.sort();
  return onlyOrigin;
};
// funcion que trae los datos segun la especie seleccionada
export const characterSpecies = (speciesSelect, allInfo) => {
  let machtCharacters = allInfo.filter((info) => info.species == speciesSelect);
  return machtCharacters;
};
// funcion que trae los datos segun el planeta seleccionado
export const characterOrigin = (planetSelect, allInfo) => {
  let machtCharacters = allInfo.filter(
    (info) => info.origin.name == planetSelect
  );
  return machtCharacters;
};
// funcion que me trae los datos segun el estado seleccionado
export const charactersStatus = (statusSelect, allInfo) => {
  let machtCharacters = allInfo.filter((info) => info.status == statusSelect);
  return machtCharacters;
};
// limpiar los select si eligen otro
export const clean = (sel1, sel2) => {
  sel1.value = sel1.options[0].value;
  sel2.value = sel2.options[0].value;
};
//mostrando nonbres segun lo seleccionado
export const lookSelectSpecies = (speciesSelect, characters) => {
  const namesAndSpecies = characters.map((character) => character.name);
  namesAndSpecies.sort();
  let listCharacter = `<h3>${speciesSelect}</h3><ul>`;
  namesAndSpecies.forEach((character) => {
    listCharacter += `<li>${character}</li>`;
  });
  listCharacter += `</ul>`;
  return listCharacter;
};
export const lookSelectorStatus = (statusSelect, characters) => {
  const namesAndStatus = characters.map((character) => character.name);
  namesAndStatus.sort();
  let listCharacter = `<h3>${statusSelect}</h3><ul>`;
  namesAndStatus.forEach((character) => {
    listCharacter += `<li>${character}</li>`;
  });
  listCharacter += `</ul>`;
  return listCharacter;
};
export const lookSelectorOrigin = (originSelect, characters) => {
  const namesAndOrigin = characters.map((character) => character.name);
  namesAndOrigin.sort();
  let listCharacter = `<h3>${originSelect}</h3><ul>`;
  namesAndOrigin.forEach((character) => {
    listCharacter += `<li>${character}</li>`;
  });
  listCharacter += `</ul>`;
  return listCharacter;
};
