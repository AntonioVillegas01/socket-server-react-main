class Marcadores {
    constructor() {
        this.activos = {}
    }
    agregarMarcador(marcador){
        this.activos[marcador.id] =marcador;
        return marcador;
    }

    actualizarMarcador(marcador){
        this.activos[marcador.id] = marcador;
    }

    removerMarcador(id) {
        delete this.activos[id];
    }

}

module.exports = Marcadores;
