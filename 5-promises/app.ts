import { rejects } from "assert";
import { resolve } from "dns";

(()=>{

    const retirarDinero = ( cantidad: number ): Promise<number> => {
        let dineroAct = 1000;
        
        return new Promise( (resolve, rejects ) ) => {
            if ( cantidad > dineroAct ) {
                rejects('No hay suficientes fondos');
            } else {
                dineroAct -= cantidad;
                resolve( dineroAct );
            }
        });

    }

    retirarDinero( 1500 )
        .then( dineroAct => console.log(`Me queda ${ dineroAct }`) )
        .catch( console.warn )

})();

