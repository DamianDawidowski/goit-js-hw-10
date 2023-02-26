import './css/styles.css';
import { fetchCountries } from './fetchCountries';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
// import  './fetchCountries';
const DEBOUNCE_DELAY = 500;

const input = document.querySelector('input');
const countryList = document.querySelector('.country-list');
const countryDetails = document.querySelector('.country-info');
//  console.log(input);

input.addEventListener(
  'input',
  debounce(() => {
    fetchCountries(`${input.value}`)
      .then(users => {
        if (users.length > 10) {
          Notiflix.Notify.info(
            'Too many matches found. Please enter a more specific name.'
          );
          return;
        }
         else if (users.length >2) {
          //  console.log(`users are: ${users.length}`);
           renderUserList(users);
        }
        else {
          renderSingle(users);
        }
      })
      .catch(error => {
        Notiflix.Notify.failure(`Oops, there is no country with that name`);
      }
        
        
        
        );

    //   console.log(`${input.value}`);
  }, DEBOUNCE_DELAY)
);

function renderUserList(users) {
  const markup = users
    .map(user => {
      // console.log(`flag is: ${user.flags.svg}`);
      return `<li class="eachCountry"><img class="eachFlag" width =20 height=15 src=${user.flags.svg} />
      <p class="eachName">${user.name}</p>
      </li>
      `;
    })
    .join('');
  countryList.innerHTML = markup;
}

function renderSingle(users) {
  const markup = users
    .map(user => {
      // console.log(`flag is: ${user.flags.svg}`);
      return `<li class="eachCountry"><img class="eachFlag" width =20 height=15 src=${user.flags.svg} />
      <p class="eachName">${user.name}</p>
      </li>
      `;
    })
    .join('');
  countryList.innerHTML = markup;
}






console.log(`country list is: ${countryList}`);

// fetchCountries('states');
