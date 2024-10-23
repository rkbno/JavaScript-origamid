// fetch('https://pokeapi.co/api/v2/pokemon/1')
// .then(r => r.json())
// .then(pokemon => {
//   console.log(pokemon)
// })


const url = 'https://jsonplaceholder.typicode.com/posts/2';
const options = {
  method: 'HEAD',

}

fetch (url, options)
.then(r => console.log(r));
// .then(json => console.log(json)))