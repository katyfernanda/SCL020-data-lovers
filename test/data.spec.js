import {
  filterData,
  filterLetter,
  getNames,
  createDataNames,
  allSpecies,
  allStatus,
  allOrigin,
} from "../src/data.js";
const data = [
  {
    name: "Rick Sanchez",
    status: "Dead",
    species: "Human",
    origin: {
      name: "Earth (Evil Rick's Target Dimension)",
    },
    image:
      "https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/290.jpeg",
    episode: ["https://rickandmortyapi.com/api/episode/10"],
  },
  {
    name: "Rick Sanchez",
    status: "Alive",
    species: "Human",
    origin: {
      name: "Earth (C-137)",
    },
    image:
      "https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/1.jpeg",
    episode: [
      "https://rickandmortyapi.com/api/episode/1",
      "https://rickandmortyapi.com/api/episode/2",
      "https://rickandmortyapi.com/api/episode/3",
      "https://rickandmortyapi.com/api/episode/4",
      "https://rickandmortyapi.com/api/episode/5",
      "https://rickandmortyapi.com/api/episode/6",
      "https://rickandmortyapi.com/api/episode/7",
      "https://rickandmortyapi.com/api/episode/8",
      "https://rickandmortyapi.com/api/episode/9",
      "https://rickandmortyapi.com/api/episode/10",
      "https://rickandmortyapi.com/api/episode/11",
      "https://rickandmortyapi.com/api/episode/12",
      "https://rickandmortyapi.com/api/episode/13",
      "https://rickandmortyapi.com/api/episode/14",
      "https://rickandmortyapi.com/api/episode/15",
      "https://rickandmortyapi.com/api/episode/16",
      "https://rickandmortyapi.com/api/episode/17",
      "https://rickandmortyapi.com/api/episode/18",
      "https://rickandmortyapi.com/api/episode/19",
      "https://rickandmortyapi.com/api/episode/20",
      "https://rickandmortyapi.com/api/episode/21",
      "https://rickandmortyapi.com/api/episode/22",
      "https://rickandmortyapi.com/api/episode/23",
      "https://rickandmortyapi.com/api/episode/24",
      "https://rickandmortyapi.com/api/episode/25",
      "https://rickandmortyapi.com/api/episode/26",
      "https://rickandmortyapi.com/api/episode/27",
      "https://rickandmortyapi.com/api/episode/28",
      "https://rickandmortyapi.com/api/episode/29",
      "https://rickandmortyapi.com/api/episode/30",
      "https://rickandmortyapi.com/api/episode/31",
    ],
  },
  {
    name: "Rick Sanchez",
    status: "Dead",
    species: "Human",
    origin: {
      name: "Earth (Replacement Dimension)",
    },
    image:
      "https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/293.jpeg",
    episode: ["https://rickandmortyapi.com/api/episode/6"],
  },
  {
    name: "Albert Einstein",
    status: "Dead",
    species: "Human",
    origin: {
      name: "Earth (C-137)",
    },
    image:
      "https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/11.jpeg",
    episode: ["https://rickandmortyapi.com/api/episode/12"],
  },
  {
    name: "Alien Morty",
    status: "unknown",
    species: "Alien",
    origin: {
      name: "unknown",
    },
    image:
      "https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/14.jpeg",
    episode: ["https://rickandmortyapi.com/api/episode/10"],
  },
];

describe("test for filterData", () => {
  it("is a function", () => {
    expect(typeof filterData).toBe("function");
  });
  it("should return an array with at least 1 object", () => {
    const search = "Rick Sanchez";
    const item = [data[1]];
    const filter = "Alive";
    const filterInfo = filterData(search, data, filter);
    const filterInfoUnfiltered = filterData(search, data);
    expect(filterInfo).toEqual(item);
    expect(filterInfoUnfiltered).toHaveLength(3);
  });
});

describe("test for getNames", () => {
  it("is a function", () => {
    expect(typeof getNames).toBe("function");
  });
  it("should return an array with object", () => {
    expect(getNames(data)).toHaveLength(3);
  });
});

describe("test for filterLetter", () => {
  it("must return an array that does not contain an element", () => {
    const search = "a";
    const name = "Rick Sanchez";
    const filterByLetter = filterLetter(search, data);
    expect(filterByLetter).not.toContain(name);
  });
});

describe("test for createDataNames", () => {
  it("should return string html options ", () => {
    const names = ["Filomena", "Pancrasia"];
    const options = `<option value="${names[0]}">${names[0]}</option><option value="${names[1]}">${names[1]}</option>`;
    const dataNames = createDataNames(names);
    expect(typeof dataNames).toBe("string");
    expect(dataNames).toContain(options);
  });
});

describe("test for allSpecies", () => {
  it("should return array with species", () => {
    const twoSpecies = ["Alien", "Human"];
    const species = allSpecies(data);
    expect(species).toContain(twoSpecies[0]);
    expect(species).toHaveLength(2);
    expect(species).toEqual(twoSpecies);
  });
});

describe("test for allStatus", () => {
  it("should return array with status", () => {
    const threeStatus = ["Alive", "Dead", "unknown"];
    const status = allStatus(data);
    expect(status).toHaveLength(3);
    expect(status).toEqual(threeStatus);
  });
});
describe("test for allOrigin", () => {
  it("slould return array with planet origin", () => {
    const planetOriginData = [
      "Earth (Evil Rick's Target Dimension)",
      "Earth (C-137)",
      "Earth (Replacement Dimension)",
      "unknown",
    ];
    planetOriginData.sort();
    const origin = allOrigin(data);
    expect(origin).toHaveLength(4);
    expect(origin).toEqual(planetOriginData);
  });
});
