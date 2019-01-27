import uniqueRandomArray from "unique-random-array";
import countries from "./data/countries.json";

module.exports = {
  all: countries,
  random: uniqueRandomArray(countries)
};
