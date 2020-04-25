
(function() {

    interface Xmen { // Modelo de reglas para objetos
       nombre: string; // propiedad obligatoria
       edad: number; // propiedad obligatoria
       poder?: string; // propiedad opcional
    }

    const wolverine: Xmen = {
        nombre: 'Logan',
        edad: 60
    }

    const enviarMision = ( xmen: Xmen ) => { //es del tipo de la interfaz
        console.log(`Enviando a ${ xmen.nombre } a la misión`);
    }
    
    enviarMision( wolverine );
})();

