"use strict";
(function () {
    function activar(quien, // argumento obligatorio.
    momento, // argumento opcional.
    objeto // argumento por defecto que se puede cambiar. va siempre el último.
    ) {
        if (objeto === void 0) { objeto = 'coche'; }
        console.log("\u00BF" + quien + " tiene un " + objeto + " " + momento + "?");
    }
    activar('Ella'); //¿Ella tiene un coche?
    activar(); //Error, nos faltan al menos dos argumentos.
    activar('Ella', 'avión', 'ahora'); //¿Ella tiene un avión ahora?
})();
