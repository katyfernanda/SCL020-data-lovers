export const example = (papitas) => {
  console.log(papitas);
};

// funcion que filtra por nombre
export const filterData = (search, allInfo) => {
  let dataCharacterSelected = [];
  console.log(search);
  dataCharacterSelected = allInfo.filter(
    (info) => info.name.toLocaleLowerCase() == search.toLocaleLowerCase()
  );
  return dataCharacterSelected;
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
  return onlyStatus;
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

export const lookSelector = (statusSelect, characters) => {
  const namesAndStatus = characters.map((character) => character.name);
  namesAndStatus.sort();
  let listCharacter = `<h3>${statusSelect}</h3><ul>`;
  namesAndStatus.forEach((character) => {
    listCharacter += `<li>${character}</li>`;
  });
  listCharacter += `</ul>`;
  return listCharacter;
};

// export const allStatus = (allInfo) => {
//   const infoAllStatus = allInfo.map((i) => i.status);
//   let onlyStatus = [];
//   infoAllStatus.forEach((element) => {
//     if (!onlyStatus.includes(element)) {
//       onlyStatus.push(element);
//     }
//   });
//   return onlyStatus;
// };
