// export const example = (papitas) => {
//   console.log(papitas);
// };

export const getNames = (allInfo) => {
  //oktest
  const names = allInfo.map((i) => i.name);
  let onlyNames = [];
  names.forEach((name) => {
    if (!onlyNames.includes(name)) {
      onlyNames.push(name);
    }
  });
  return onlyNames;
};

// referencia de nombre segun lo escrito
export const filterLetter = (search, allInfo) => {
  //oktest
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
  //oktest
  let dataNames = `<datalist id="dataNames">`;
  names.forEach(
    (name) => (dataNames += `<option value="${name}">${name}</option>`)
  );
  dataNames += `</datalist>`;
  return dataNames;
};
// filterData por nombres o nombres y lo seleccionado
export const filterData = (search, allInfo, filter) => {
  //oktest
  let dataCharacterSelected = [];
  if (filter) {
    dataCharacterSelected = allInfo.filter(
      (info) =>
        info.name.toLocaleLowerCase() == search.toLocaleLowerCase() &&
        (info.species == filter ||
          info.status == filter ||
          info.origin.name == filter)
    );
  } else {
    dataCharacterSelected = allInfo.filter(
      (info) => info.name.toLocaleLowerCase() == search.toLocaleLowerCase()
    );
  }
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
// funcion que trae los personajes segun lo seleccionado
export const selectCharacters = (select, allInfo) => {
  let machtCharacters = allInfo.filter(
    (info) =>
      info.species == select ||
      info.origin.name == select ||
      info.status == select
  );
  return machtCharacters;
};

//mostrando nonbres segun lo seleccionado---
export const lookSelect = (select, characters) => {
  const names = characters.map((character) => character.name);
  names.sort();
  let listCharacter = `<div>
  <button id="closeList">X</button>
</div><h3>${select}</h3><ul>`;
  names.forEach((character) => {
    listCharacter += `<li class="namesSelector" name="${character}">${character}</li>`;
  });
  listCharacter += `</ul>`;
  return listCharacter;
};

// ------------------------------funcion que crea cada tarjeta-------
export const createNewCard = (info) => {
  let { id, image, name, species, status, gender, origin, episode } = info;
  console.log(episode); // lo trae como un array con objetos, cada objeto es 1 episodio
  let episodes = "";
  episode.forEach(
    (ep) =>
      (episodes += `<li class="episodes">${ep.replace(
        "https://rickandmortyapi.com/api/episode/",
        ""
      )}</li>`)
  );
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
     <div id="statisticsEpisodes">
     </div>
  </div>`;
  return structureCard;
};
//traer todos lo episodios
//contarlos
//contar los episodios que tiene el porcentaje
//crear el valor
//funcion que trae los episodios no repetidos
export const count = (data) => {
  return data.length;
};
export const numberEpisodes = (allInfo) => {
  const allEpisodes = allInfo.map((character) => character.episode);
  let totalEpisodes = [];
  allEpisodes.forEach((episodes) => {
    episodes.forEach((episode) => {
      if (!totalEpisodes.includes(episode)) {
        totalEpisodes.push(episode);
      }
    });
  });
  return totalEpisodes.length;
};
export const episodeStatistics = (countEpisodeCharacter, countEpisodes) => {
  const staticts = ((countEpisodeCharacter * 100) / countEpisodes).toFixed();
  return staticts;
};
