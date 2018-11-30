const app = new Vue({
    el: "#app",
    data: {
        typeOrder: "DESC",
        populacao: { }
    },
    methods: {
        init() {
            this.populacao = populacao.resultados;
        },
        ordenarPosicao() {
            this.populacao = ordenar(this.populacao, "posicao", this.typeOrder);
            this.trocarOrdem();
        },
        ordenarPais() {
            this.populacao = ordenar(this.populacao, "pais", this.typeOrder);
            this.trocarOrdem();
        },
        ordenarPopulacao() {
            this.populacao = ordenar(this.populacao, "populacao", this.typeOrder);
            this.trocarOrdem();
        },
        ordenarData() {
            this.populacao = ordenar(this.populacao, "data", this.typeOrder);
            this.trocarOrdem();
        },
        trocarOrdem() {
            let ordem = this.typeOrder;
            if (ordem == "ASC") { ordem = "DESC" }
            else if (ordem == "DESC") { ordem = "ASC" }
            else { ordem = "ASC" }
            this.typeOrder = ordem;
        }
    }
});

// 
app.init();

// Functions
function ordenar (lista, chave, ordem) {
    return lista.sort(function(a, b) {
        var x = a[chave]; var y = b[chave];
        if (ordem === 'ASC' ) { return ((x < y) ? -1 : ((x > y) ? 1 : 0)); }
        if (ordem === 'DESC') { return ((x > y) ? -1 : ((x < y) ? 1 : 0)); }
    });
}