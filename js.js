window.onload = function () {
    var example2 = new Vue({
        el: '#ossoPesquisa',
        data: {
            criterioPesquisa: "",
            apresentaMusica: "none",
            apresentaPlaylist: "inline"
        },
        // define métodos dentro do objeto `methods`
        methods: {
            adicionaMusica: function (event) {
                this.apresentaMusica = "inline";
                this.apresentaPlaylist = "none";
            },
            voltaPlaylist: function (event) {
                this.apresentaPlaylist = "inline";
                this.apresentaMusica = "none";
            },
            escreveuMusica: function (event) {
              console.log(this.criterioPesquisa.length);
              if(this.criterioPesquisa.length > 5) {
                pesquisar(this.criterioPesquisa);
              }
            }
        }
    })
}

  function pesquisar(criterioPesquisa){
    carregaCliente(criterioPesquisa);
  }

  function carregaCliente(criterioPesquisa) {
    gapi.client.setApiKey("AIzaSyD1LnJfUsRtYAn9wMTMVdAqDi_TbKayWBM");
    return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
        .then(function() { console.log("GAPI client loaded for API"); execute(criterioPesquisa); },
              function(err) { console.error("Error loading GAPI client for API", err); });
  }
  // Make sure the client is loaded and sign-in is complete before calling this method.
  function execute(criterioPesquisa) {
    return gapi.client.youtube.search.list({
      "part": [
        "snippet"
      ],
      "maxResults": 25,
      "q": criterioPesquisa
    })
        .then(function(response) {
                // Handle the results here (response.result has the parsed body).
                console.log("Response", response);
              },
              function(err) { console.error("Execute error", err); });
  }
  gapi.load("client:auth2", function() {
    gapi.auth2.init({client_id: "385593004580-mga014j8a3f3aeb01dh57m1b2f2pldsc.apps.googleusercontent.com"});
  });