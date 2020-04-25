
(function() {

    function activar( quien: string, // argumento obligatorio.
        momento? : string, // argumento opcional.
        objeto: string = 'coche' // argumento por defecto que se puede cambiar. va siempre el último.
        ) { 
        console.log(`¿${ quien } tiene un ${ objeto } ${momento}?`);
    }

    activar('Ella'); //¿Ella tiene un coche?
    activar(); //Error, nos faltan al menos dos argumentos.
    activar('Ella', 'avión', 'ahora'); //¿Ella tiene un avión ahora?

})();

