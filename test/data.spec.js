import { filterData, getNames } from "../src/data.js";
const data = [
  {
    name: "Rick Sanchez",
    status: "Dead",
    species: "Human",
    gender: "Male",
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
    gender: "Male",
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

    gender: "Male",
    origin: {
      name: "Earth (Replacement Dimension)",
    },
    location: {
      name: "Earth (Replacement Dimension)",
    },
    image:
      "https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/293.jpeg",
    episode: ["https://rickandmortyapi.com/api/episode/6"],
  },
];

describe("test for filterData", () => {
  it("is a function", () => {
    expect(typeof filterData).toBe("function");
  });
  it("should return an array with at least 1 object", () => {
    let search = "Rick Sanchez";
    let item = [data[1]];
    let filter = "Alive";
    expect(filterData(search, data, filter)).toEqual(item);
  });
});
describe("test for getNames", () => {
  it("is a function", () => {
    expect(typeof getNames).toBe("function");
  });
  it("should return an array with object", () => {
    let names = ["Rick Sanchez"];
    expect(getNames(data)).toEqual(names);
  });
});
