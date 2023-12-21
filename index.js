//const eminem = "https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem

window.onload = function () {
  fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem", {
    method: "GET",
    //headers
  })
    .then(function (response) {
      if (response.ok) {
        return response.json();
      } else {
        throw response.satus;
      }
    })
    .then(function (canzoni) {
      const row = document.querySelector(".row");
      for (const song of canzoni) {
        row.innerHTML = `<div class="card" style="width: 18rem;">
  <img src="" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${song.title}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`;
      }
    })
    .catch(function (err) {
      console.error(err);
    });
};
