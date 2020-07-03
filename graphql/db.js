export const people = [
  {
    id: 1,
    name: "kim",
    age: 31,
    gender: "male",
  },
  {
    id: 2,
    name: "choi",
    age: 32,
    gender: "female",
  },
  {
    id: 3,
    name: "ahn",
    age: 33,
    gender: "male",
  },
  {
    id: 4,
    name: "lee",
    age: 34,
    gender: "male",
  },
  {
    id: 5,
    name: "koo",
    age: 35,
    gender: "female",
  },
];

export const getById = (id) => {
  const filteredPeople = people.filter((person) => id === person.id);
  return filteredPeople[0];
};
