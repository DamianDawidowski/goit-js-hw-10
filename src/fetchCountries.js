export function fetchCountries(stateName) {
  return fetch(
    `https://restcountries.com/v2//name/${stateName}?fields=name,capital,population,flags,languages`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
