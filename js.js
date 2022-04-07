function aaa (){
    alert('a')
}
window.onload = function () {
    var example2 = new Vue({
        el: '#overview',
        data: {
            criterioPesquisa: ""
        },
        // define métodos dentro do objeto `methods`
        methods: {
            teste: function (event) {
                this.criterioPesquisa = "";
            }
        }
    })
}
  