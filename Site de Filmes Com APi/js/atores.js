/*Pesquisar*/

const API_KEY = 'api_key=2ab32251dfefeea0f1af49531c03b292';
const API_URL = `https://api.themoviedb.org/3/person/popular?${API_KEY}`;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';

const main = document.getElementById('main');

pesquisarFilmes(API_URL);

function pesquisarFilmes(url)
{
  fetch(url).then(Response => Response.json()).then(data => {console.log(data.results);mostrarFilmes(data.results)});
  
}

function mostrarFilmes(data)
{
  main.innerHTML = "";

  data.forEach(filme => 
  {
      const {name, profile_path, vote_average, overview, popularity} = filme;
      const movieEl = document.createElement('div');
      movieEl.classList.add('filme');
      movieEl.innerHTML =
        ` 
        <div class="filme-principal">
        <img src="${IMG_URL+profile_path}" alt="${name}" class="image-card">
        <div class="inf-filme">
            <h3>${name}</h3>
        </div>
        </div>
        `
       main.appendChild(movieEl);
  });
}

