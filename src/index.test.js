const microCountries = require(".");

test("return the list of all countries", () => {
  expect(containsAllCountries(microCountries.all)).toBe(true);
});

test("returns a random country from the list", () => {
  expect(containsCountry(microCountries.random())).toBe(true);
});

function containsAllCountries(countries) {
  return countries.every(country => {
    return typeof country.name.common === "string";
  });
}

function containsCountry(country) {
  return microCountries.all.some(item => {
    return item.name.common === country.name.common;
  });
}
