/*Pesquisar*/

const API_KEY = 'api_key=2ab32251dfefeea0f1af49531c03b292';
const API_URL = `https://api.themoviedb.org/3/movie/now_playing?${API_KEY}`;
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
      const {title, poster_path, vote_average, overview, release_date, id} = filme;
      const movieEl = document.createElement('div');
      movieEl.classList.add('filme');
      movieEl.innerHTML =
        ` 
        <div class="filme-principal">
        <img src="${IMG_URL+poster_path}" alt="${title}" class="image-card">
        <div class="inf-filme">
            <h3>${title}</h3>
            <span class="${vote_average}">${vote_average}</span>
        </div>
        <div class="descricao">
            <p class="sobre"><b>Sobre</b></p>
            ${overview}
            <span class="data">Data: ${release_date}</span>
            <a href="https://api.themoviedb.org/3/movie/${id}?${API_KEY}">LINK</a>
        </div>
        </div>
        `
       main.appendChild(movieEl);
  });
}

