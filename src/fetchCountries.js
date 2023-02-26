// export fetchCountries();

//   export function fetchCountries(stateName)  {
//    return fetch(
//       // 'https://restcountries.com/v2//name/states?fields=languages'
//       //   'https://restcountries.com/v2/lang/es'
//       `https://restcountries.com/v2//name/${stateName}?fields=name,capital,population,flags,languages`
//     )
//       //   .then(response => response.json())
//       //     .then(json => console.log(json));
//       .then(response => response.json())
//         .then(json => console.log(json));
//     //   return response.json();
// }XXXXXXXXXXXXX
 
 
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


//XXXXXXXXXXXXXX
//   function fetchFlag(stateName) {
//     return fetch(
//       // `https://restcountries.com/v2//name/${stateName}?fields=languages`
//       `https://restcountries.com/v2/lang/es`
//     )
//       .then(response => response.json())
//       .then(json => console.log(json));;
//   }


// fetchFlag('USA');



// const fetchUsersBtn = document.querySelector('.btn');
// const userList = document.querySelector('.user-list');

// fetchUsersBtn.addEventListener('click', () => {
//   fetchUsers()
//     .then(users => renderUserList(users))
//     .catch(error => console.log(error));
// });

// function fetchUsers() {
//   return fetch(
//     'https://jsonplaceholder.typicode.com/users?_limit=7&_sort=name'
//   ).then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   });
// }

// function renderUserList(users) {
//   const markup = users
//     .map(user => {
//       return `
//           <li>
//             <p><b>Name</b>: ${user.name}</p>
//             <p><b>Email</b>: ${user.email}</p>
//             <p><b>Company</b>: ${user.company.name}</p>
//           </li>
//       `;
//     })
//     .join('');
//   userList.innerHTML = markup;
// }






