const Marcadores = require("./Marcadores");
class Sockets {

    constructor( io ) {
        this.io = io;

        this.marcadores = new Marcadores();
        this.socketEvents();
    }

    socketEvents() {
        // On connection
        this.io.on('connection', ( socket ) => {
            // emitir activos
            socket.emit('marcadores-activos', this.marcadores.activos);

            //escuchar crear marcador nuevo
            socket.on('marcador-nuevo',  (marcador)=>{

                //Agregamos el marcador a la lista
                this.marcadores.agregarMarcador(marcador)

                //hacemos broadcast a todos los clientes conectados
                socket.broadcast.emit('marcador-nuevo', marcador)
            })



            // emite en broadcast el marcador actualizado
            socket.on('marcador-actualizado', (marcador)=> {
                this.marcadores.actualizarMarcador(marcador);
                socket.broadcast.emit('marcador-actualizado', marcador)
            })
        
        });
    }


}


module.exports = Sockets;
