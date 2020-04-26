import { rejects } from "assert";
import { resolve } from "dns";

(() {

    const sumar = (a: number, b: number): number => {
        //return 'a + b'; // error, the type of return is number
        return a + b;
    };

    const nombre = ():string => 'Hola mundo';

    const obtenerNombre = ():Promise<string> => {

        return new Promise( (resolve, rejects) ) => {
            //resolve(1); //Error, the type is string
            resolve('Ángela');
        }

        obtenerNombre().then( a => console.log( a.toUpperCase() ) );
    }
})();

