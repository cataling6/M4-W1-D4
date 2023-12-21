//const eminem = "https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem

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
      const riga = document.querySelector(".row");

      for (let song of canzoni) {
        riga.innerHTML = `<div class="card" id="card-${song}">
        <img src="" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${song.title}</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">${song.type}</a>
        </div>
      </div>`;
      }
    })
    .catch((err) => {
      console.error(err);
    });
};

fetchSongs();
