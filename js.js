window.onload = function () {

    function init() {
        gapi.load('auth2', function() {
            client_id: 'AIzaSyD1LnJfUsRtYAn9wMTMVdAqDi_TbKayWBM'
        });
      }

      
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
            }
        }
    })
}

// After the API loads, call a function to enable the search box.
function handleAPILoaded() {
    $('#search-button').attr('disabled', false);
  }
  
  // Search for a specified string.
  function search() {
    var q = $('#barraPesquisa').val();
    var request = gapi.client.youtube.search.list({
      q: q,
      part: 'snippet'
    });
  
    request.execute(function(response) {
      var str = JSON.stringify(response.result);
      $('#resultadoPesquisa').html('<pre>' + str + '</pre>');
    });
  }