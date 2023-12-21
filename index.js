//const eminem = "https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem

window.onload = function () {
  fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem", {
    method: "GET",
    //headers
  })
    .then(function (response) {
      console.log(response);
      if (response.ok) {
        return response.json();
      } else {
        //errore
      }
    })
    .then(function (canzoni) {
      console.log(canzoni);
    });
};
