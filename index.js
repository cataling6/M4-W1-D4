//const eminem = "https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem
let cover = [];
let title = [];
const fetchSongs = () => {
  fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem")
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw response.satus;
      }
    })
    .then((canzoni) => {
      console.log("dica");
      const riga = document.querySelector("#eminemSection");
      // for (const song of canzoni.data) {
      //   riga.innerHTML += `<div class="" id="card-${song}">
      //   <img src="${song.album.cover}" class="card-img-top" alt="album">
      //   <div class="card-body">
      //     <h5 class="card-title">${song.title}</h5>
      //     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      //     <a href="#" class="btn btn-primary">${song.type}</a>
      //   </div>
      // </div>`;
      // }

      for (i = 0; i < canzoni.data.length; i++) {
        //mi aggiungo gli album nell'array da mostrare quando clicco sul tasto della lista, per poi eliminare i duplicati sotto con rimuoviDuplicati()
        cover[i] = canzoni.data[i].album.cover_big;
        title[i] = canzoni.data[i].album.title;
        riga.innerHTML += `<div  id="card-${i}"  class="card" >
        <img src="${canzoni.data[i].album.cover_big}"class="card-img-top "  alt="album">
         <div class="card-body">
            <h5 class="card-title text-dark">Album: <span class="font-weight-light">${canzoni.data[i].album.title}</span></h5>
            <h5 class="card-title text-dark">Song: <span  class="font-weight-light">${canzoni.data[i].title}</span></h5>
          
           <figure class="d-flex m-0">
          
           <audio controls src="${canzoni.data[i].preview}" width="200" class="d-flex align-items-end"></audio>
           
           
          </figure>
           
          </div>
       </div>`;
      }
      console.log(cover, title);
    })
    .catch((err) => {
      console.error(err);
    });
};

fetchSongs();
function rimuoviDuplicati(cover, title) {
  cover = cover.filter((item, index) => cover.indexOf(item) === index);
  title = title.filter((item, index) => title.indexOf(item) === index);

  let modal = document.querySelector("#contentList");
  for (let i = 0; i < cover.length; i++) {
    modal.innerHTML += `<div class="d-flex justify-content-between gap">
  <div>${title[i]}</div><div><img src="${cover[i]}"></div></div>`;
  }

  return modal;
}

function creaLista() {
  rimuoviDuplicati(cover, title);
}
