import uniqueRandomArray from "unique-random-array";
import countries from "./data/countries.json";

console.log(countries.length);

module.exports = {
  all: countries,
  random: uniqueRandomArray(countries)
};
