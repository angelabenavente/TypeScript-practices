
(function() {

    const avenger = {
        nombre: 'Steve',
        clave: 'Capitán América',
        poder: 'Droga'
    }

    const extraer = ( { nombre, poder }: any ) => { //ahorramos la línea de código de la desestructuración, haciéndola en el argumento en vez de usar "avenger: any".

        //const { nombre, poder } = avenger;

        console.log(nombre);
        console.log(poder);
    }

    extraer( avenger );

    const avengers: string[] = ['Thor', 'Ironman', 'Spiderman'];
    //const [ uno, dos, tres ] = avengers;

    const extraerArr = ([ uno, dos, tres]: string [] ) => { // en vez de avengers: string[]

        console.log(uno);
        console.log(dos);
        console.log(tres);
    }

    extraerArr( avengers );

})();

