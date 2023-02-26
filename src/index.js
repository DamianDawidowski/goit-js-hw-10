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
         .then(users => renderUserList(users))
         .catch(error => console.log(error));
      
      
      
   
    //   console.log(`${input.value}`);
      
  }, DEBOUNCE_DELAY)
);

 function renderUserList(users) {
   const markup = users
       .map(user => {
         console.log(`flag is: ${user.flags }`);
       return `
          <li class="eachCountry"><p class="eachName">${user.name}</p>
          <img class="eachFlag" width = 20 src=${user.flags.svg}   />
         </li>
      `;
     })
     .join('');
   countryList.innerHTML = markup;
 }
console.log(`country list is: ${countryList}`);

// fetchCountries('states');









 