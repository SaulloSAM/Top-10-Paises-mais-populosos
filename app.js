const app = new Vue({
    el: "#app",
    data: {
        populacao: { },

        mostrarPosicao: true,
        mostrarPais: true,
        mostrarPopulacao: true,
        mostrarData: true,

        typeOrder: "DESC"
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
        },
        mostrarOcultar (e) {
            id = e.srcElement.id;
            elemento = document.getElementById(id).checked;            
            if (id == "posicao") { this.mostrarPosicao = !this.mostrarPosicao }
            if (id == "pais") { this.mostrarPais = !this.mostrarPais }
            if (id == "populacao") { this.mostrarPopulacao = !this.mostrarPopulacao }
            if (id == "data") { this.mostrarData = !this.mostrarData }
        },
        addPais () {
            let data = new Date;
            this.populacao.push({"pais": "Novo", "populacao": 0, "posicao": 0, "data": data.getUTCFullYear()});
        }
    }
});

// Iniciar o OBJ app.
app.init();

// Functions
function ordenar (lista, chave, ordem) {
    return lista.sort(function(a, b) {
        var x = a[chave]; var y = b[chave];
        if (ordem === 'ASC' ) { return ((x < y) ? -1 : ((x > y) ? 1 : 0)); }
        if (ordem === 'DESC') { return ((x > y) ? -1 : ((x < y) ? 1 : 0)); }
    });
}