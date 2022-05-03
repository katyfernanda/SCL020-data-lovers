export const example = (papitas) => {
  console.log(papitas);
};

export const anotherExample = () => {
  return "OMG";
};

export const filterData = (search, allInfo) => {
  let dataCharacterSelected = [];
  console.log(search);
  dataCharacterSelected = allInfo.filter(
    (info) => info.name.toLocaleLowerCase() == search.toLocaleLowerCase()
  );
  return dataCharacterSelected;
};
