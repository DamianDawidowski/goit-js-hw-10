import './css/styles.css';
import { fetchCountries } from './fetchCountries';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
import { forEach } from 'lodash';
// import  './fetchCountries';
const DEBOUNCE_DELAY = 500;

const input = document.querySelector('input');
const countryList = document.querySelector('.country-list');
const countryDetails = document.querySelector('.country-info');
//  console.log(input);

input.addEventListener(
  'input',
  debounce(() => {
    if (!input.value.trim()) {
      return;
    }

    fetchCountries(`${input.value.trim()}`)
      .then(countries => {
        if (countries.length > 10) {
          Notiflix.Notify.info(
            'Too many matches found. Please enter a more specific name.'
          );
          return;
        } else if (countries.length > 2) {
          //  console.log(`countries are: ${countries.length}`);
          rendercountryList(countries);
        } else if (countries.length == 1) {
          renderSingle(countries);
        }
      })
      .catch(error => {
        Notiflix.Notify.failure(`Oops, there is no country with that name`);
      });

    //   console.log(`${input.value}`);
  }, DEBOUNCE_DELAY)
);

function rendercountryList(countries) {
  const markup = countries
    .map(country => {
      // console.log(`flag is: ${country.flags.svg}`);
      return `<li class="eachCountry"><img class="eachFlag" width =20 height=15 src=${country.flags.svg} />
      <p class="eachName">${country.name}</p>
      </li>
      `;
    })
    .join('');
  countryList.innerHTML = markup;
  countryDetails.innerHTML = '';
}

function renderSingle(countries) {
  const markup = countries
    .map(country => {
      // console.log(`flag is: ${country.flags.svg}`);
      let extraHTML = `<div class="eachCountry"><img class="eachFlag" width =22 height=16 src=${country.flags.svg} />
      <h2 class="singleCountryName">${country.name}</h2>
      </div>
    <div class="eachInfo"> <span class="eachHighlight">Capital: </span><p> ${country.capital}</p></div>
     <div class="eachInfo"> <span class="eachHighlight">Capital: </span><p> ${country.population}</p></div>
      <div class="eachInfo"> <p class="eachHighlight">Languages: </p><span>${country.languages[0].name}`;

      for (let i = 1; i < country.languages.length - 1; i++) {
        extraHTML = extraHTML + `, ${country.languages[i].name}`;
      }

      extraHTML = extraHTML + ` </span></div>`;
      return extraHTML;
    })

    .join('');
  countryDetails.innerHTML = markup;
  countryList.innerHTML = '';
}

console.log(`country list is: ${countryList}`);

// fetchCountries('states');
