function aaa (){
    alert('a')
}
window.onload = function () {
    var example2 = new Vue({
        el: '#example',
        data: {
            criterioPesquisa: 'Vue.js'
        },
        // define métodos dentro do objeto `methods`
        methods: {
            teste: function (event) {
                criterioPesquisa = "";
            }
        }
    })
}
  